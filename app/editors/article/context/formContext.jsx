import React, {
  useMemo,
  useCallback,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { useForm as ReactUseForm, useFormContext } from "react-hook-form";
import _ from "lodash";

const FormContext = createContext(null);

export function useForm() {
  return useContext(FormContext);
}

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

export function FormProvider({
  initialData,
  children,
  onSubmit,
  initialErrors = {},
}) {

  // Stocke les erreurs du dernier submit raté
  const [lastSubmitErrors, setLastSubmitErrors] = useState(initialErrors);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    control,
    formState: { errors: formErrors, isDirty, isSubmitting },
    reset,
    clearErrors,
    resetField,
  } = ReactUseForm({
    defaultValues: initialData,
    mode: "onChange",
  });

  
  const fields = watch();


  const defaultSetValue = useCallback(
    (name, value) => {
      setValue(name, value, { shouldDirty: true, shouldValidate: true });
      const newErrors = _.cloneDeep(lastSubmitErrors);
      if (_.has(newErrors, name)) {
        _.unset(newErrors, name);
        setLastSubmitErrors(newErrors);
      }
      if (_.has(formErrors, name)) clearErrors(name);
    },
    [setValue, lastSubmitErrors, formErrors, clearErrors],
  );

  const clearField = useCallback(
    (name) => {
      setValue(name, "", { shouldDirty: true, shouldValidate: true });
      clearErrors(name);
      const newErrors = _.cloneDeep(lastSubmitErrors); 
      if (_.has(newErrors, name)) {
        _.unset(newErrors, name);
        setLastSubmitErrors(newErrors);
      }
    },
    [setValue, clearErrors, lastSubmitErrors],
  );

  const createOnChange = useCallback(
    (name) => (value) => {
      setValue(name, value, { shouldDirty: true, shouldValidate: true });

      const newErrors = _.cloneDeep(lastSubmitErrors);
      if (_.has(newErrors, name)) {
        _.unset(newErrors, name);
        setLastSubmitErrors(newErrors);
      }

      if (_.has(formErrors, name)) clearErrors(name);
    },
    [setValue, clearErrors, formErrors, lastSubmitErrors],
  );

  const submitForm = (customCallback) =>
    handleSubmit(
      async (...args) => {
        if (!isDirty) return;

        setLastSubmitErrors({});

        if (customCallback) {
          // On attend la promesse même si sync
          await Promise.resolve(customCallback(...args));
        } else if (onSubmit) {
          await Promise.resolve(onSubmit(...args));
        }
      },
      () => setLastSubmitErrors(formErrors),
    )();

  // Si plus AUCUNE erreur après modif, cache la bannière
  React.useEffect(() => {
    if (
      Object.keys(lastSubmitErrors).length > 0 &&
      Object.keys(formErrors).length === 0
    ) {
      setLastSubmitErrors({});
    }
  }, [formErrors, lastSubmitErrors]);

  // reset complet
  const customReset = useCallback(
    (...args) => {
      reset(...args);
      setLastSubmitErrors({});
    },
    [reset],
  );

  const setExternalError = useCallback(
    (name, message) => {
      setError(name, { type: "manual", message });
    },
    [setError],
  );

  const setExternalErrorWithBanner = useCallback(
    (name, message) => {
      setError(name, { type: "manual", message });
      setLastSubmitErrors((prev) => ({
        ...prev,
        [name]: { type: "manual", message },
      }));
    },
    [setError],
  );

  // Memo
  const ctx = useMemo(
    () => ({
      clearErrors,
      resetField,
      register,
      setValue,
      watch,
      fields,
      control,
      formErrors,
      clearField,
      isDirty,
      isSubmitting,
      reset: customReset,
      createOnChange,
      setExternalErrorWithBanner,
      defaultSetValue,
      submitForm,
      setExternalError,

      lastSubmitErrors, // <= C’est cette variable qu’on utilise pour la bannière
    }),
    [
      resetField,
      clearErrors,
      register,
      setValue,
      watch,
      control,
      fields,
      formErrors,
      isDirty,
      isSubmitting,
      customReset,
      createOnChange,
      submitForm,
      lastSubmitErrors,
      setExternalErrorWithBanner,
      clearField,
      defaultSetValue,
      setExternalError,
    ],
  );

  return <FormContext.Provider value={ctx}><> {children}</></FormContext.Provider>;
}
