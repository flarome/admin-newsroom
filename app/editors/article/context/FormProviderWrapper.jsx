import { FormProvider, useForm, useFormState } from "react-hook-form";



export const extractErrorsSubset = (formErrors, fields) => {
  const subset = {};
  for (const key of fields) {
    if (formErrors[key]) {
      subset[key] = formErrors[key];
    }
  }
  return subset;
};
export const extractMessages = (obj) => {
  const seen = new Set();
  const messages = [];

  const explore = (node) => {
    if (node && typeof node === "object") {
      if (typeof node.message === "string" && !seen.has(node.message)) {
        seen.add(node.message);
        messages.push(node.message);
      }
      Object.values(node).forEach(explore);
    }
  };

  explore(obj);
  return messages;
};

export const FormProviderWrapper = ({ initialData, children }) => {
  const methods = useForm({
    defaultValues: initialData,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      {typeof children === "function" ? children({ submitForm }) : children}
    </FormProvider>
  );
};