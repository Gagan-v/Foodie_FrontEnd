import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Login from './Components/login';
import Signup from './Components/signup';
import HomePortal from './Components/homePortal';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home/*' element={<HomePortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
