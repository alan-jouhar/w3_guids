import React from "react";
import IconBar from './components/icon_bar/iconBar';
import MenuIcon from './components/menu_icon/menuIcon'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faEnvelope, faGlobeAmericas, faTrash } from '@fortawesome/free-solid-svg-icons'
import Accordion from './components/accordion/accordion'
library.add(faHome, faSearch, faEnvelope, faGlobeAmericas, faTrash)

function App() {

  return (
    <div className="container App">
      <IconBar/>
      <MenuIcon animated/>
      <Accordion />
    </div>
  )
}


export default App;
