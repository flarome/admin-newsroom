import imageSharesheet from "./plugins/image/imageSharesheet";

export default function setup (editor) {

      // Liste des modules à ajouter à l'éditeur
  const modules = [
    imageSharesheet
  ];

  // Ajouter chaque module à l'éditeur
  modules.forEach((module) => module(editor));
  
   
    
      // Bouton pour modifier une image existante
  };