import React, { Component } from 'react';

class Like extends Component {
    
    render() { 

        let classes = "fa fa-heart"; // black
            if (!this.props.liked) classes += "-o" ; //white

        return ( 
            
            <i 
            onClick={this.props.onClick}
            className={classes}
            style={{cursor:"pointer"}} 
            aria-hidden="true">
                
            </i>
         );
    }
}
 
export default Like;