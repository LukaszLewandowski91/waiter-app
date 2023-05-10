import { Form, Col, Row } from "react-bootstrap";

const TableForm = () => {
  return (
    <>
      <h1>Table</h1>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column md="1" sm="12">
            <strong>Status: </strong>
          </Form.Label>
          <Col md="3" sm="12">
            <Form.Select>
              <option value="test">Test</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md="1" sm="12">
            <strong>People: </strong>
          </Form.Label>
        </Form.Group>
      </Form>
    </>
  );
};

export default TableForm;
