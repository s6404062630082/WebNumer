import { NavBar } from './NavBar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Element/Home';
import About from './Element/About';
import ApexChart from './Element/chart';

import Graphical from './RootOf/Graphical';
import Bisection from './RootOf/Bisection';
import FalsePosition from './RootOf/FalsePosition';
import OnePoint from './RootOf/OnePoint';
import Newton from './RootOf/Newton';

import Secent from './RootOf/Secent';
import Cramer from './Linear/Cramer';
import Gauss from './Linear/Gauss';
import Matrix from './Linear/Matrix';
import LU from './Linear/LU';
import Cholesky from './Linear/Cholesky';
import Jacobi from './Linear/Jacobi';
import GaussSeidel from './Linear/GaussSeidel';
import Conjugate from './Linear/Conjugate';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/chart' element={<ApexChart/>}/>

        <Route path='/Graphical' element={<Graphical/>}/>
        <Route path='/Bisection' element={<Bisection/>}/>
        <Route path='/FalsePosition' element={<FalsePosition/>}/>
        <Route path='/OnePoint' element={<OnePoint/>}/>
        <Route path='/Newton' element={<Newton/>}/>
        <Route path='/Secent' element={<Secent/>}/>

        <Route path='/Cramer' element={<Cramer/>}/>
        <Route path='/Gauss' element={<Gauss/>}/>
        <Route path='/Matrix' element={<Matrix/>}/>
        <Route path='/LU' element={<LU/>}/>
        <Route path='/Cholesky' element={<Cholesky/>}/>
        <Route path='/Jacobi' element={<Jacobi/>}/>
        <Route path='/GaussSeidel' element={<GaussSeidel/>}/>
        <Route path='/Conjugate' element={<Conjugate/>}/>


        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
