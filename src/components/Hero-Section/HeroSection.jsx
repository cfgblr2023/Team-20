import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import heroImg from "../../assests/images/PROJECTEMPOWHER.png";
import "./hero-section.css";

const HeroSection = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Pranav R",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
       image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      id: 2,
      title: "Vanshika",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    // Add more blog objects as needed
    {
      id: 3,
      title: "Lokesh R",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      id: 4,
      title: "Deepika",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      
    },
    {
      id: 4,
      title: "Kavya",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      id: 4,
      title: "Nia",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      id: 4,
      title: "Vishnu",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      link:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-2 hero__title">
                PROJECT EMPHOWER <br />  <br />
              </h2>
              <p className="mb-5">
              Our volunteer program aims to connect experienced professionals with under-resourced degree women students who may be facing challenges in their job search or career planning. <br /> adipisicing elit.
               
                As a volunteer, you will help these students develop the soft and core skills they need to succeed in their chosen fields.
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </Col>

          {/* <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col> */}
          <Col lg="6" md="6" className="order-lg-2">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
        <Row>
          {blogs.map((blog) => (
            <Col lg="4" md="6" key={blog.id}>
              <Card className="mb-4">
                <div className="card__image">
                  <CardImg top width="100%" src={blog.image} alt={blog.title} />
                </div>
                <CardBody>
                  <CardTitle tag="h5" className="mb-2">{blog.title}</CardTitle>
                  <CardText>{blog.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
