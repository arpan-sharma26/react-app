import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }    
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        setUserInput((prevState)=> {
            return {...prevState,
            amount: event.target.value
        } 
        })
    }    
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // const expenseData = {
        //     title: enteredTitle,
        //     amount: enteredAmount,
        //     date: new Date(enteredDate)
        // };
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: '',
                amount: '',
                date: ''
            }

        });
        props.onSaveExpenseData(userInput);
        props.stopAddingExpenses();
    }

    const stopAddingExpense = () => {
        props.stopAddingExpenses();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' required onChange={titleChangeHandler} value={userInput.title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' required min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' required min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={stopAddingExpense}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;