import { Field } from "./Fields";



// ===== GLOBAL SETTINGS REQUESTED  TYPE FOR VPE (FOR SETTINGS & SECTIONS SETTINGS) =====


export type Setting <F = Field<any>> = {
  name: string;
  field: F;
  value?: any;
}

export type SettingsPart = {
  name: string;
  label?: string;
  settings: Setting[];
}


export type SettingsGroup = {
  name: string; 
  label?: string;
  settings: (SettingsPart | Setting)[];
}


export type SettingsSchema = (SettingsGroup | SettingsPart | Setting)[];





// ===== LOCAL SETTINGS PACKAGES REQUESTED TYPE (FOR SETTINGS) =====

export type SettingsCatalog = SettingsSchema;


// ===== LOCAL SECTIONS PACKAGES REQUESTED TYPE (FOR SECTIONS) =====

export type ContentCatalog =  Record<string, any>;





export type Config = {


    settings: {
        catalog: SettingsCatalog;
    },
    content: {
        catalog: ContentCatalog
    },
    
    // Add other configuration properties as needed
};  