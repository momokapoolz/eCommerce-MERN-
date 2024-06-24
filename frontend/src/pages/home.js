import React from 'react'

import CategoryList from '../components/categoryList'
import HorizontalCard from '../components/horizontalCard'

const Home = () => {
    return (
        <div>
            <CategoryList/>

            <HorizontalCard category={"laptop"} heading={"Laptop"}/>
            <HorizontalCard category={"CPU"} heading={"CPU"}/>
            <HorizontalCard category={"GPU"} heading={"Graphic card"}/>
            <HorizontalCard category={"RAM"} heading={"RAM"}/>
            <HorizontalCard category={"cooler"} heading={"Cooler"}/>
            <HorizontalCard category={"case"} heading={"Case"}/>
            <HorizontalCard category={"keyboard"} heading={"Keyboard"}/>
            <HorizontalCard category={"mouse"} heading={"Mouse"}/>
            <HorizontalCard category={"headphone"} heading={"Headphone"}/>

        </div>
    )
}

export default Home