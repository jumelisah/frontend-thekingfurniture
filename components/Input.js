import { Form } from "react-bootstrap";

const Input = ({ type, as, variant, children, ...rest }) => {
  return (
    <Form.Control as={as} type={type} className={variant}{...rest} />
  )
}

export default Input