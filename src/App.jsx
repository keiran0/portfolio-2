import { useState } from 'react'

import data from './data.json' 

import Categories from './components/Categories'
import Showcase from './components/Showcase';

export default function App() {

  let [categories, setCategories] = useState(false);

  let [display, setDisplay] = useState('')

  function showcaseMode(bool, details){
    setDisplay(data.showcase[details.id])
    setCategories(bool)
  }
  
  function categoryMode(){
    setCategories(false);
  }

  return (
    <>
      <div id='modal'></div>
      {categories ? <Showcase display={display} handleClick={()=>categoryMode()}/>: <Categories data={data} onClick={(details)=>showcaseMode(true,details)}/> }
    
    </>
  )
}

