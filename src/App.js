import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
