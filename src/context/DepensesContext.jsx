import { createContext, useContext } from "react";
import useDepensesReducer from "../reducer/depensesReducer";

const DepensesContext = createContext();

export const DepensesProvider = ({ children }) => {
    const [state, dispatch] = useDepensesReducer();

    return (
        <DepensesContext.Provider value={{ state, dispatch }}>
            {children}
        </DepensesContext.Provider>
    );
};

const useDepensesContext = () => useContext(DepensesContext);

export default useDepensesContext;