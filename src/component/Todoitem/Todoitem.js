import React from 'react';
import './Todoitem.css';

 const Todoitem = (props) => {


     const {items, deleteItem, message} = props;
     const  list = items.map( item => {
        return (
               <div key={item.id}>
                   
                  <span className="name">{item.name}</span>  
                  <span className="age">{item.age}</span>
                  <span className="action close" onClick={() => {deleteItem(item.id)} }>&times;</span>
                   
                </div>
                 )
 })
    

    return (
      <div className="listitem">
        <span className="name head">Name</span>
        <span className="age head">Age</span>
        <span className="action head">Action</span>
        {list}
        <h3>{message}</h3>


      </div>
    );
  
}

export default Todoitem;
