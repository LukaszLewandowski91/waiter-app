import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Container } from "react-bootstrap";

const Tables = () => {
  const tables = useSelector(getAllTables());
  console.log(tables);
  return <Container></Container>;
};

export default Tables;
