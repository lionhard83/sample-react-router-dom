import axios from "axios";
import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Product } from "../models/Product";


export const Products: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(({data}) => {
            setProducts(data.products);
        })
    }, [])

    useEffect(() => {
        const items = products.filter(item => item.price < Number(searchParams.get('maxPrice')) && item.price > Number(searchParams.get('minPrice')) );
        setFilteredProducts(items);
    }, [products, searchParams])

    const onChangeInputPrice: ChangeEventHandler<HTMLInputElement> = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        let query = {};
        for (const [key, v]  of searchParams.entries()) {
            query = {...query, [key]: v}
        }
        setSearchParams({...query, [name]: value})
    }

    return <>
        <label>Min Price</label>
        <input value={Number(searchParams.get('minPrice')) || ''} name={'minPrice'} type={'number'} onChange={onChangeInputPrice} />
        <label>Max Price</label>
        <input value={Number(searchParams.get('maxPrice')) || ''} name={'maxPrice'} type={'number'} onChange={onChangeInputPrice} />
        <p>Min: {searchParams.get('minPrice')}</p>
        <p>Max: {searchParams.get('maxPrice')}</p>
        <button onClick={() => {
             setSearchParams({})
        }} >Resetta tutti i filtri</button>
        {
            filteredProducts.map((product, index) => 
                <Link key={index}  to={String(product.id)}>
                    <p> {product.id} {product.title} €{product.price}</p>
                </Link>
            )
        }
    </>
} 