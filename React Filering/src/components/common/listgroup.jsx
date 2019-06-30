import React, { Component } from 'react';

class ListGroup extends Component {
    state = {  }
    render() { 

        const {items,textProperty,valueProperty,selectedItem,onItemSelect} = this.props;

        return ( 
            <ul className="list-group">
                {items.map(item=> (
                    <li 
                    onClick={()=> onItemSelect(item)}
                    key={item[valueProperty]}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
         );
    }
}

ListGroup.defaultProps = {
    textProperty:"name",
    valueProperty:"_id"
    //So we dont need to use this event handle on movie.jsx
    //its Simplyfy our work.
    //method = classname.defaultProps
}

export default ListGroup



/*
const ListGroup = () => {
    return ( null; );
}
 
export default ListGroup;
*/
