import { Data } from "./Data";

export type ItemWithId = {
  _arrayId: string;
  _originalIndex: number;
};
export type ArrayState = { items: ItemWithId[]; openId: string };


export type UiState = {
    itemSelector: null;
  arrayState: Record<string, ArrayState | undefined>;
    isDragging: boolean;
field: { focus?: string | null };
};

export type AppState<UserData extends Data = Data> = {
  data: UserData;
  ui: UiState;
};
 