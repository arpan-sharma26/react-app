import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from '../NewExpense/ExpenseForm';

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState(false); 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            date: new Date(enteredExpenseData.date),
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditing = () => {
        setAddNewExpense(true);
    };

    const stopAddingNewExpense = () => {
        setAddNewExpense(false);
    }

    return (
        <div className="new-expense">
            {!addNewExpense && <button onClick={startEditing}>Add New Expense</button>}
            {addNewExpense&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopAddingExpenses={stopAddingNewExpense}/>}
        </div>
    )
}
 
export default NewExpense;