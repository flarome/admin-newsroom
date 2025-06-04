import { useArticle } from "../context/articleContext";
import { useMemo } from "react";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";
import _ from "lodash";
import { useWatch } from "react-hook-form";

export function useGetBlog() {
  const { blogs } = useArticle();

  const blogId = useWatch({ name: FieldsMap.blogId }) || "";
 
  return useMemo(
    () => blogId ? blogs.nodes.find((b) => b.id === blogId) : blogs.nodes[0],
    [blogs, blogId],
  );
}
