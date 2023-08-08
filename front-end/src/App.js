import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Profile } from './Profile';
import { WishList } from './Universities/WishList';
import { Universities } from './Universities/Universities';
import { Header } from './Layout/Header';
import { NotFound } from './Layout/NotFound';
import { store } from './store/store';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/universities' element={<Universities />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
