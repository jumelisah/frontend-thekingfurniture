import Head from 'next/head'
import Input from '../../components/KingInput'
import Button from '../../components/KingButton'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BreadCrumb'

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>The King | Order Tracking</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Tracking', active: true }]} />
        </Container>
        <h1 className={'text-center'}>Order Tracking</h1>
        <p className={'text-center'}>Track where your order arrived</p>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295091993!2d106.68942947103515!3d-6.22938669898395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1648126699064!5m2!1sen!2sid" width="600" height="450" loading="lazy"></iframe>
          </Col>
          <Col xs={12} md={6}>
          <p className={'text-center mt-5'}>To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>
          <p>Order ID</p>
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 py-3 border-color1'
              placeholder='Found in your order confirmation email.'
            />
            <p className={'mt-4'}>Billing Email</p>
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 py-3 border-color1'
              placeholder='Email you used during checkout'
            />
            <div className='text-center'>
              <Button className='mt-4 my-5 py-2 px-2' variant="color2" size="lg" active>
                Track Now
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout >
  )
}
export default Index
