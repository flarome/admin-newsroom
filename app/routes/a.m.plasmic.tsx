// This page will show up at the route /mypage

import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ComponentRenderData, PlasmicRootProvider, PlasmicComponent } from '@plasmicapp/loader-react';


import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "28xKmjxjUaAS48Fy9tvpQz",  // ID of a project you are using
      token: "bUdbpQydSRLOBYbPlu2Aw46KYTzjDMtuQXyy7BgjmV5EFhEwNXsag6hMlW3lo4IgtS8GaD7T6PyEtCWQ2HDQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

// Take any component from your app or design system...
function HeroSection({ children }) {
  return <div className="hero-section">{children}</div>;
}

// ...and make it available for drag-and-drop, along with any props you want to
// expose.
PLASMIC.registerComponent(HeroSection, {
  props: {
    children: "slot",
  },
})

// Fetch the data needed to render Plasmic pages or components, server-side.
export async function loader() {
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData('Homepage');
  return json(plasmicData);
}

// Render the page or component from Plasmic.
export default function MyPage() {
  const plasmicData = useLoaderData() as ComponentRenderData;
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}