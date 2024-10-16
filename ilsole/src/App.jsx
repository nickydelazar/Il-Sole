import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import FormProduccion from './FormProduccion'
import SignIn from './SignIn';


function App() {

  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/produccion' element={<FormProduccion />} />
        <Route path='/SignIn' element={<SignIn/>} />
    </Routes>
  )
}

export default App
