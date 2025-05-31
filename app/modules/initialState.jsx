

export const mainImage = {
  caption: "",

  image: {
    metadata: {
      alt: "",
      format: {

       
        crop: "",
        padColor: ""


      },
      srcs: {
        landscape: "",
        scare: "",
        portrait: "",
      },
    },
  },
};

export const layout = {
  latest: null,
  modal: null,
  header: null,
  header_scrim: null,
  nav: null,
  nav_scrim: null,
  body: null,
  footer: null,
  footer_scrim: null,
};

export const initialArticle = {
  blogId: null,
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
  body: [],
  tags: [],
  template: "",
  isPublished: false,
  layout,
};

export const initalBlogs = []

export const initalLibs = {
  authors: [],
  templates: [],
  tags: [],
}
