import { Button} from "react-bootstrap";

const Buttons = ({styleCart,color,children,...rest})=>{
    return(
      <Button className={styleCart} variant={color} {...rest}>
        {children}
    </Button>
    )
}

export default Buttons