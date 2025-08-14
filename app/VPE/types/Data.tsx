

import type { Data as WYSIWYGDataType } from "../packages/WYSIWYG/_plate/types";


// ===== GLOBAL SETTINGS REQUESTED  TYPE FOR VPE (FOR SETTINGS & SECTIONS SETTINGS) =====
/*
export type Settings = {
  [sectionName: string]: {
    [paramName: string]: any | {
      [propName: string]: any;
    };
  };
};*/

export type Settings = {
  [settingId: string]: any;
};




export type Data = {
  WYSIWYG: WYSIWYGDataType;
  settings: Settings;
}; 


export type Content = any;



 export type InputData = {
  content: Content;
  settings: Settings;
}

export type Metadata = { [key: string]: any };
