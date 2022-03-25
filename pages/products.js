import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/actions/products"

const Products = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.products)
    const myLoader = ( src ) => {
        return src
      }
    useEffect(()=>{
        dispatch(getProducts)
    }, [dispatch])
    return(
        <div>
            {data.map((res)=>{
                {let b = res.product_images[0]?.image}
                return(
                    <div key={res.id}>
                        <p>{b}</p>
                        <Image src={`${res.product_images[0]?.image ? res.product_images[0]?.image : '/images/buffet.jpg'}`} alt={res.name} width={300} height={300}/>
                        {console.log(res.product_images[0]?.image)}
                        <p>{res.id}</p>
                        <p>{res.product_images[0]?.image}</p>
                        <p>{res.name}</p>
                        <p>{res.price}</p>
                        <p>{res.description}</p>
                    </div>
                )
            })}
            <Image src='https://res.cloudinary.com/fazztrackfw5/image/upload/v1648125710/TheKingFurniture/uploads/product/product-image-1648125708494.png' alt='cloud' width={100} height={100}/>
        </div>
    )
}

export default Products