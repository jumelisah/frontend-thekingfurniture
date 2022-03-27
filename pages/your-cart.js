import Head from 'next/head'
import { Container } from "react-bootstrap"
import carts from "../styles/cart.module.scss"
import Image from "next/image"

const cart = ()=>{

    return(
        <>
        <Head>
        <title>The King | Your Cart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={`${carts.containers} `}>
        <div className={`${carts.profiles} `}>
            <div className="d-flex flex-column justify-content-center">
                <div style={{fontSize:"16px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 mt-5 nav-text">
                    <span >Cart {""}</span><span className="text-yellow-800"> {">"} </span>
                </div>
                <div className={`${carts.content} text-center mb-2 mt-3`}>Your Cart</div>
                <div className={`${carts.contents} text-center mb-5`}>Buy everything in your cart now!</div>
            </div>
        </div>
        <Container>
        <div className="text-center py-5">
          <div  className="pt-4">
            <Image src="/images/shopping-cart.png" width={200} height={200} alt="people"/>
          </div>
          <div className="fs-1 mt-3">Your Cart is Empty</div>
          <div className="w-50 ms-auto me-auto mt-3 pb-5">
            <p className={`${carts.text} text-center`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. urabitur blandit ultri</p>
          </div>
        </div>
        </Container>
        </div>
    </>
    )
}

export default cart