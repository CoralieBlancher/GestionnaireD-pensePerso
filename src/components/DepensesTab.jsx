import React from "react";
import useDepensesContext from "../context/DepensesContext";

const DepensesTab = () => {
    const { state, dispatch } = useDepensesContext();

    return (
        <div>
            <h2>Liste des Dépenses</h2>
            <ul>
                {state.depenses.map((depense) => (
                    <li key={depense.id}>
                        {depense.label} - {depense.montant}€ ({depense.categorie})
                        <button onClick={() => dispatch({ 
                            type: "SUPPRIMER_DEPENSE", 
                            payload: depense.id 
                            })}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DepensesTab;
