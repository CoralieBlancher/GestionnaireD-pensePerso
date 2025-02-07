import React from "react";
import useDepensesContext from "../context/DepensesContext";

const DepensesForm = () => {
    const { state, dispatch } = useDepensesContext();

    const inputChange = (e) => {
        dispatch({
            type: "MODIFIER_FORM",
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const clickSubmit = (e) => {
        e.preventDefault(); //empèche de le rechargement de la page

        if (!state.label || !state.montant) return; 

        dispatch({
            type: "AJOUT_DEPENSE",
            payload: { 
                id: crypto.randomUUID(), 
                label: state.label, 
                montant: parseFloat(state.montant), 
                categorie: state.categorie 
            },
        });
    };

    return (
        <form onSubmit={clickSubmit}>
            <input type="text" name="label" placeholder="Nom de la dépense"
                value={state.label|| ""} onChange={inputChange} />

            <input type="number" name="montant" placeholder="Montant"
                value={state.montant || ""} onChange={inputChange} />

            <select name="categorie" value={state.categorie|| "Alimentation"}
                onChange={inputChange}>
                <option>Alimentation</option>
                <option>Logement</option>
                <option>Transport</option>
                <option>Divertissement</option>
                <option>Santé</option>
                <option>Éducation</option>
                <option>Autres</option>
            </select>

            <button type="submit">Ajouter</button>

        </form>
    );
};

export default DepensesForm;