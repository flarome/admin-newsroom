import { memo, useCallback, useEffect } from "react";

// Remix
import { useLoaderData } from "@remix-run/react";

// Styles
import DesignSystemProviderStyles from "@VPE/styles/DesignSystemProvider.css?url";
import MainStyles from "@VPE/styles/Main.css?url";

// App
import { exposePostMessageTools } from "@/_dev";
import { ChildChanel, type ChildAPI } from "@/utils";
import type { LoaderData } from "../routes/a.m.vpe";
import { type VPEBaseCallback, type vpeInner } from "./contexts/PropsContext";
import { VPE } from ".";

export const links = [
  { rel: "stylesheet", href: DesignSystemProviderStyles },
  { rel: "stylesheet", href: MainStyles },
];

type token = string | null;

export type VpeConfig = {
  token: token;
};

const Inner = ({ token }: { token: token }) => {
  const getInitialProps = useCallback(async (): Promise<VPEBaseCallback> => {
    // Mode "fallback local" si pas de token
    if (!token) {
      return {
        config: {
          settings: { catalog: {} },
          content: { catalog: {} },
        },
        data: {},
      };
    }

    // Ne pas rouvrir de channel si déjà actif avec ce token
    // if (channel && token === lastToken.current) return;

    // lastToken.current = token;

    const ch = new ChildChanel({
      url: window.location.origin,
      token,
      model: {},
    });

    let currentAPI: InstanceType<typeof ChildAPI> | null = null;
    const child = await ch.sendHandshake();
    // setChannel(child);

    currentAPI = child;
    const data = (await child.get("data")) as Partial<vpeInner>;

    const onChange = async (updated) => {
      // await new Promise((resolve) => setTimeout(resolve, 3000));

      const { error, success, response } = await child.exec("setData", updated);

      if (!success) throw new Error("Erreur", error);
    };

    return {
      ...data,
      onChange,
      _destroy: () => {
        currentAPI?.destroy(); // API déjà prête ?
        ch.destroy(); // Toujours destroy le canal brut
      },
    } as VPEBaseCallback;
  }, [token]);

  return (
    <VPE
      dataMode="CALLBACK"
      getInitialProps={getInitialProps}
      root={{ mode: "VPE" }}
    />
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
