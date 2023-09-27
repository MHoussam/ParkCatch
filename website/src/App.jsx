import './styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home';

function App() {
  const token = localStorage.getItem('userToken');

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/Home" /> : <Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={token ? <Navigate to="/Home" /> : <Navigate to="/Login" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;