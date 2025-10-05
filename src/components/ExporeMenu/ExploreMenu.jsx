import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setcategory}) => {
    return (
        <div className='Explore-Menu' id='explore-menu'>
            <h1>Expore our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring detatchable array of Dishes. Our mission is to satisfy your cravings and elevate your dinning Experience, one Delicious meal at a Time</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=> setcategory(prev => prev===item.menu_name?"All":item.menu_name)} className="exlpore-menu-list-item" key={index}>
                            <img className={category===item.menu_name?"active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })} 
            </div>
               <hr />
        </div>
    )
}

export default ExploreMenu
