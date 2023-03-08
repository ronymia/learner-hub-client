import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { Bar } from "./components/LoadingSpinners";
import { router } from "./routes/Routes/Routes";


function App() {

  return (
    <>
      <RouterProvider router={router} fallbackElement={Bar} />
      <Toaster />
    </>
  )
}

export default App;
