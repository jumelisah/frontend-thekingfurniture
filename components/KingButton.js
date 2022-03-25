import { Button } from 'react-bootstrap';

const KingButton = ({classStyle, color, children, ...rest})=> {
    return(
        <Button className={classStyle} variant={color} {...rest}>
            {children}
        </Button>
    )
}

export default KingButton