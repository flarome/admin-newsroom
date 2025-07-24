// components/RouteInner.tsx
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { VPE } from ".";
import { exposePostMessageTools } from "../_dev";
import { createMessageChannel } from "../utils/postMessageSecure";
import { messageChanel } from "./_intercom";

// @ts-ignore
import DesignSystemProviderStyles from "./styles/DesignSystemProvider.css?url";
// @ts-ignore
import MainStyles from "./styles/Main.css?url";

export const links = [
  { rel: "stylesheet", href: DesignSystemProviderStyles },
  { rel: "stylesheet", href: MainStyles },
];

import { Config, UserGenerics, UiState, Data, InitialHistory } from "./types";
import { VPEBase } from "./context/PropsContext";
import { useLoaderData } from "@remix-run/react";
import type { LoaderData } from "../routes/a.vpe";

import { Footer } from "../components/footer";
type token = string | null;

export type VpeConfig = {
  token: token;
};

export type ModalProps<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>,
> = {
  data: Partial<G["UserData"] | Data>;
};





const Inner = ({token}: {token: token}) => {
  const [payload, setPayload] = useState<ModalProps | null>(null);
  const [channel, setChannel] = useState<ReturnType<
    typeof createMessageChannel
  > | null>(null);

  useEffect(() => {
  if (!token) {
    console.log("[Modal] Pas de token → pas de communication attendue → mode autonome");
    setPayload({
      data: {}, // ou fake data
    });
    return;
  }

    if (!token) {
      console.error("[Modal] Missing token, cannot init secure channel");
      return;
    }

    console.log("[Modal] Creating secure message channel...");
    const ch = createMessageChannel({
      targetWindow: window.opener || window.parent,
      targetOrigin: window.location.origin,
      token,
    });

    setChannel(ch);

    ch.on(messageChanel.set, (data: ModalProps) => {
      console.log("[Modal] Received DATA:", data);
      setPayload(data);
      ch.send(messageChanel._ACK, { msg: "Data received" });
    });

    ch.on(messageChanel._ACK, (payload) => {
      console.log("[Modal] Received ACK from CMS:", payload);
    });

    ch.send(messageChanel._READY, { timestamp: Date.now() });
    console.log("[Modal] Sent READY message to CMS");

    return () => {
      console.log("[Modal] Destroying message channel");
      setChannel(null);
      ch.destroy();
    };
  }, [token]);

  const onChange = useCallback(
    (data: ModalProps) => {
      if (!channel) {
        console.warn("[onChange] Channel not available, aborting send.");
        return;
      }

      console.log("[onChange] Sending data to channel:", data);
      channel.send(messageChanel.set, data);
    },
    [channel],
  );

  const VPEData: VPEBase = useMemo(
    () => ({
      ...payload,
      onChange,
    }),
    [payload, onChange],
  );

  return (
    <>
      {payload ? (
        <VPE {...VPEData} />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontFamily: "sans-serif",
            color: "#999",
          }}
        >
          <span>Chargement de l'éditeur…</span>
        </div>
      )}
    </>
  ); 
};


const RouteInner = () => {
   const { config } = useLoaderData<LoaderData>();
  return (
      <div data-cms="vpe">
        <Inner token={config.token} />
      
        {process.env.NODE_ENV !== "production" && <Dev />}
      </div>
  );
};

function Dev() {
  useEffect(() => {
    exposePostMessageTools(
      "vpe",
      {
        opener: true,
      },
      location.origin,
    );
  }, []);

  return null;
}

export const Route = memo(RouteInner);
