import React from "react";
import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../../components/layout/MainFooter";
import { Row, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const UserDashboard = (props) => {
    const Component = props.component;
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3}>
          <MainSidebar />
          </Col>
          
          <Col lg={9} xl={12}>
            <MainNavbar />

            {/* <MainFooter /> */}
          </Col>
        </Row>
      </Container>
      <Component/>
    </>
  );
};

export default UserDashboard;
