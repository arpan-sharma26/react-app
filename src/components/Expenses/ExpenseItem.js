// stateless / dumb / presentational component.
// Just to show or output data.
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

const ExpenseItem = (props) => {
    // useState hook, to update a variable in a component (reloads component function)
    // title = updated value of the variable, setTitle = function returned
    // to update the value of the variable
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle("Updated")
    //     console.log("Button Clicked");
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;