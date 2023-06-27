import { createContext, useEffect, useState, useReducer } from "react";
import { recordsInitialState, recordsReducer } from "./reducers/recordsReducer";
import getAllRecords from "../apiCalls/recordsApiCall";
import { cartInitialState } from "./reducers/cartReducer";
import { cartReducer } from "./reducers/cartReducer";

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
  //   const [records, setRecords] = useState();
  //! Records Reducer
  const [recordsState, dispatchRecords] = useReducer(
    recordsReducer,
    recordsInitialState
  );
 //! Cart State
 const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialState)
  useEffect(() => {
    getAllRecords(dispatchRecords);
  }, []);

  return (
    <DataContext.Provider value={{ recordsState, cartState, dispatchCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
