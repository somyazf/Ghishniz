import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";



const UserAccountDetails = ({ title }) => {

  const [values,setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
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
              </Row>
              <Row form>
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
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    name="password"
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    autoComplete="current-password"
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
