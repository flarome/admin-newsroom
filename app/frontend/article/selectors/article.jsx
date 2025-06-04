import { useMemo } from "react";
import { useArticle } from "../context/articleContext";

export function useGetUrl() {
  const { article, shop } = useArticle();

  return useMemo(() => {
    if (!article?.handle || !article?.blog?.handle || !shop?.url) return "";
    return `${shop.url}/blogs/${article.blog.handle}/${article.handle}`;
  }, [article?.handle, article?.blog?.handle, shop?.url]);
}