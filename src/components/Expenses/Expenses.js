import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2019');

    const filteredExpenses = props.items.filter(expense => {
        // eslint-disable-next-line
        // return new Date(expense.date).getFullYear().toString() == filterYear
        return expense.date.getFullYear().toString() === filterYear;
    })

    const onFilterChange = (year) => {
        setFilterYear(year);
        console.log(year);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={onFilterChange} defaultValue={filterYear} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;