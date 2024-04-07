import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../redux/services/productService'
import {useNavigate} from 'react-router-dom'

function ProductListPage() {
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const {products} = useSelector(state => state.product);
    console.log('product from store', products)

    useEffect(() => {dispatch(fetchProducts())}, [])
  return products.length === 0 ? (<div>Loading...</div>) : (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 20
    }}>
      {
        products.map((product) => {
          const{id, description, image, title, price} = product;
          return (
            <div onClick={() => navigator(`/${id}`)} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              border: '1px solid black',
              borderRadius: 10,
              padding: 10,
              cursor: 'pointer'
            }} key={id}>
              <img style={{
                width: 200,
                height: 200
              }} src={image} alt="" />
              <h2>{title}</h2>
              <p>{price}</p>
              <p>{description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductListPage