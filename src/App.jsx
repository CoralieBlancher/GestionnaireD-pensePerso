import './App.css'
import { DepensesProvider } from './context/DepensesContext'
import DepensesForm from "./components/DepensesForm";
import DepensesTab from "./components/DepensesTab";
import DepensesTotal from "./components/DepensesTotal";

function App() {


    return (
        <>
            <DepensesProvider>
                <div className="container">
                    <h1>Gestion des Dépenses</h1>
                    <DepensesForm />
                    <DepensesTotal />
                    <DepensesTab />
                </div>
            </DepensesProvider>
        </>
    )
}

export default App
