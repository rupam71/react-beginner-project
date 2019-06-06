import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() { 

        let classes = "fa fa-heart" ;  //liked
        if (!this.props.liked) classes += "-o" ;   //not Liked
        // if liked true = liked (black)
        // if liked not true = not liked (white)
        return ( 
           <i 
           onClick = {this.props.click}
           style = {{cursor:"pointer"}}
           className ={classes} 
           aria-hidden="true"
           ></i>

         );
    }
}
 
export default Like;