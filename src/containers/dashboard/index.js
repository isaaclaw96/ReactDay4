import React from 'react';
import classes from './dashboard.module.css';
import ToDoItem from "../../components/todoItem";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
        this.addNew = this.addNew.bind(this);
    }
    addNew(){
        //get the value from the input
        // console.log(this._inputElement.value);
        //push the value into an array
        if(this._inputElement.value !== ""){
            const newItems = {
                title: this._inputElement.value,
                key: Date.now(),
            }
            //get the current items and concat the newItem
            //method 1
            // this.setState(
            //     (prevState)=>{
            //     return{ 
            //         items: prevState.items.concat(newItems) 
            //     };       
            // }, 
            // ()=>console.log(this.state.items));

            //method 2
            this.setState({items: [...this.state.items, newItems] });
        }
        
        this._inputElement.value = "";
    }

    

    delete(keyT){
        const filterItem = this.state.items.filter((list) =>
            list.key !== keyT);
        
        //filterItem becomes a new array and then we set state to the new array
        
        this.setState({items:filterItem});

    }
    render(){
        return(
            <div className={classes.dashboard_section}>
                <div className={classes.form_section}>
                    <input type="text" placeholder="Create List..." ref={(a)=>(this._inputElement = a )}/>
                    <button onClick={this.addNew}>Add</button>
                </div>

                <div>

                {this.state.items.map((list)=>(
                    <ToDoItem 
                    key = {list.key}
                    title = {list.title}
                    keyT = {list.key}
                    delete = {()=>{this.delete(list.key)}}
                    />
                ))}
                </div>
            </div>
        );
    }
}

export default Dashboard;