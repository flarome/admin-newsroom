import { useFormContext } from 'react-hook-form';
import { mapShopifyErrorsToFormErrors } from './errors';


export function useApplyShopifyErrors() {
  const { setError } = useFormContext();

  return async function apply(response, onValid) {
    const userErrors = response?.userErrors;

    if (userErrors?.length) {
      const formErrors = mapShopifyErrorsToFormErrors(userErrors);
      formErrors.forEach(({ path, message }) => {
        setError(path, { type: 'server', message });
      });
      return;
    }

    if (typeof onValid === 'function') {
      await onValid();
    }
  };
}