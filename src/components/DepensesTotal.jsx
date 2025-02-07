import React from "react";
import useDepensesContext from "../context/DepensesContext";

const DepensesTotal = () => {
    const { state } = useDepensesContext();


    const total = state.depenses.reduce((
        acc, depense) => acc + depense.montant, 0
    );

    const depensesParCategorie = state.depenses.reduce(
        (acc, depense) => {
            acc[depense.categorie] = (acc[depense.categorie] || 0) + depense.montant;
            return acc;
        }, {}
    );

    return (
        <div>
            <h2>Total Dépenses : {total}€</h2>
            <h3>Détail par catégorie :</h3>
            <ul>
                {["Alimentation", "Logement", "Transport", "Divertissement",
                    "Santé", "Éducation", "Autres"].map(categorie => (
                        <li key={categorie}>
                            {categorie} : {depensesParCategorie[categorie] || 0}€
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default DepensesTotal;