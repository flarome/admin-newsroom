import { Outlet } from "@remix-run/react";
import { links as Links } from "../frontend/articles";

export const links = () =>[
...Links
];

export default function App() {

  return (


        <Outlet />
      
  );
}