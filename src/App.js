import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Coupdecoeur from "./pages/Coupdecoeur";
import Error from "./components/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/coup-de-coeur" element={<Coupdecoeur />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
