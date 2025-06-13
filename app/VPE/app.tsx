import './styles/globals.css'

import App from './src/app/editor/page' 
import {ClientOnly} from '../components/utils/client-only';

import { useEffect, useState } from "react";

const APP1 = (props) => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
   if (!mounted) return <div>Chargement en cours...</div>;
     
    return (<App {...props} />)

}


const Main = (props) => {

     
    return (<div data-cms="vpe">
        
         <ClientOnly fallback={<div>Chargement en cours...</div>}>
    {() => <APP1 {...props} />}
  </ClientOnly>


        </div>)

}

export default Main 