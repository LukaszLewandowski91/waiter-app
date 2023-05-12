import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";
import EditTable from "./components/pages/EditTable/EditTable";
import { fetchStatus } from "./redux/statusRedux";
import AddTable from "./components/pages/AddTable/AddTable";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tables/:id" element={<EditTable />} />
        <Route path="/add-table" element={<AddTable />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
