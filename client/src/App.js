import "primereact/resources/themes/bootstrap4-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Live from "./components/pages/Live";
import Logs from "./components/pages/Logs";

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route exact path="/" element={<Live />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
    </Layout>
</BrowserRouter>
  );
}

export default App;
