import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { AppRoute } from "./routes/AppRoute";

export default function App() {

  return( 
      <BrowserRouter>

        <Header />

        <AppRoute />

      </BrowserRouter>
  )

}
