
import  Homes  from './component/homes/homes';
import DataProvider from './component/context/DataProvider';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Main from './component/main/main';

import Register from './pages/register/register';

function App() {
  return (
    
   
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path='/editor' element={<Homes/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
         
      </Routes>
      </BrowserRouter>    
     
    </DataProvider>
  );
}

export default App;







