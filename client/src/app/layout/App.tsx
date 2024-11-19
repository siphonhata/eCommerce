import { useEffect, useState } from 'react'
import { Product } from '../models/product';
import Catalog from '../../features/catalog/catalog';
import './styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';


function App() {

  const [products, setProducts] = useState<Product []>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length +1),
      price: (prevState.length *100) +100,
      brand: "Some Bramd",
      description: "Descr",
      pictureUrl: "url"
    }])
      
      
  }


  return (
    <div>
      <Typography variant='h1'>Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
      
    </div>
  )
}

export default App
