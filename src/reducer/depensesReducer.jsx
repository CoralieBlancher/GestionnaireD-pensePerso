import { useReducer } from "react";

const initialState = {
    depenses: [],
    label: "",
    montant: "",
    categorie: "Alimentation"
};

const depensesReducer = (state, action) => {
    switch (action.type) {

        case "AJOUT_DEPENSE":
            return {
                ...state,
                depenses: [...state.depenses, action.payload],
                label: "",
                motant: "",
                categorie: "Alimentation"
            };

        case "SUPPRIMER_DEPENSE":
            return {
                ...state,
                depenses: state.depenses.filter(
                    depense => depense.id !== action.payload
                ),
            };

        case "MODIFIER_FORM":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        default:
            return state;
    }
};

const useDepensesReducer = () => useReducer(depensesReducer, initialState);

export default useDepensesReducer;