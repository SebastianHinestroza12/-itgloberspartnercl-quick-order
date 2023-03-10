import React, {useState, FormEvent, useEffect } from "react";
import { useMutation, useLazyQuery } from 'react-apollo';
//@ts-ignore
import { useCssHandles } from "vtex.css-handles";
import { CSS_HANDLES } from "../../CssHandles";
import UPDATE_CART from '../../graphql/updateCart.graphql';
import GET_PRODUCT from '../../graphql/getProductBySKU.graphql';
import { Toast } from "../Toast/Toast";
import './index.css'

export const QuickOrder = () => {
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("")
  console.log(search)
  const handles = useCssHandles(CSS_HANDLES)

  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

useEffect(() => {
    if (product) {
      let skuId = parseInt(inputText)
      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
        .then(() => {
          window.location.href = "/checkout"
        })
    }
}, [product, search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

     // Validar que solo se ingresen caracteres numéricos
    const regex = /^[0-9\b]+$/;
    if (regex.test(value) || value === '') {
      setInputText(value);
    }
  }

  const addProductToCart = () => {
        getProductData({
            variables: {
                sku: inputText
            }
        })
    }

  const searchProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText) {
      Toast()
    }
    else {
        setSearch(inputText)
        addProductToCart()
    }
  }
  return (
    <div className={handles.container__quick}>
        <h2>Compra rápida en sony</h2>
        <form onSubmit={searchProduct}>
            <input value={inputText} id="sku" type="text" placeholder="Ingresa el número de SKU" onChange={ handleChange}></input>
            <input type="submit" value="AÑADIR AL CARRITO"/>
        </form>
    </div>
  )
}
