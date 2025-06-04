import { memo, useEffect } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import { SaveBar as AppBridgeSaveBar, useAppBridge } from "@shopify/app-bridge-react";
import { prefix } from "../config/ids";

export const saveBarId = `${prefix}:saveBar`;

const SaveBar = ({ handleSubmit }) => {
  const shopify = useAppBridge()
  const { handleSubmit: rhfHandleSubmit, reset } = useFormContext();
  const { errors, isSubmitting, isDirty, defaultValues } = useFormState();

  useEffect(() => {
    if (isDirty) {
      shopify.saveBar.show(saveBarId);
    } else {
      shopify.saveBar.hide(saveBarId);
    }
  }, [isDirty, shopify]);

  return (
    <AppBridgeSaveBar id={saveBarId} discardConfirmation="" open={isDirty}>
      <button onClick={() => reset(defaultValues, { keepDirty: false,
      keepTouched: false,
      keepErrors: false,    
      keepIsSubmitted: false,
      keepSubmitCount: false,})} disabled={!isDirty || isSubmitting ? "" : undefined} />
      <button
        variant="primary"
        type="submit"
        onClick={rhfHandleSubmit(handleSubmit)}
        disabled={!isDirty || isSubmitting || Object.keys(errors).length > 0 ? "" : undefined}
        loading={isSubmitting ? "" : undefined}
      />

    </AppBridgeSaveBar>
  );
};

export default memo(SaveBar);
