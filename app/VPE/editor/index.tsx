import "./styles/reset.css";
import "./styles/globals.css";
import appStyles from "./styles/app.module.css";
import "katex/dist/katex.min.css";

import { memo } from "react";
import { Toaster } from "sonner";

import { cn } from "./lib/utils";
import { ClientOnly } from "../../components/utils/client-only";

import { PlateEditor } from "./components/editor/plate-editor";
import Loading from "./loading";

type ModeType = "PAGE" | "EMBEDDED";

interface UIConfig {
  mode: ModeType;
  height?: string;
  maxHeight?:string;
  minHeight?:string;
}

interface MainProps {
  config?: Record<string, any>;
  ui?: UIConfig;
}

const Page = ({ config = {}, ui = { mode: "PAGE" } }: MainProps) =>  (
    <div data-cms="editor">
      <div className={cn("h-full", "w-full")}>
        <div
          className={appStyles.page}
          style={{
            minHeight:  ui.mode === "PAGE" ? undefined : (ui.minHeight ?? undefined),
            maxHeight:  ui.mode === "PAGE" ? undefined : (ui.maxHeight ?? undefined),
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
                      <PlateEditor />

                      <Toaster />
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