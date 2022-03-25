import Image from "next/image"
import KingButton from "../components/KingButton"
import { Container } from "react-bootstrap"
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa"

const FavList = ({data, role}) => {
    return(
        <Container>
            <div className="row text-center border-0 border-top border-bottom py-3 my-4">
                <div className="fw-bold d-none d-md-block col-5">Product</div>
                <div className="fw-bold d-none d-md-block col-2">Stock Status</div>
                <div className="fw-bold d-none d-md-block col-2">Price</div>
            </div>
        {data.map((res)=>{
            return(
                <div className="row mb-4 text-center justify-content-center align-items-center" key={res.id} style={{Height: '100px'}}>
                    <div className="col-12 col-md-2">
                        <Image src={`${res.product_images[0]?.image ? res.product_images[0]?.image : '/images/buffet.jpg'}`} alt={res.name} width={300} height={300} layout='responsive'/>
                    </div>
                    <div className="col-12 col-md-3">{res.name}</div>
                    <div className="col-12 col-md-2">{res.stock > 0 && role==='seller' ? <p><FaRegCheckCircle /> {res.stock} stock</p> :  res.stock > 0 ? <p><FaRegCheckCircle /> In stock</p> : <p className="text-danger"><FaRegTimesCircle /> Sold out</p>}</div>
                    <div className="col-12 col-md-2">{res.price.toLocaleString('id-ID')}</div>
                    <div className="col-12 col-md-3"><KingButton color={role==='seller' ? 'danger' : 'dark'} style={{width: '100%'}}>{role==='seller' ? 'Delete' : 'Add To Cart'}</KingButton></div>
                </div>
            )
        })}
        </Container>
    )
}

export default FavList