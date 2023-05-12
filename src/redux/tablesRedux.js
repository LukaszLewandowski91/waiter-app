import shortid from "shortid";
//selectors
export const getAllTables = () => {
  return (state) => state.tables;
};

export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

//actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const EDIT_TABLE = createActionName("EDIT_TABLE");
const ADD_TABLE = createActionName("ADD_TABLE");
//action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const editTablesRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(table),
    };

    fetch("http://localhost:3131/tables/" + table.id, options).then(() =>
      dispatch(editTable(table))
    );
  };
};

export const addTableRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(table),
    };
    fetch("http://localhost:3131/tables", options).then(() =>
      dispatch(addTable(table))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case ADD_TABLE:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default tablesReducer;
