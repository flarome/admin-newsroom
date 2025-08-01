export const WYSIWYGData = 


[ 
  {
    children: [{ text: "Welcome to the Plate Playground!" }],
    type: "h1", 
  },
  {
    children: [
      { text: "Experience a modern rich-text editor built with " },
      { children: [{ text: "Slate" }], type: "a", url: "https://slatejs.org" },
      { text: " and " },
      { children: [{ text: "React" }], type: "a", url: "https://reactjs.org" },
      {
        text: ". This playground showcases just a part of Plate's capabilities. ",
      },
      { 
        children: [{ text: "Explore the documentation" }],
        type: "a",
        url: "/docs",
      },
      { text: " to discover more." },
    ],
    type: "p",
  },
  // Suggestions & Comments Section
  {
    children: [{ text: "Collaborative Editing" }],
    type: "h2",
  },
  {
    children: [
      { text: "Review and refine content seamlessly. Use " },
      {
        children: [
          {
            suggestion: true,
            suggestion_playground1: {
              id: "playground1",
              createdAt: Date.now(),
              type: "insert",
              userId: "alice",
            },
            text: "suggestions",
          },
        ],
        type: "a",
        url: "/docs/suggestion",
      },
      {
        suggestion: true,
        suggestion_playground1: {
          id: "playground1",
          createdAt: Date.now(),
          type: "insert",
          userId: "alice",
        },
        text: " ",
      },
      {
        suggestion: true,
        suggestion_playground1: {
          id: "playground1",
          createdAt: Date.now(),
          type: "insert",
          userId: "alice",
        },
        text: "like this added text",
      },
      { text: " or to " },
      {
        suggestion: true,
        suggestion_playground2: {
          id: "playground2",
          createdAt: Date.now(),
          type: "remove",
          userId: "bob",
        },
        text: "mark text for removal",
      },
      { text: ". Discuss changes using " },
      {
        children: [
          { comment: true, comment_discussion4: true, text: "comments" },
        ],
        type: "a",
        url: "/docs/comment",
      },
      {
        comment: true,
        comment_discussion4: true,
        text: " on many text segments",
      },
      { text: ". You can even have " },
      {
        comment: true,
        comment_discussion6: true,
        suggestion: true,
        suggestion_playground3: {
          id: "playground3",
          createdAt: Date.now(),
          type: "insert",
          userId: "charlie",
        },
        text: "overlapping",
      },
      { text: " annotations!" },
    ],
    type: "p",
  },
  // {
  //   children: [
  //     {
  //       text: 'Block-level suggestions are also supported for broader feedback.',
  //     },
  //   ],
  //   suggestion: {
  //     suggestionId: 'suggestionBlock1',
  //     type: 'block',
  //     userId: 'charlie',
  //   },
  //   type: 'p',
  // },
  // AI Section
  {
    children: [{ text: "AI-Powered Editing" }],
    type: "h2",
  },
  {
    children: [
      { text: "Boost your productivity with integrated " },
      {
        children: [{ text: "AI SDK" }],
        type: "a",
        url: "/docs/ai",
      },
      { text: ". Press " },
      { kbd: true, text: "⌘+J" },
      { text: " or " },
      { kbd: true, text: "Space" },
      { text: " in an empty line to:" },
    ],
    type: "p",
  },
  {
    children: [
      { text: "Generate content (continue writing, summarize, explain)" },
    ],
    indent: 1,
    listStyleType: "disc",
    type: "p",
  },
  {
    children: [
      { text: "Edit existing text (improve, fix grammar, change tone)" },
    ],
    indent: 1,
    listStyleType: "disc",
    type: "p",
  },
  // Core Features Section (Combined)
  {
    children: [{ text: "Rich Content Editing" }],
    type: "h2",
  },
  {
    children: [
      { text: "Structure your content with " },
      {
        children: [{ text: "headings" }],
        type: "a",
        url: "/docs/heading",
      },
      { text: ", " },
      {
        children: [{ text: "lists" }],
        type: "a",
        url: "/docs/list",
      },
      { text: ", and " },
      {
        children: [{ text: "quotes" }],
        type: "a",
        url: "/docs/blockquote",
      },
      { text: ". Apply " },
      {
        children: [{ text: "marks" }],
        type: "a",
        url: "/docs/basic-marks",
      },
      { text: " like " },
      { bold: true, text: "bold" },
      { text: ", " },
      { italic: true, text: "italic" },
      { text: ", " },
      { text: "underline", underline: true },
      { text: ", " },
      { strikethrough: true, text: "strikethrough" },
      { text: ", and " },
      { code: true, text: "code" },
      { text: ". Use " },
      {
        children: [{ text: "autoformatting" }],
        type: "a",
        url: "/docs/autoformat",
      },
      { text: " for " },
      {
        children: [{ text: "Markdown" }],
        type: "a",
        url: "/docs/markdown",
      },
      { text: "-like shortcuts (e.g., " },
      { kbd: true, text: "* " },
      { text: " for lists, " },
      { kbd: true, text: "# " },
      { text: " for H1)." },
    ],
    type: "p",
  },
  {
    children: [
      {
        children: [
          {
            text: "Blockquotes are great for highlighting important information.",
          },
        ],
        type: "p",
      },
    ],
    type: "blockquote",
  },
  {
    children: [
      { children: [{ text: "function hello() {" }], type: "code_line" },
      {
        children: [{ text: "  console.info('Code blocks are supported!');" }],
        type: "code_line",
      },
      { children: [{ text: "}" }], type: "code_line" },
    ],
    lang: "javascript",
    type: "code_block",
  },
  {
    children: [
      { text: "Create " },
      {
        children: [{ text: "links" }],
        type: "a",
        url: "/docs/link",
      },
      { text: ", " },
      {
        children: [{ text: "@mention" }],
        type: "a",
        url: "/docs/mention",
      },
      { text: " users like " },
      { children: [{ text: "" }], type: "mention", value: "Alice" },
      { text: ", or insert " },
      {
        children: [{ text: "emojis" }],
        type: "a",
        url: "/docs/emoji",
      },
      { text: " ✨. Use the " },
      {
        children: [{ text: "slash command" }],
        type: "a",
        url: "/docs/slash-command",
      },
      { text: " (/) for quick access to elements." },
    ],
    type: "p",
  },
  // Table Section
  {
    children: [{ text: "How Plate Compares" }],
    type: "h3",
  },
  {
    children: [
      {
        text: "Plate offers many features out-of-the-box as free, open-source plugins.",
      },
    ],
    type: "p",
  },
  {
    children: [
      {
        children: [
          {
            children: [
              { children: [{ bold: true, text: "Feature" }], type: "p" },
            ],
            type: "th",
          },
          {
            children: [
              {
                children: [{ bold: true, text: "Plate (Free & OSS)" }],
                type: "p",
              },
            ],
            type: "th",
          },
          {
            children: [
              { children: [{ bold: true, text: "Tiptap" }], type: "p" },
            ],
            type: "th",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "AI" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Comments" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Suggestions" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [
              { children: [{ text: "Paid (Comments Pro)" }], type: "p" },
            ],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Emoji Picker" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [
              { children: [{ text: "Table of Contents" }], type: "p" },
            ],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [{ children: [{ text: "Drag Handle" }], type: "p" }],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [{ children: [{ text: "Paid Extension" }], type: "p" }],
            type: "td",
          },
        ],
        type: "tr",
      },
      {
        children: [
          {
            children: [
              { children: [{ text: "Collaboration (Yjs)" }], type: "p" },
            ],
            type: "td",
          },
          {
            children: [
              {
                attributes: { align: "center" },
                children: [{ text: "✅" }],
                type: "p",
              },
            ],
            type: "td",
          },
          {
            children: [
              { children: [{ text: "Hocuspocus (OSS/Paid)" }], type: "p" },
            ],
            type: "td",
          },
        ],
        type: "tr",
      },
    ],
    type: "table",
  },
  // Media Section
  {
    children: [{ text: "Images and Media" }],
    type: "h3",
  },
  {
    children: [
      {
        text: "Embed rich media like images directly in your content. Supports ",
      },
      {
        children: [{ text: "Media uploads" }],
        type: "a",
        url: "/docs/media",
      },
      {
        text: " and ",
      },
      {
        children: [{ text: "drag & drop" }],
        type: "a",
        url: "/docs/dnd",
      },
      {
        text: " for a smooth experience.",
      },
    ],
    type: "p",
  },
  {
    attributes: { align: "center" },
    caption: [
      {
        children: [{ text: "Images with captions provide context." }],
        type: "p",
      },
    ],
    children: [{ text: "" }],
    type: "img",
    url: "https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: "75%",
  },
  {
    children: [{ text: "" }],
    isUpload: true,
    name: "sample.pdf",
    type: "file",
    url: "https://s26.q4cdn.com/900411403/files/doc_downloads/test.pdf",
  },
  {
    children: [{ text: "" }],
    type: "audio",
    url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  },
  {
    children: [{ text: "Table of Contents" }],
    type: "h3",
  },
  {
    children: [{ text: "" }],
    type: "toc",
  },
  {
    children: [{ text: "" }],
    type: "p",
  },
]; 





// src/data/sectionCatalog.js
export const settingsData = {
  hero: {
    img: {
      title: "mon titre perso",
    },
  }, 
};
export const SETTINGS_CATALOG =




[
  { name: "title", value: "oldestUpdate", field: {
             // label: "Type",
                type: "select",
                options: [
                   {label: 'Newest update', value: 'newestUpdate'},
    {label: 'Oldest update', value: 'oldestUpdate'},
    {label: 'Most spent', value: 'mostSpent'},

                ]
            } },

  {
    name: "seo",
    label: "SEO",
    settings: [
      { name: "seoTitle", field: {
             // label: "Type",
                type: "select",
                options: [
                   {label: 'Newest update', value: 'newestUpdate'},
    {label: 'Oldest update', value: 'oldestUpdate'},
    {label: 'Most spent', value: 'mostSpent'},
    {label: 'Most orders', value: 'mostOrders'},
    {label: 'Last name A–Z', value: 'lastNameAlpha'},
    {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
                ]
            } },
      { name: "seoDesc", field: {
             // label: "Type",
                type: "select",
                options: [
                   {label: 'Newest update', value: 'newestUpdate'},
    {label: 'Oldest update', value: 'oldestUpdate'},
    {label: 'Most spent', value: 'mostSpent'},
    {label: 'Most orders', value: 'mostOrders'},
    {label: 'Last name A–Z', value: 'lastNameAlpha'},
    {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
                ]
            } },
    ],
  },

  {
    name: "group_general",
    label: "General",
    settings: [
      { name: "subtitle",   field: {
             // label: "Type",
                type: "select",
                options: [
                   {label: 'Newest update', value: 'newestUpdate'},
    {label: 'Oldest update', value: 'oldestUpdate'},
    {label: 'Most spent', value: 'mostSpent'},
    {label: 'Most orders', value: 'mostOrders'},
    {label: 'Last name A–Z', value: 'lastNameAlpha'},
    {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
                ]
            }
           },
      {
        name: "advanced",
        label: "Advanced",
        settings: [
          { name: "jsonLd", field: {
             // label: "Type",
                type: "select",
                options: [
                   {label: 'Newest update', value: 'newestUpdate'},
    {label: 'Oldest update', value: 'oldestUpdate'},
    {label: 'Most spent', value: 'mostSpent'},
    {label: 'Most orders', value: 'mostOrders'},
    {label: 'Last name A–Z', value: 'lastNameAlpha'},
    {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
                ]
            } },
        ],
      },
    ],
  },
];
export const SETTINGS_CATALOG1 = [
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



export const sectionsData1 =  [ 
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
  ];


export const SECTIONS_CATALOG = {
  header: { label: "header", sections: SECTION_CATALOG },
   body: { label: "body", sections: SECTION_CATALOG },
  // Ajoute ici tes groupes custom
};
