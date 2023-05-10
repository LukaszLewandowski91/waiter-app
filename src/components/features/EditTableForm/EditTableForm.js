import { useParams } from "react-router-dom";
import TableForm from "../TableForm/TableForm";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";

const EditTableForm = () => {
  const { id } = useParams();

  const tableData = useSelector((state) => getTableById(state, id));

  return <TableForm {...tableData} actionText="Update" />;
};

export default EditTableForm;
