import React from "react";
import IconBar from './components/icon_bar/iconBar';
import MenuIcon from './components/menu_icon/menuIcon';
import TabHeader from './components/teb_header/tab_header'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faEnvelope, faGlobeAmericas, faTrash } from '@fortawesome/free-solid-svg-icons'
import Accordion from './components/accordion/accordion'
import Tabs from './components/tabs/tabs'
library.add(faHome, faSearch, faEnvelope, faGlobeAmericas, faTrash)

function App() {
  let items = [{
    title: "London",
    description: "London is the capital city of England.",
    bg:"green"
  }, {
    title: "London",
    description: "London is the capital city of England.",
    bg:"blue"
  }, {
    title: "London",
    description: "London is the capital city of England.",
    bg:"red"
  }, {
    title: "London",
    description: "London is the capital city of England.",
    bg:"yellow"
  },]
  return (
    <div className="container App">
      <IconBar />
      <MenuIcon animated />
      <Accordion />
      <Tabs />
      <TabHeader items={items} />
    </div>
  )
}


export default App;
