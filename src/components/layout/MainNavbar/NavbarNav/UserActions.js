import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { authenticationAction } from '_actions';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";


const UserActions=(props)=> {

 const [visible, setVisible] = useState(false);

 const {dispatch} = props; 

  const toggleUserActions=()=> {
    setVisible(!visible);
  }

  const cookie = new Cookies();
  const [userDetail, setUserDetail] = useState({
    name: cookie.get('name'),
  })
  // const lougout=()=> {
  //   dispatch(authenticationAction.logout(props.history));
  // }

    return (
      <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("assets/images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{userDetail.name}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={visible}>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link}  to="lougout" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }

export default UserActions;