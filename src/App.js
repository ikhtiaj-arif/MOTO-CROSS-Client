import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import router from './Routes/Routes';
;

function App() {
  
  return (
    <div className="lg:w-3/4 mx-auto">
      <Toaster/>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
