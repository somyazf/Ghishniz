import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge
} from "shards-react";
import { AUTHHOST } from '_constants/other.constants';
import Axios from 'axios';
import PageTitle from "components/common/PageTitle";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { uploadFileAction } from "_actions";

const BlogPosts = () => {

  const [postsList, setPostsList] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
      try{
        const response = await Axios({
            url: `${AUTHHOST}/data/submittedRecipes`,
            method: "GET",
            headers: { "content-type": "application/json" }
        });
          if (response.status === 200) {
            setPostsList(response.data);
          } else {
            return Promise.reject({isTimeout:false,error: response.data});
          }
        } catch (error) {
          console.log('error is', error);
        }
      }fetchData();
    }, []);

  return <>
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
      </Row>
      <Row>
        {postsList.map((post, idx) => (
          <Col lg="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--aside card-post--1">
              {/* <div
                className="card-post__image"
                style={{ backgroundImage: `url('${post.image}')` }}
              >
                <Badge
                  pill
                  className={`card-post__category bg-${post.categoryTheme}`}
                >
                  {post.category}
                </Badge>
              </div> */}
              <CardBody>
                <h5 className="card-title" component={Link} to={{pathname: `/add-new-post`}} >
                    {post.title}
                </h5>
                <p className="card-text d-inline-block mb-3">{
                  post.direction.length < 100
                    ? `${post.direction}`
                    : `${post.direction.substring(0, 100)}...`}
                </p>
                <span className="text-muted">{new Date(post.created).toLocaleString()}</span>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
}

withRouter(BlogPosts);
export {BlogPosts};
