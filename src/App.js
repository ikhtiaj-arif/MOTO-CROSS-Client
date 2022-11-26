import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import router from './Routes/Routes';
import { AdvertisingProvider } from 'react-advertising';


const config = {
  slots: [
    {
      id: "banner-ad",
      path: "/6355419/Travel/Europe/France/Paris",
      sizes: [[300, 250]]
    }
  ]
};


function App() {
  
  return (
    <div className="lg:w-3/4 mx-auto">
      
      <Toaster/>
     <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
