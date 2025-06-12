import './styles/globals.css'

import App from './src/app/editor/page' 
import {ClientOnly} from '../components/utils/client-only';

const Main = (props) => {

    return (<div data-cms="vpe">
        
         <ClientOnly fallback={<div>Chargement en cours...</div>}>
    {() => <App {...props} />}
  </ClientOnly>

        </div>)

}

export default Main 