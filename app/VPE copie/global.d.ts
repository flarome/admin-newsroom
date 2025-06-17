// Pour les fichiers CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Pour les fichiers SCSS modules (si tu en as)
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Pour les fichiers CSS normaux
declare module '*.css';