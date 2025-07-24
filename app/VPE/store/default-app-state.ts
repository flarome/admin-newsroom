import { PrivateAppState } from "../types/Internal";
import {WYSIWYGData} from '../__test__/data'

export const defaultAppState: PrivateAppState = {
  data: { WYSIWYG: WYSIWYGData, settings: {} },
  ui: {
    arrayState: {},
    itemSelector: null,
    isDragging: false,
  },
  indexes: {
    nodes: {},
    zones: {},
  },
}; 
