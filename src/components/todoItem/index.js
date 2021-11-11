import React from 'react';
import classes from "./todoItem.module.css";



class ToDoItem extends React.Component{
    
    

    render(){
        return(

            <div className={classes.todo_section} onClick={this.props.delete}>
                <h1>{this.props.title}</h1>
                <p>{this.props.keyT}</p>
            </div>
        )
    }
}

export default ToDoItem;

//const filterItems = items.filter((list)=>list.key !==key)
//setState({items:filterItems})


// onClick={()=>this.clickB(this.props.keyT)}
// clickB(key){
//     const filterItems = this.state.items.filter((list) => list.key !== key);
// }