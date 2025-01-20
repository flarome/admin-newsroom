import React, { useState, useCallback, useMemo, useEffect } from "react";

import {
  Button,
  Icon,
  DatePicker,
  TextField,
  Box,
  LegacyStack,
  ChoiceList,
  Text,
  BlockStack,
  Card,
  Autocomplete,
  InlineStack,
} from "@shopify/polaris";
import { CalendarIcon, CalendarTimeIcon, ClockIcon, DeleteIcon, EditIcon } from "@shopify/polaris-icons";

import { DateTime } from "luxon";

import { initialArticle } from "../../../modules/initialState";

// uuid
import { v4 as uuid } from "uuid";

// app bridge
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";

function isValidDate(date) {
  if (!date) return false; // Vérifie si la date existe

  // Si la date est une chaîne de caractères, on vérifie si elle est vide après trim
  if (typeof date === "string") {
    return date.trim() !== "";
  }

  // Si la date est une instance de Date, on vérifie sa validité
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }

  return false; // Si ce n'est ni une chaîne, ni une instance de Date valide
}

// Callback pour formater la date au format "jour/mois/année"
function formatDate(date, option) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("fr-FR", option);
} // Il n'y a pas de dépendances ici, donc la fonction est mémorisée et ne sera recalculée qu'au premier rendu


const getUtcOffset = () => {
  // Crée un objet Date pour la date actuelle
  const date = new Date();

  // Obtenir le décalage en minutes par rapport à UTC
  const offsetInMinutes = date.getTimezoneOffset();

  // Convertir en heures, car getTimezoneOffset() retourne le décalage en minutes
  const offsetInHours = offsetInMinutes / 60;

  // Formater l'offset en UTC+X ou UTC-X
  const formattedOffset = `UTC${offsetInHours > 0 ? '-' : '+'}${Math.abs(offsetInHours)}`;

  return formattedOffset;
};

// Exemple d'utilisation
const utcOffset = getUtcOffset();


const modalId = "date-modal" + uuid();




const ModalLayout = ({ setDate, date, setPublished }) => {
  const shopify = useAppBridge();

  // Synchronisation de fields avec layout via useEffect
  const [localDate, setLocalDate] = useState(date);

  useEffect(() => {
    setLocalDate(date); // Met à jour fields chaque fois que layout change
  }, [date]); // Le tableau de dépendances permet de déclencher l'effet seulement lorsque layout change


  const isModified = useMemo(() => {
    return new Date(date).toISOString() !== new Date(localDate).toISOString();
  }, [localDate, date]);
  






  // État pour l'heure



  // État pour selectedDates 



  // Fonction pour initialiser l'état
  const initializeDate = useMemo(() => {
    return { month: localDate.getMonth(), year: localDate.getFullYear() };
  }, [localDate]);

  // Initialisation de l'état
  const [{ month, year }, setDateCalendar] = useState(initializeDate);
  const handleMonthChange = useCallback(
    (month, year) => setDateCalendar({ month, year }),
    [],
  );

  useEffect(() => {
    setDateCalendar(initializeDate); // Met à jour fields chaque fois que layout change
  }, [initializeDate]); // Le tableau de dépendances permet de déclencher l'effet seulement lorsque layout change


  const handleDateChage = useCallback(
    (value) => {
      // Récupère la date actuelle de localDate
      const currentLocalDate = new Date(localDate); 
  
      // Crée une nouvelle date à partir de value.start
      const newDate = new Date(value.start);
  
      // Met à jour la date tout en conservant l'heure, les minutes et les secondes de localDate
      newDate.setHours(currentLocalDate.getHours());
      newDate.setMinutes(currentLocalDate.getMinutes());
      newDate.setSeconds(currentLocalDate.getSeconds());
      newDate.setMilliseconds(currentLocalDate.getMilliseconds());
  
      // Mets à jour localDate avec la nouvelle date mais la même heure
      setLocalDate(newDate);
    },
    [localDate] // Dépend de localDate, car on en utilise la valeur pour ajuster l'heure
  );

   
  const options = useMemo(() => {
    const times = [


    ];

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute++) {
        
        times.push({ value: `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`, label: `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`});
      }
    }

    return times;
  }, []);




  const [hours, setHours] = useState(`${localDate.getHours().toString().padStart(2, "0")}:${localDate.getMinutes().toString().padStart(2, "0")}`);




  const [dateText, setDateText] = useState(DateTime.fromJSDate(localDate).toFormat('yyyy-MM-dd'));
const [dateTextFocused, setDateTextFocued] = useState(false);

  useEffect(() => {
    setHours(`${localDate.getHours().toString().padStart(2, "0")}:${localDate.getMinutes().toString().padStart(2, "0")}`); // Met à jour fields chaque fois que layout change
    setDateText(DateTime.fromJSDate(localDate).toFormat('yyyy-MM-dd'));
  }, [localDate]); // Le tableau de dépendances permet de déclencher l'effet seulement lorsque layout change




  const handleDateChange = useCallback(
    (event) => {
     

      const value = event.target.value;
      // Expression régulière pour valider le format de la date "AAAA-MM-DD"
      const regex = /^(?:([12]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01]))$/;
      
  
      // Vérifie si la valeur correspond au format attendu
      const match = value.match(regex);
  
      if (match) {
        const [_, year, month, day] = match;
  
        // Crée une nouvelle date à partir de value (avec l'année, le mois, et le jour)
        const newDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
  
        // Récupère l'heure actuelle de localDate
        const currentLocalDate = new Date(localDate);
  
        // Met à jour la nouvelle date avec l'heure actuelle de localDate
        newDate.setHours(currentLocalDate.getHours());
        newDate.setMinutes(currentLocalDate.getMinutes());
        newDate.setSeconds(currentLocalDate.getSeconds());
        newDate.setMilliseconds(currentLocalDate.getMilliseconds());
  
        // Mets à jour localDate avec la nouvelle date (avec heure, minutes, secondes)
        setLocalDate(newDate);
  
        // Mets à jour selectedDates (si nécessaire)
        setSelectedDates({
          start: newDate,
          end: new Date(value.end), // Exemple de mise à jour de `end` si nécessaire
        });
      } else {

        // Optionnellement, réinitialiser localDate si la date est invalide
        setDateText(DateTime.fromJSDate(localDate).toFormat('yyyy-MM-dd')); // Exemple de réinitialisation
      }
      setDateTextFocued(false);
    },
    [localDate] // Dépend de localDate pour manipuler les heures et minutes actuelles
  );
  

  const updateText = useCallback(
    (event) => {
      const value = event.target.value;
      // Vérifie que la valeur est une chaîne qui contient un format valide "HH:mm" ou "H:mm"
      const regex = /^(?:([01]?\d|2[0-3]):([0-5]?\d))$/; // Permet de valider des heures de 00:00 à 23:59 et des minutes de 00 à 59
      const match = value.match(regex); // Teste la valeur contre l'expression régulière
  
      if (match) {
        let [_, hours, minutes] = match; // Récupère l'heure et les minutes
  
        // Si l'heure a un seul chiffre, on ajoute un zéro devant
        hours = hours.padStart(2, '0');
        minutes = minutes.padStart(2, '0');
  
        // Crée une nouvelle date en conservant la date actuelle de localDate
        const newLocalDate = new Date(localDate);
  
        // Si localDate est valide, on met à jour l'heure
        if (!isNaN(newLocalDate)) {
          newLocalDate.setHours(parseInt(hours), parseInt(minutes), 0, 0); // Mets à jour l'heure avec les nouvelles valeurs
          setLocalDate(newLocalDate); // Mets à jour localDate avec la nouvelle date et heure
        }
      } else {
        // Si la valeur n'est pas valide, on ne fait rien ou on réinitialise localDate
        // Optionnellement, réinitialiser localDate à une valeur par défaut si nécessaire
        setHours(`${localDate.getHours().toString().padStart(2, "0")}:${localDate.getMinutes().toString().padStart(2, "0")}`); // Par exemple, si l'heure est invalide, on réinitialise
      }
    },
    [localDate] // On dépend de localDate car on l'utilise dans la fonction
  );
  

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.value;
      });


      
           // Ici, on suppose que selectedValue[0] contient l'heure sous forme de chaîne "HH:mm"
      const [hours, minutes] = selectedValue[0].split(":").map(Number); // Sépare l'heure et les minutes

      // Crée une nouvelle date en conservant la date actuelle de localDate
      const newLocalDate = new Date(localDate);

      // Si localDate est valide, on met à jour l'heure
      if (!isNaN(newLocalDate)) {
        newLocalDate.setHours(hours, minutes, 0, 0); // Mets à jour l'heure avec les nouvelles valeurs
        setLocalDate(newLocalDate); // Mets à jour localDate avec la nouvelle date et heure
      }
          
    },
    [options],
  );


  const submit =
    () => {
   
      setDate(localDate); // Met à jour le layout avec les champs

      const currentDate = new Date();  // Date et heure actuelles
      const selectedDate = new Date(localDate);  // Date et heure sélectionnées
  
      // Vérifie si la date et l'heure sélectionnées sont dans le futur
      if (selectedDate > currentDate) {
        // Si la date est dans le futur, définit `published` à `false`
        setPublished(false);
      } else {
        setPublished(true);

      }
          
    }

  ;
  


  return (
    <Modal id={modalId} variant="base">
      <TitleBar title="Définir la date de visibilité">
        <button
          disabled={!isModified}
          variant="primary"
          onClick={() => {
            shopify.modal.hide(modalId); // Ferme le modal avec l'ID spécifié
           
            submit()
          }}
        >
          Valider
        </button>

        <button
          disabled={!isModified}
          onClick={() => {
            shopify.modal.hide(modalId); // Ferme le modal avec l'ID spécifié
            setLocalDate(date); // Met à jour le layout avec les champs
          }}
        >
          Annuler
        </button>
      </TitleBar>

      <Box
        as="section"
        paddingBlock={{ xs: "400" }}
        paddingInline={{ xs: "400" }}
      >
        <LegacyStack vertical>
          <LegacyStack.Item>
            <Text tone="subdued" variant="bodyMd">
              Programmer la publication de article de blog à cette date et heure
              :
            </Text>
          </LegacyStack.Item>

          <LegacyStack.Item>
            <LegacyStack distribution="fillEvenly" spacing="tight">
              <LegacyStack.Item>
                <TextField
                  prefix={<Icon source={CalendarIcon} tone="neutral" />}
                  label="Date de visibilité"
                  labelHidden
                  autoComplete="off"
                  value={dateText}
                  onFocus={() => setDateTextFocued(true)} // Ferme le Popover si le champ perd le focus
                  
                  onBlur={handleDateChange} // Ferme le Popover si le champ perd le focus
                  onChange={(value) => setDateText(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                  type="text"
                  spellCheck={false}
                  placeholder={dateText}
                />
              </LegacyStack.Item>
              <LegacyStack.Item>
                <Autocomplete
                  options={options}
                  selected={[`${localDate.getHours().toString().padStart(2, "0")}:${localDate.getMinutes().toString().padStart(2, "0")}`]}
                  onSelect={updateSelection}
                  textField={
                    <Autocomplete.TextField
                      prefix={<Icon source={ClockIcon} tone="neutral" />}
                      suffix={utcOffset}
                      label="Heure de visibilité"
                      labelHidden
                      autoComplete="off"
                      
                      value={hours}
                      onChange={(value) => setHours(value)}
                      onBlur={updateText}
                      type="text"
                    />
                  }
                />
              </LegacyStack.Item>
            </LegacyStack>
          </LegacyStack.Item>

          <LegacyStack.Item>
            <DatePicker
              month={month}
              year={year}
              multiMonth
              onChange={handleDateChage}
              onMonthChange={handleMonthChange}
              selected={{
                start: localDate,
                end: localDate,
              }}
            />
          </LegacyStack.Item>
        </LegacyStack>
      </Box>
    </Modal>
  );
};


const Visible = ({
  isPublished,
  setPublished,
  date: dateSend,
  setDate,
}) => {
  const shopify = useAppBridge();


  const theDateAsSelected = useMemo(() => {
    return isValidDate(dateSend);
  }, [dateSend]);

   const date = useMemo(() => {
      return theDateAsSelected ? new Date(dateSend) : new Date();
    }, [dateSend, isPublished]);


 


  return (
    <Card>
      <BlockStack 
     
      
      gap={{ xs: "100" }}>

        <InlineStack
        wrap
        align="space-between"
        direction={{xs:'row'}}
        
        >
  <h2
          className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold"
          tabIndex="-1"
        >
          Visibilité
        </h2>

        
{!theDateAsSelected && !isPublished && 

<Box>

<Button
                            icon={CalendarTimeIcon}
                            variant="plain"
                            size="medium"
                            textAlign="center"
                            accessibilityLabel="Définir la date de visibilité"
                            onClick={() => shopify.modal.show(modalId)}
                          ></Button>

</Box>


}

        </InlineStack>
      

        <LegacyStack vertical spacing="loose" alignment="leading">
          <LegacyStack.Item>
            <ChoiceList
              title="Visibilité"
              titleHidden
              choices={[
                {
                  label: `Visible`,
                  helpText: isPublished ? (
                    <Text variant="bodySm" tone="subdued" as="span">
                      <InlineStack
                        align="space-between"
                        blockAlign="start"
                        gap={{ xs: "200" }}
                        direction={{ xs: "row" }}
                      >
                        <Text variant="bodyMd" tone="subdued" as="span">
                          À partir du
                          {` ${formatDate(date, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })} à ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`}
                        </Text>
                        <Box>
                          <Button
                            icon={EditIcon}
                            variant="plain"
                            size="medium"
                            textAlign="center"
                            accessibilityLabel="Définir la date de visibilité"
                            onClick={() => shopify.modal.show(modalId)}
                          ></Button>
                        </Box>
                      </InlineStack>
                    </Text>
                  ) : undefined,
                  value: "visible",
                },
                ,
                {
                  label: "Masqué",
                  helpText: !isPublished && theDateAsSelected ? (
                    <Text variant="bodySm" tone="subdued" as="span">
                      <InlineStack
                        align="space-between"
                        blockAlign="start"
                        gap={{ xs: "200" }}
                        direction={{ xs: "row" }}
                      >
                        <Text variant="bodyMd" tone="subdued" as="span">
                        Deviendra visible le
                          {` ${formatDate(date, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })} à ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`}
                        </Text>
                        <InlineStack
                        align="space-between"
                        gap={{xs:'300', sm:'025'}}
                        direction={{xs:"row"}}
                        
                        >
                        <Box>
                          <Button
                            icon={EditIcon}
                            variant="plain"
                            size="medium"
                            textAlign="center"
                            accessibilityLabel="Modifier la date de visibilité"
                            onClick={() => shopify.modal.show(modalId)}
                          ></Button>
                        </Box>
                        <Box>
                          <Button
                            icon={DeleteIcon}
                            variant="plain"
                            size="medium"
                            textAlign="center"
                            accessibilityLabel="Supprimer la date de visibilité"
                            onClick={() => setDate(initialArticle.date)}
                          ></Button>
                        </Box>

                        </InlineStack>
                  
                      </InlineStack>
                    </Text>
                  ) : undefined,
                  value: "hidden",
                },
              ]}
              selected={isPublished ? "visible" : "hidden"}
              onChange={(selected, name) => {
                const idPB = selected.includes("visible");  // Vérifie si "visible" est sélectionné
              
                setPublished(idPB);  // Met à jour l'état `published`
              
                const currentDate = new Date();  // Date et heure actuelles
                const selectedDate = new Date(dateSend);  // Date et heure sélectionnées
              
                // Vérifie si la date et l'heure sélectionnées sont dans le futur
                if (selectedDate > currentDate && idPB) {
                  // Si la date est dans le futur et si "visible" est sélectionné, met à jour la date
                  setDate(currentDate);  // Redéfinit la date à la date actuelle
                } else if (selectedDate < currentDate && !idPB) {
                  // Si la date est dans le passé et si "visible" n'est pas sélectionné, redéfinit la date initiale
                  setDate(initialArticle.date);  // Redéfinit la date à la date initiale de l'article
                }
              }}
              // Ou simplement `handleChange` si pas besoin d'ajuster
            />
          </LegacyStack.Item>
        </LegacyStack>
      </BlockStack>

      <ModalLayout setDate={setDate} date={date} setPublished={setPublished} />
    </Card>
  );
};

export default Visible;
