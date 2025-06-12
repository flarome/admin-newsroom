import './styles/globals.css'

import App from './src/app/editor/page' 


const Main = (props) => {

    return (<div data-cms="vpe"><App {...props} /></div>)

}

export default Main 