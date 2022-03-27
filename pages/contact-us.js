import Head from 'next/head'
import Input from '../components/KingInput'
import Button from '../components/KingButton'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import BreadCrumb from '../components/BreadCrumb'

const ContactUs = () => {
  return (
    <Layout>
      <Head>
        <title>The King | Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'FAQ', href: '/faq' }, { name: 'Contact Us', active: true }]} />
        </Container>
        <h1 className={'text-center pt-4 pb-5'}>Contact Us</h1>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295091993!2d106.68942947103515!3d-6.22938669898395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1648126699064!5m2!1sen!2sid" width="600" height="450" loading="lazy"></iframe>
          </Col>
          <Col xs={12} md={6}>
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1'
              placeholder='Name *'
            />
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1'
              placeholder='Your Email *'
            />
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1'
              placeholder='Your Website '
            />
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1'
              placeholder='Your Business Plan '
            />
            <Input
              type="textarea"
              as={'textarea'}
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 pb-5 my-5 border-top-0 border-start-0 border-end-0 border-3 border-color1'
              placeholder='Message '
            />
            <div className='d-grid'>
              <Button className='mt-4 my-5 py-3 px-4' variant="color2" size="lg" active>
                Send Message
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout >
  )
}
export default ContactUs
