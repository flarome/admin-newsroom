import imageSharesheet from "../plugins/media/imageInline";
import location from "../plugins/location";
import quote from "../plugins/quote"
export default function setup (editor) {

      // Liste des modules à ajouter à l'éditeur
  const modules = [
    imageSharesheet,
    location,
    quote
  ];

  // Ajouter chaque module à l'éditeur
  modules.forEach((module) => module(editor));
  
   
    
      // Bouton pour modifier une image existante
  };