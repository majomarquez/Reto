import React from 'react';

const clientId = '12b72b0c9645258635efff82e39f7a5fcd438e24324f08437cf4fafa723b6fae';
const endpoint = 'https://api.unsplash.com/search/photos';


export default class Home extends React.Component{

    constructor(){
        super()
        this.query ='';
        this.trackQueryValue=this.trackQueryValue.bind(this);
        this.search=this.search.bind(this);

        this.state = {
            images:[]
        }
    }

    search (){
        fetch(`${endpoint}?query=${this.query}&client_id=${clientId}`)
            .then(response=>{
                return response.json()
            }).then(jsonResponse=>{
                console.log(jsonResponse);
                this.setState({
                    images: jsonResponse.results
                })
            })
    }

    trackQueryValue(ev){
        this.query = ev.target.value;
    }

    images(){
        return this.state.images.map(image =>{
            return<img src={image.urls.thumb} key={image.id} />
        })
    }
    render(){
        return(<div>
            <input type="text" onChange={this.trackQueryValue}/>
            <button onClick={this.search}>Buscar</button>
            <div>{this.images()}</div>
        </div>

        )
    }
}