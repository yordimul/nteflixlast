import React from 'react'
import Header from '../Component/Header/Header.jsx'
import Footer from '../Component/Footer/Footer.jsx'
import Banner from '../Component/Banner/Banner.jsx'
import RowList from './../Component/Rows/RowList/RowList.jsx'
export const Home = () => {
  return (<>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
    </>
  )
}
