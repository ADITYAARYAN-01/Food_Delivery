import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExporeMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import CustomerSection from '../../components/CustomerSection/CustomerSection'
const Home = () => {

  const [category,setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory ={setcategory}/>
       <FoodDisplay category={category} />
       <CustomerSection/>
       <AppDownload/>
    </div>
  )
}

export default Home
