import "./styles/reset.css";
import "./styles/globals.css";
import appStyles from "./styles/app.module.css";

import { memo } from "react";

import { cn } from "./_plate/lib/utils";
import { ClientOnly } from "../../../components/utils/client-only";

import App from "./_plate";
import Loading from "./loading";
import { PropsProvider } from "./_plate/context/PropsContext";
import { EditorProps } from "./_plate/context/PropsContext";
import { EditorContextProvider } from "./_plate/context/EditorContext";

type ModeType = "PAGE" | "EMBEDDED"; 

interface UIConfig {
  mode: ModeType;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
}

type MainProps = {
  ui?: UIConfig;
  editor: EditorProps;
};

const Page = ({ ui = { mode: "PAGE" }, editor: editorProps }: MainProps) => (
  <div data-cms="editor">
    <div className={cn("h-full", "w-full")}>
      <div
        className={appStyles.page}
        style={{
          minHeight:
            ui.mode === "PAGE" ? undefined : (ui.minHeight ?? undefined),
          maxHeight:
            ui.mode === "PAGE" ? undefined : (ui.maxHeight ?? undefined),
          height: ui.mode === "PAGE" ? "100%" : (ui.height ?? "100%"),
        }}
      >
        <div className={appStyles.root}>
          <div className={appStyles.container}>
            <ClientOnly
              fallback={
                <div className={appStyles.spinner}>
                  <Loading />
                </div>
              }
            >
              {() => (
                <div className={appStyles.section}>
                  <div className="h-full">
                    <PropsProvider {...editorProps}>
                      <EditorContextProvider {...editorProps}>
                        <App {...editorProps} />
                      </EditorContextProvider>
                    </PropsProvider>
                  </div>
                </div>
              )}
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
); 
 
export default memo(Page);
