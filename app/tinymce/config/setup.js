import imageSharesheet from "../plugins/image/imageSharesheet";
import location from "../plugins/location";
export default function setup (editor) {

      // Liste des modules à ajouter à l'éditeur
  const modules = [
    imageSharesheet,
    location
  ];

  // Ajouter chaque module à l'éditeur
  modules.forEach((module) => module(editor));
  
   
    
      // Bouton pour modifier une image existante
  };