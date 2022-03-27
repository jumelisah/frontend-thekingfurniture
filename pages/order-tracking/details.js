import Head from 'next/head'
import Input from '../../components/KingInput'
import Button from '../../components/KingButton'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BreadCrumb'
import Image from 'next/image'

const Details = () => {
  return (
    <Layout>
      <Head>
        <title>The King | Tracking Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Tracking', href: '/order-tracking' }, { name: 'Tracking Detail', active: true }]} />
        </Container>
        <h1 className={'text-center'}>Tracking Detail</h1>
        <p className={'text-center'}>Track where your order arrived</p>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295091993!2d106.68942947103515!3d-6.22938669898395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1648126699064!5m2!1sen!2sid" width="600" height="450" loading="lazy"></iframe>
          </Col>
          <Col xs={12} md={6}>
          <div className="row mt-4">
            <div className="col-4">
            <p className={'text-justify'}>Order ID</p>
            <p className='fw-bold'>ABCD-EFGH-W123</p>
            </div>
            <div className="col-5">
            <p>Order Item</p>
            <p className='fw-bold'>Fabric Mid Century Chair</p>
            </div>
            <hr></hr>
          </div>
          <div className="row mt-4">
            <div className="col-4">
            <Image src="/images/delivery.png" width={40} height={40} alt="delivery"/>
            </div>
            <div className="col-5">
            <p className={'text-justify'}>On Delivery</p>
            <p className='fw-bold'>Kebun Jeruk, Jakarta Barat</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
            <Image src="/images/delivery2.png" width={40} height={40} alt="delivery"/>
            </div>
            <div className="col-6">
            <p className={'text-justify'}>Destination</p>
            <p className='fw-bold'>Kebun Mangga, Jakarta Selatan</p>
            </div>
          </div>
            <div className='text-justify'>
              <Button className='mt-4 my-5 py-2 px-2' variant="color2" size="lg" active>
              Check on Map
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout >
  )
}
export default Details
