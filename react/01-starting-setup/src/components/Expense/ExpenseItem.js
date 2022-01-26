import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import react, {useState} from 'react';

function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseDesc = props.title;
    const expensePrice = props.amount;

    const [title,setTitle] = useState(expenseDesc);

    const updateTitleHandler = () =>{
      setTitle(expenseDesc + "- Updated!")
      console.log("updating title...");
    }

    return (
      <Card className = "expense-item">
        {/* <h2>{expenseDate.toDateString()}</h2> */}
        <ExpenseDate date = {expenseDate}/>
        <h2 className = "expense-item__description">{title}</h2>
        <div className="expense-item__price">{expensePrice}</div>
        <button onClick={updateTitleHandler}>Update</button>
      </Card>
    );
  }
  
  export default ExpenseItem;