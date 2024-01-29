import { useState } from 'react'

import data from './data.json' 

import Categories from './components/Categories'

export default function App() {

  let categories = useState(true);

  return (
    <>
      {categories ? <Categories data={data}/> : <></>}
    </>
  )
}

