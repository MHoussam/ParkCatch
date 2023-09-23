import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
