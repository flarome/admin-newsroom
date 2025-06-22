
import { PlateEditor as PlateEditorType } from "platejs/react";
 import { Value } from "platejs";

export type Data<
    V extends Value = Value
> = ((editor: PlateEditorType) => V) | V | string;

