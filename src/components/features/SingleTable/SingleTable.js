import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./SingleTable.module.scss";

const SingleTable = ({ action, ...table }) => {
  const handleSubmit = (id) => {
    action(id);
  };
  return (
    <>
      <Row key={table.id} className={styles.borderTable}>
        <Col className={"col-6 d-flex align-items-center"}>
          <h2 className={styles.marginColumn}>Table {table.id}</h2>
          <strong>Status: </strong> {table.status}
        </Col>
        <Col className="col-6 d-flex justify-content-end align-items-center">
          <Link to={"/tables/" + table.id}>
            <Button variant="primary" size="sm" className={styles.button}>
              Read more
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => handleSubmit(table.id)}
            className={styles.button}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SingleTable;
