import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price, button } = menuItem
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4><br />
                <h4 className="price">Rs{price}</h4>
              </header>
            </div>
            <button type="button" class="btn btn-outline-warning">Add to Cart</button>
          </article>
        )
      })}
    </div>
  )
}

export default Menu