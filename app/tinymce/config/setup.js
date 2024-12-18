import {imageInline, dropcaps, quote, location} from "../plugins"

export default function setup (editor) {

      // Liste des modules à ajouter à l'éditeur
  const modules = [
    imageInline,
    dropcaps,
    location,
    quote
  ];

  // Ajouter chaque module à l'éditeur
  modules.forEach((module) => module(editor));
  
   
    
      // Bouton pour modifier une image existante
  };