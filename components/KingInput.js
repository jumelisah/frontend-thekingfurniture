import { Form } from "react-bootstrap";

const KingInput = ({ typeInput, as, classVariant, children, ...rest }) => {
  return (
    <Form.Control as={as} type={typeInput} className={classVariant}{...rest} />
  )
}

export default KingInput
