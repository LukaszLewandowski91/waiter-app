import { Button, Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTables, removeTableRequest } from "../../../redux/tablesRedux";
import { Link } from "react-router-dom";
import SingleTable from "../SingleTable/SingleTable";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const Tables = () => {
  const dispatch = useDispatch();
  const tables = useSelector(getAllTables());
  const [show, setShow] = useState(false);
  const [tableId, setTableId] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setTableId(id);
    setShow(true);
  };

  const handleSubmit = () => {
    dispatch(removeTableRequest(tableId));
    handleClose();
  };

  return (
    <Container>
      {tables.length === 0 && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {tables.map((table) => (
        <SingleTable key={table.id} {...table} action={handleShow} />
      ))}
      <Link to="/add-table">
        <Button className="mt-3" variant="outline-success">
          Add new table
        </Button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the table ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleSubmit(tableId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Tables;
