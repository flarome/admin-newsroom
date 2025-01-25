
export const mainImage = {
  caption: "",

  image: {
    metadata: {
      alt: "",
      uuid: "hero",
      srcs: {
        landscape: "",
        scare: "",
        portrait: "",
      },
    },
  },
};

 
export const layout = {
  latest: 'blog',
  modal: true,
  header: "Dark",
  header_scrim: false,
  nav: "Light",
  nav_scrim: false,
  body: "Light",
  footer: "Light",
  footer_scrim: false
}

export const initialArticle = {
  isNewArticle: true,
  defaultCursor: "",
  id: null,
  url: null,
  title: "",
  subTitle: "",
  extrait: "",
  metaDescription: "",
  metaTitle: "",
  downloadsAllsMedia: "",
  handle: "",
  redirectNewHandle: false,
  date: "",
  author: "",
  contactPresse: [],
  mainImage,
  content: "",
  tags: [],
  template: "",
  isPublished: false,
  layout,

};

export const initalBlog = {
  tags: [],
  url: null,
  authors: []
};
