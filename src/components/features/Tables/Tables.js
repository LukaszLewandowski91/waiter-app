import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Link } from "react-router-dom";
import styles from "./Tables.module.scss";

const Tables = () => {
  const tables = useSelector(getAllTables());
  console.log(tables);
  return (
    <Container>
      {tables.map((table) => (
        <Row key={table.id} className={styles.borderTable}>
          <Col className={"col-6 d-flex align-items-center"}>
            <h2 className={styles.marginColumn}>Table {table.id}</h2>
            <strong>Status: </strong> {table.status}
          </Col>
          <Col className="col-6 d-flex justify-content-end align-items-center">
            <Link to={"/tables/" + table.id}>
              <Button variant="primary" size="sm">
                Read more
              </Button>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Tables;
