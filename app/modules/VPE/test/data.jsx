
// src/data/sectionCatalog.js
export const settingsData = {
  hero: {
    img: {
      title: "mon titre perso",
    },
  }, 
};

export const SETTINGS_CATALOG = [
  {
    title: "Hero Section",
    name: "hero",
    props: [
         { 
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
      {
        name: "img",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "img33",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img4",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "i3mg",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "im1g",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img2",
        title: "Image",
        props: [
          {
            name: "price",
            type: "plainText",
            label: "price",
            value: "price",
          },
        ],
      },
    ],
  },

  {
    title: "Hero Section",
    name: "herrro",
    props: [
      {
        name: "img",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "img33",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img4",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "i3mg",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "im1g",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img2",
        title: "Image",
        props: [
          {
            name: "price",
            type: "plainText",
            label: "price",
            value: "price",
          },
        ],
      },
    ],
  },

  {
    title: "Hero Section",
    name: "hrero",
    props: [
      {
        name: "img",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "img33",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img4",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "i3mg",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "im1g",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img2",
        title: "Image",
        props: [
          {
            name: "price",
            type: "plainText",
            label: "price",
            value: "price",
          },
        ],
      },
    ],
  },

  {
    title: "Hero Section",
    name: "hejkjkjjkjkjkkjjkro",
    props: [
      {
        name: "img",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "img33",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img4",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "i3mg",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },

      {
        name: "im1g",
        title: "Image",
        props: [
          {
            name: "title",
            type: "plainText",
            label: "Title",
            value: "Hero title",
          },
        ],
      },
      {
        name: "img2",
        title: "Image",
        props: [
          {
            name: "price",
            type: "plainText",
            label: "price",
            value: "price",
          },
        ],
      },
    ],
  },
]; 


const SECTION_CATALOG =  [ 
  {
    title: "Hero Section",
    type: "hero",
    maxInstances: 10, // Limite de 2 "hero" max (optionnel)
    minInstances: 3,
    defaultInstancesNumber: 1, // ← exemple de default
    props: [
      {
     
        name: "cta",
        label: "Boutons",
        props: [
          { name: "showCta", type: "checkbox", label: "Show CTA", value: true },
          {
            name: "showCta2",
            type: "checkbox",
            label: "Show CTA 2",
            value: false,
          },
        ],
      },
      { name: "title", type: "plainText", label: "Title", value: "Hero title" },
      {
        name: "alignment",
        type: "select",
        label: "Alignment",
        value: "center",
        options: ["left", "center", "right"],
      },
      { name: "showCta", type: "checkbox", label: "Show CTA", value: true },
      { name: "showCta2", type: "checkbox", label: "Show CTA 2", value: false },
      {
        name: "fontSize",
        type: "range",
        label: "Font Size",
        value: 32,
        min: 12,
        max: 48,
      },
    ],
    blocks: [
      {
            minInstances: 11,
        defaultInstancesNumber: 2, // ← exemple de default
        maxInstances: 11, // Limite de 2 "hero" max (optionnel)
        type: "text_block",
        title: "Text Block",
        props: [
          {
            name: "content",
            type: "plainText",
            label: "Content",
            value: "Default text",
          },
        ],
      },
      {
        maxInstances: 2, // Limite de 2 "hero" max (optionnel)
        type: "image_block",
        title: "Image Block",
        props: [
          {
            name: "url",
            type: "text",
            label: "Image URL",
            value: "https://example.com/image.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Feature Section",
    type: "features",
    props: [
      { name: "title", type: "text", label: "Title", value: "Feature title" },
    ],
    blocks: [
      {
        type: "feature_item",
        title: "Feature Item",
        props: [
          { name: "label", type: "text", label: "Label", value: "Feature" },
          {
            name: "description",
            type: "text",
            label: "Description",
            value: "Description of the feature.",
          },
        ],
      },
    ],
  },
];


export const sectionsData = {
  header: [ 
    {
      title: "Hero Section",
      type: "hero", 
      visible: true,
      blocks: [
        {
          type: "text_block",
        },
        {
          type: "text_block",
        },
        {
          type: "text_block",
        },
        {
          type: "text_block",
        },
      ],
      values: {
        title: "data title",
        cta: {
          showCta: false,
        },
      },
    },
    {
      title: "Hero Section",
      type: "hero",
      visible: true,
      values: {},
    },
    {
      title: "Hero Section",
      type: "hero",
      visible: true,
      values: {},
    },
  ],

  main: [],
  footer: [],
  modele: [],
  // Ajoute ici tes groupes custom
};

export const SECTIONS_CATALOG = {
  header: { label: "header", sections: SECTION_CATALOG },
   body: { label: "body", sections: SECTION_CATALOG },
  // Ajoute ici tes groupes custom
};
