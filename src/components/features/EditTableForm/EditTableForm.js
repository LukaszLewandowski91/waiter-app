import { useNavigate, useParams } from "react-router-dom";
import TableForm from "../TableForm/TableForm";
import { useDispatch, useSelector } from "react-redux";
import { editTablesRequest, getTableById } from "../../../redux/tablesRedux";

const EditTableForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const tableData = useSelector((state) => getTableById(state, id));

  const handleSubmit = (table) => {
    dispatch(editTablesRequest({ ...table, id }));
    navigate("/");
  };

  return <TableForm action={handleSubmit} {...tableData} actionText="Update" />;
};

export default EditTableForm;
