import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          weatherArray:this.props.weatherData
        
      }
      console.log(this.state.weatherArry);
    }
    render(){
        return(
            <div>
            <p>
                {this.state.weatherArray[0].date}<br></br>
                {this.state.wetherArray[0].description}
            </p>
            <p>
                {this.state.weatherArray[1].date}<br></br>
                {this.state.wetherArray[1].description}
            </p>
            <p>
                {this.state.weatherArray[2].date}<br></br>
                {this.state.wetherArray[2].description}
            </p>
            </div>
            
        )
    } 
    
    
}

export default weather;


// getWhetherData= async() =>{
//     let serverRoute= process.env.REACT_APP_SERVER;
//     const url= `${serverRoute}/weather?searchQuery=paris&lat=48.8566969&long=2.3514616`;
    
//     const weatherItem= await axios.get(url)
// }