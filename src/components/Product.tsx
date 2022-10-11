import axios from "axios";
import React, { FC, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Product as Item } from "../models/Product";


export const Product: FC = () => {
    const params = useParams();
    const [product, setProduct] = useState<Item>();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.id}`).then(({data}) => {
            setProduct(data);
        })
    }, [params.id])

    return <>
        <br/>
        <Link to={`/products/${Number(params.id) - 1}`}>Prev</Link><br/>
        <Link to={`/products/${Number(params.id) + 1}`}>Next</Link>
        <p>{product?.brand}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.price}€</p>
    </>
} 