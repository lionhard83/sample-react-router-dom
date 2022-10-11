import React, { createContext, FC, useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import { Nested } from './Nested';
import { Sample } from './Sample';
import { Product } from './Product';
import { Products } from './Products';
const axios = require('axios').default;


// const arr = ["Pippo", "caio", "Sempronio", "Girolamo"];
type Response = {limit: number, products: Product[]; skip: number; total: number};
type Product =  {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export type Lang = {
  it: Title
  en: Title
}

export type Title = {
  title: string;
}

const lang = {
  it: {
    title: "Ciao",
  },
  en: {
    title: "Hello"
  }
}

export const LangContext = createContext(lang.it);

export const Wrapper: FC = () =>  {
  // const navigate = useNavigate();
  const [currentLang, setLang] = useState(lang.it);
  // const changeRoot = (path: string) => {
  //   navigate(path);
  // }

  return (
    <BrowserRouter>
      <Link to='/products'>Products</Link><br/>
      <Link to='/images'>Images</Link><br/>
      <Link to='/houses'>Houses</Link><br/>
      <Routes>
        <Route path='/products' element={
        <div style={{paddingLeft: '10px'}}>
          <p>Sono nella parte comune tra product e products</p>
          <Outlet></Outlet>
        </div>
        }>
          <Route index element={<Products></Products>}></Route>
          <Route path=':id' element={<Product></Product>}></Route>
        </Route>
        <Route path='/images' element={<><p>Sono dentro images</p></>}></Route>
        <Route path='/houses' element={<><p>Sono dentro houses</p></>}></Route>
      </Routes>
      

      {/* <button onClick={() => changeRoot('/')} >Spostami nella root home</button> */}
        {/* <p>Title</p>
        <button onClick={() => setLang(lang.en)} >Set en</button>
        <button onClick={() => setLang(lang.it)} >Set it</button>
        <LangContext.Provider value={currentLang}>
          <Nested></Nested>
        </LangContext.Provider> */}
    </BrowserRouter>)
}
