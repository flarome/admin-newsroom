import { Puck, ActionBar } from "./puck2/packages/core/index";

import { memo, useEffect, useState } from "react";
import config from "./puck2/apps/demo/config";

import "./styles/DesignSystemProvider.css";
import './styles/ThemeIndex.css'
import './styles/styles.css'

const App = memo(function App() { 
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;
 
  const initialData = {
    sections: [], // Démarre vide
  }; 

  const save = (data) => {
    console.log("Saved dataJ:", data);
  };

  const overrides = {
  actionBar: ({ children, label }) => (
    <ActionBar label={label}>
      <ActionBar.Group>{children}</ActionBar.Group>
    </ActionBar>
  ),
};


  return (  <div id="app" data-cms="vpe">  <Puck config={config} data={initialData} onPublish={save} overrides={overrides} /></div> );
});

export default function Main() {
  return <App />;
}
