import React from "react";
import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
// import MainFooter from "../../components/layout/MainFooter";
import { Row, Col } from "shards-react";
import { Container } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const UserDashboard = (props) => {
    const Component = props.component;
  return (
    <>
      <Container fluid >
        <Row className='mb-5'>
          <Col lg={2}>
          <MainSidebar />
          </Col>
          
          <Col lg={10}>
            <MainNavbar />
            <Component/>

          </Col>
          
        </Row>
        {/* <Row >
        <Col lg={12}>
          <MainFooter/> 

          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default UserDashboard;
