import React, { useState } from "react";
import PropTypes from "prop-types";
import Cookies from 'universal-cookie';

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";



const UserAccountDetails = ({ title }) => {
  const cookie = new Cookies();
  const [values,setValues] = useState({
    name: cookie.get('name'),
    email: cookie.get('email'),
})

const handleChange = ({target:{name,value}}) => {
  setValues({ ...values, [name]: value });
};
  return <>
<Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    name="name"
                    id="feFirstName"
                    placeholder="First Name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Col>              
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    name="email"
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Col>
                </Row>
             
            
             
             
              <Button theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  </>
}

  


UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
