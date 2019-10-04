import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";

const SidebarCategories = ({ title,  imagePreviewUrl,
  handleImageChange,
 }) => {
  let imagePreview = null;
  if (imagePreviewUrl) {
    imagePreview = (<img src={imagePreviewUrl} />);
  }
  return <>
    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <CardBody className="p-0">
        <input type="file" id="file" name="image" onChange={handleImageChange}/>
        <label htmlFor="file" className="btn-2">Set Featured Image</label>
        <div className="imgPreview">
          {imagePreview}
        </div>
        {/* <ListGroup flush>
          <ListGroupItem className="px-3 pb-2">
            <FormCheckbox className="mb-1" value="uncategorized" defaultChecked>
              main food
            </FormCheckbox>
            <FormCheckbox className="mb-1" value="design">
              dessert
            </FormCheckbox>
            <FormCheckbox className="mb-1" value="development">
              salad
            </FormCheckbox>
          </ListGroupItem>

          <ListGroupItem className="d-flex px-3">
            <InputGroup className="ml-auto">
              <FormInput placeholder="New category" />
              <InputGroupAddon type="append">
                <Button theme="white" className="px-2">
                  <i className="material-icons">add</i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </ListGroupItem>
        </ListGroup> */}
      </CardBody>
    </Card>
  </>
};

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Featured image"
};

export default SidebarCategories;
