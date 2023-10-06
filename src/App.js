import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainHome from './home/MainHome';
import View_products from './view_products/View_products';
import Cart from './cart/Cart';
import Wishlist from './wishlist/Wishlist';

function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<MainHome/>} />
      <Route path='/view_products/:id' element={<View_products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>

    </>
  );
}

export default App;
