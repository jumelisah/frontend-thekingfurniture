import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FavList from "../components/FavList"
import { getProducts } from "../redux/actions/products"

const Whislist = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state=>state.products)
    useEffect(()=>{
        dispatch(getProducts)
    }, [dispatch])
    return(
        <FavList data={data} role='seller' />
    )
}

export default Whislist