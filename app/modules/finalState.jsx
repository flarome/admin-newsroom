import { defaultImage } from "../routes/modules/getInfo";

export const layout = {

  modal: false,
  header: "Dark",
  header_scrim: false,
  nav: "Light",
  nav_scrim: false,
  body: "Light",
  footer: "Light",
  footer_scrim: false,
  banner_full: false
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
