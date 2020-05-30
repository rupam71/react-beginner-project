import React, { Component } from 'react';
import UserCreate from './userCreate';
import LanguageContex from '../contex/languageContex';
import colourContext from '../contex/colourContext';

class App extends Component {
    state = { 
        language : 'english',
        color : 'blue' ,
        count: 0
     }

     onLanguageChange = language => {
        this.setState({language});
     }

     onColorChange = color => {
        this.setState({color});
     }

     incriment = () => {
         this.setState({count : this.state.count+1 })
     }
     
    render() { 
        return ( 
            <div className='ui container'>
                <div className='ui form'>
                    Select a language
                    <i className='flag us' onClick={()=>this.onLanguageChange('english')}/>
                    <i className='flag nl' onClick={()=>this.onLanguageChange('dutch')}/>
                    <i className='flag bd' onClick={()=>this.onLanguageChange('bangla')}/>
                </div>

                <div className='ui form'>
                    Pick a Color
                    <i className='circle icon blue' onClick={()=>this.onColorChange('blue')}/>
                    <i className='circle icon red' onClick={()=>this.onColorChange('red')}/>
                    <i className='circle icon green' onClick={()=>this.onColorChange('green')}/>
                </div>

                <colourContext.Provider value={this.state.color}>
                    <LanguageContex.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContex.Provider>
                </colourContext.Provider>

                {/* we are sending 2 different Context */}
                
                <h2>value right now : {this.state.count}</h2>
                <button className='ui button primary'
                onClick={this.incriment}
                >
                    Add
                </button>
            </div>
         );
    }
}
 
export default App;