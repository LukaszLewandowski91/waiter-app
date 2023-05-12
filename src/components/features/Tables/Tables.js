import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Link } from "react-router-dom";
import styles from "./Tables.module.scss";
import SingleTable from "../SingleTable/SingleTable";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const Tables = () => {
  const tables = useSelector(getAllTables());
  const [show, setShow] = useState(false);
  const [tableId, setTableId] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setTableId(id), setShow(true);
  };

  const handleSubmit = () => {
    console.log(tableId);
  };

  return (
    <Container>
      {tables.length === 0 && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {tables.map((table) => (
        // <Row key={table.id} className={styles.borderTable}>
        //   <Col className={"col-6 d-flex align-items-center"}>
        //     <h2 className={styles.marginColumn}>Table {table.id}</h2>
        //     <strong>Status: </strong> {table.status}
        //   </Col>
        //   <Col className="col-6 d-flex justify-content-end align-items-center">
        //     <Link to={"/tables/" + table.id}>
        //       <Button variant="primary" size="sm">
        //         Read more
        //       </Button>
        //     </Link>
        //   </Col>
        // </Row>
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
