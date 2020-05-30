import React from 'react';
import languageContex from '../contex/languageContex';

class Field extends React.Component {
    static contextType = languageContex;

    renderText(){
        if (this.context === 'english') return 'Name' ;
        else if (this.context === 'dutch') return 'Naam' ;
        else return 'নাম' ;
    }

    render() { 
        // const text = this.context === 'english' ? 'Name' : 'Naam' ;
        
        return ( 
            <div className='ui field'>
                <label>{this.renderText()}</label>
                <input />
            </div>
         );
    }
}
 
export default Field;