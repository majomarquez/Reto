import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from './Home';
import './index.css';

class App extends Component{
    constructor(){
        super();
        this.state ={
            name:'React'
        }
    }

render () {
    return(
    <div>
        <Home name ={this.state.name}/>
    </div>
    );
}
}
render(<App />, document.getElementById('root'));
