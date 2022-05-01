import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container, Row, Col, Image, Header } from 'react-bootstrap';
import logo from './components/brushLogo.svg';
import img1 from './components/content-pixie-TxBQ7yLj6JU-unsplash.jpg';
import img2 from './components/birgith-roosipuu-B99QdvKjxIQ-unsplash.jpg';
import img3 from './components/content-pixie-WdJ4WnLxyDs-unsplash.jpg'
import service1 from './components/amplitude-magazin-8BMr4l_2hgY-unsplash.jpg';
import service2 from './components/dominique-rivas-rWwuf8yKw4Y-unsplash.jpg';
import service3 from './components/angelica-echeverry-iZlMuVu9luM-unsplash.jpg';
import fb from './components/fbIcon.svg';
import ig from './components/Instagram.svg';

function App() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }
  
  
  return (
  <>

    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      <Image src={logo} className="svg-content" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


 
<main>
  
<div className="container-sm">
  
<div className="row align-items-end">
<h1 className="text-center display-5">
  The right cosmetician who
   can take good care of you</h1>


</div>

</div>
<div className="container myBtn text-center">
<button type="button" className="btn btn-danger custom-btn btn-lg mt-5 rounded-pill ">Contact us</button>

</div>
<div className="container">
<div className="align-items-start">
<Image
    src={img1}
    fluid
    
    />
 </div>
 </div>
 <div className="d-flex align-items-center justify-content-center container imgH2 mt-4 pt-4" >
 
   
      
    <div className="d-flex justify-content-center text-center col-xl-6 col-lg-12">
    <div className="rowE">
   
        
        
        
        <h2>
        Lorem ipsum dolor sit amet
        </h2>
        <p>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Quisque vel sagittis felis. Nullam blandit placerat efficitur.
          Maecenas sed eros at erat vehicula cursus sed vel ligula. 
          Cras mollis turpis elit, vitae finibus ex fringilla ut.
           Donec gravida nisi id nisl tincidunt bibendum. Vivamus eleifend vulputate fringilla. 
           Duis elementum faucibus est, a convallis erat porta in. 
           Sed mattis id dolor a feugiat. Sed sagittis auctor posuere.
            In a orci vitae justo molestie maximus a vel elit.
           </p>
           
           
          
        
        </div>
        </div>
      <div className="col-xl-6 col-lg-12">
      <Image
      src={img2}
      fluid
      className="img22 d-none d-xl-block d-lg-none"
      
      />
      
      
     
    </div>
 </div>

<div className="container-fluid blueText mt-5">
  <div className="row rowBlue align-items-center">
  <div className="col-xl-12 col-lg-12 ">
  <div className="d-flex justify-content-center">
    
    <h3 className="fs-2 text-center">
      In magna tortor, placerat ac ipsum vel, accumsan commodo felis. 
      In vitae lorem nunc. Maecenas laoreet risus et bibendum cursus.
      </h3>
      
    </div>
  </div>
  </div>
</div>
<div className="container-sm services">
<div className="row">
    <div className="col-4">
    <Image
      fluid
      src={service1} />
    </div>
    <div className="col-4">
    <Image
      fluid
      src={service2} />
    </div>
    <div className="col-4">
    <Image
      fluid
      src={service3} />

    </div>
    <div className="container-lg myBtn text-center">
<button type="button" className="btn btn-danger custom-btn btn-lg mt-4 rounded-pill ">Shop now</button>

</div>

</div>
</div>

<div className="container-fluid overflow-hidden" >
  
    <div className="row rowEnd">
      <div className="col-xxl-6 col-xl-12 mt-5 pt-5">
        
        <h4 className="text-center display-5 mt-2 pt-2">
        Get in touch
        </h4>
        <h5 className="text-center mt-4 pt-4">Contacts</h5>
        <section className="d-flex">
        <span className="mx-auto phoneMail">
          55231279
          info@gmail.com</span>
          </section>


        <h5 className="text-center mt-4 pt-4">Address</h5>
        <section className="d-flex">
        <span className="mx-auto">Tatari 30, Tallinn</span>
        </section>
        <div className="text-center">
        <Image src={ig} className="ig mx-1 mt-1" onClick={onClickUrl('https://instagram.com')} />
        <Image src={fb} className="fb mx-1 mt-1" onClick={onClickUrl('https://facebook.com')}/>
        </div>
        </div>
        
      <div className="col-xxl-6 col-xl-12 mt-5 pt-5 overflow-hidden">
      <Image
      src={img3}
      className="img33 mx-auto d-none d-lg-block"
      />
      
      
      </div>
    </div>
 </div>
</main>


</>
 
  );
}

export default App;
