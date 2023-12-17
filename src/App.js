import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import EmployeeForm from './elements/EmployeeForm';
import EmployeeData from './elements/EmployeeData';

function App() {
  return (
    <Routes>
      <Route path='/Employee' element={<Dashboard child={<EmployeeData/>}/>}/>
      <Route path='/AddForm' element={<Dashboard child={<EmployeeForm/>}/>}/>
    </Routes>
  );
}

export default App;
