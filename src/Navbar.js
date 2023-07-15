import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBIcon
  } from 'mdb-react-ui-kit';
export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to='/'><MDBIcon fas icon='book' /></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to='/cart'><MDBIcon fas icon='shopping-cart' /></Link></a>
        </li>
      </ul>
    </div>
    </div>
</nav>
    </>
  );
}