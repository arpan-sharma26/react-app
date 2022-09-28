import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2019');

    const onFilterChange = (year) => {
        setFilterYear(year);
        console.log(year);
    };

    return (
        <div>
            <Card className="expenses">
            <ExpenseFilter onChangeFilter={onFilterChange} defaultValue={filterYear} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;