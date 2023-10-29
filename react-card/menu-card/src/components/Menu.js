import React from 'react'

const Menu = ({items}) => {
  return (
    <main className='product-space'>
    <div className='Container'>
      <div className='row'>
      {
        items.map((item)=>{
        const {id,img,price,desc,title}=item;
        return(
            <div className='col-6'>
            <article key={id} className='main-div'>
                <div className='main-img'>
                    <img src={img} alt=''/>
                </div>
                <div className='content'>
                    <div className='title'>
                    <h4>{title}</h4>
                    <button class="price-button">₹{price}</button>
                    </div>
                    <p>{desc}</p>
                </div>
                </article>
                </div>
        )
        })
      }
      </div>
    </div>
    </main>
  )
}

export default Menu
