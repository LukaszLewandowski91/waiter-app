import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllStatus } from "../../../redux/statusRedux";

const TableForm = ({ action, actionText, ...props }) => {
  const [status, setStatus] = useState(props.status || "");
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || "");
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    props.maxPeopleAmount || ""
  );
  const [bill, setBill] = useState(props.bill || 0);

  const statuses = useSelector(getAllStatus());

  const handleSubmit = () => {
    action({
      status,
      peopleAmount,
      maxPeopleAmount,
      bill,
    });
  };

  return (
    <>
      <h1>Table {props.id}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label column md="1" sm="12">
            <strong>Status: </strong>
          </Form.Label>
          <Col md="3" sm="12">
            <Form.Select
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {statuses.map((stat) => (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label column md="1" sm="12">
            <strong>People: </strong>
          </Form.Label>
          <Col md="1" sm="1">
            <Form.Control
              value={peopleAmount}
              type="number"
              style={{ width: "70px" }}
              onChange={(e) => setPeopleAmount(e.target.value)}
            />
          </Col>
          <Col md="1" sm="1">
            <Form.Control
              value={maxPeopleAmount}
              type="number"
              style={{ width: "70px" }}
              onChange={(e) => setMaxPeopleAmount(e.target.value)}
            />
          </Col>
        </Form.Group>
        {status === "Busy" && (
          <Form.Group className="mb-3" as={Row}>
            <Form.Label column md="1" sm="12">
              <strong>Bill: $</strong>
            </Form.Label>
            <Col md="1" sm="1">
              <Form.Control
                value={bill}
                type="number"
                onChange={(e) => setBill(e.target.value)}
                style={{ width: "70px" }}
              />
            </Col>
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </>
  );
};

export default TableForm;
