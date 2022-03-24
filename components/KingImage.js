import Image from "next/image"

const KingImage = ({pathImage,classVariant,children,...rest})=>{
    return(
        <Image src={pathImage} className={classVariant} {...rest}/>
    )
}

export default KingImage