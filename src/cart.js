import React from 'react';
import burger from './images/images.jpg';
import ice from './images/ice cream.jpg';
import bun from './images/samsosa.webp';
import './style.css';

function Cart() {
    return(
        <>
        <header>
            <br /><br />
      <h1><center>Order summary</center></h1>
    </header>
    <section className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="edit"><h2>Food Items</h2></th>
                    <th className="hello"><h2>Quantity</h2></th>
                    <th className="bye"><h2>Price</h2></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src={burger} width="100px" height="100px" className="image" />
                        <div className="flex-column ms-4">
                          <p className="mb-2">Burger</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <div className="d-flex flex-row">
                        <button className="btn btn-link px-2" onClick={(e) => e.target.parentNode.querySelector('input[type=number]').stepDown()}>
                          <i className="fas fa-minus"></i>
                        </button>

                        <input id="form1" min="0" name="quantity" value="2" type="number" className="form-control form-control-sm" style={{ width: '50px' }} />

                        <button className="btn btn-link px-2" onClick={(e) => e.target.parentNode.querySelector('input[type=number]').stepUp()}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-1">₹20</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src={bun} className="image" width="100px" height="100px" />
                        <div className="flex-column ms-4">
                          <p className="mb-2">Bun Samosa</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <div className="d-flex flex-row">
                        <button className="btn btn-link px-2" onClick={(e) => e.target.parentNode.querySelector('input[type=number]').stepDown()}>
                          <i className="fas fa-minus"></i>
                        </button>

                        <input id="form1" min="0" name="quantity" value="2" type="number" className="form-control form-control-sm" style={{ width: '50px' }} />

                        <button className="btn btn-link px-2" onClick={(e) => e.target.parentNode.querySelector('input[type=number]').stepUp()}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-1">₹25</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="border-bottom-0">
                      <div className="d-flex align-items-center">
                        <img src={ice} className="image" width="100px" height="100px" />
                        <div className="flex-column ms-4">
                          <p className="mb-2">Ice cream cone</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle border-bottom-0">
                      <div className="d-flex flex-row">
                        <button className="btn btn-link px-2" onClick={(e) => e.target.parentNode.querySelector('input[type=number]').stepDown()}>
                          <i className="fas fa-minus"></i>
                        </button>

                        <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control form-control-sm" style={{ width: '50px' }} />

                        <button className="btn btn-link px-2" onClick={(e) => e.target.parentNode.querySelector('input[type=number]').stepUp()}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="align-middle border-bottom-0">
                      <p className="mb-1">₹33</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between mb-4" style={{ fontWeight: 500 }}>
              <p className="mb-0"><h4><center>Total    ₹78</center></h4></p>
            </div>

            <button type="button" class="btn btn-primary btn-lg" id='complete'>Checkout ₹78
            </button>
             </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Cart;
