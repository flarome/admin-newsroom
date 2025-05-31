import { Select, FormLayout } from "@shopify/polaris";
import _ from "lodash";
import { Controller, useFormContext } from "react-hook-form";
import { useArticle } from "../context/articleContext";
import { prefix } from "../config/ids";
import { form as FieldsMap } from "../config/fieldMap";

export const fieldPath = FieldsMap.blogId;

const Blog = () => {
  const { blogs } = useArticle();
  const { control } = useFormContext();

  const options =
    blogs?.nodes?.map((blog) => ({
      label: blog.title,
      value: blog.id,
    })) ?? [];

  return (
    <FormLayout>
      <Controller
        name={fieldPath}
        control={control}
        render={({
          field: { value, onChange },
          fieldState: { error },
        }) => (
          <Select
            label="Blog"
            name={`${prefix}.${fieldPath}`}
            id={`${prefix}:${fieldPath}`}
            options={options}
            value={value || blogs.nodes[0].id}
            onChange={onChange}
            error={error?.message}
          />
        )}
      />
    </FormLayout>
  );
};

export default Blog;
