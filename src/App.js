import React from "react";
import IconBar from './components/icon_bar/iconBar'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faEnvelope, faGlobeAmericas, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faSearch, faEnvelope, faGlobeAmericas, faTrash)

function App() {

  return (
    <div className="container App">
      <IconBar> </IconBar>
    </div>
  )
}


export default App;
