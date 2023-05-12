import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableForm from "../TableForm/TableForm";
import { addTableRequest } from "../../../redux/tablesRedux";

const AddTableForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (table) => {
    dispatch(addTableRequest(table));
    navigate("/");
  };
  return (
    <>
      <TableForm
        action={handleSubmit}
        actionText="Add"
        actionName="New Table"
      />
    </>
  );
};

export default AddTableForm;
