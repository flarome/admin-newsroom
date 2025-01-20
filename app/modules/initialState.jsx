import { defaultImage } from "../routes/modules/getInfo";

export const layout = {

  modal: null,
  header: null,
  header_scrim: null,
  nav: null,
  nav_scrim: null,
  body: null,
  footer: null,
  footer_scrim: null,
  banner_full: null,
}

export const author = {

  type: "press_contacts",
  id: null,
  handle: null,
  name: null
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
  author,
  mainImage: defaultImage,
  content: "",
  tags: [],
  template: "",
  isPublished: false,
  layout
};

export const initalBlog = {
  tags: [],
  url: null,
};
