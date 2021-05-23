import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quearySearch: '',
      locatData: '',
      displayMap: false,
      errorMessage: false,
      theError: ''
    }
  }

  getPlace = async (event) => {
    event.preventDefault();

    let placeUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.2b421377eaad8060e237f29dd060432b&q=${this.state.quearySearch}&format=json`;

    try {

      let placeResult = await axios.get(placeUrl);

      this.setState({
        locatData: placeResult.data[0],
        displayMap: true,
        errorMessage: false
      })
    }
    catch (error) {
      this.setState({
        displayMap: false,
        errorMessage: true,
        theError: error
      })
    }
  }

  updateQuearySearch = (event) => {
    this.setState({
      quearySearch: event.target.value
    })
  }

  render() {
    return (
      <div>
        {/* <h1>City Explorer</h1>
        <form onSubmit={this.getPlace}>
          <input type='text' placeholder='add a city' onChange={this.updateQuearySearch} />
          <button>Explore</button>
          <input type='submit' value='Get Location' />
        </form> */}

        <Form onSubmit={this.getPlace}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Insert City " onChange={this.updateQuearySearch} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore
          </Button>
        </Form>

        
        {this.state.displayMap &&

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.2b421377eaad8060e237f29dd060432b&center=${this.state.locatData.lat},${this.state.locatData.lon}`} />
            <Card.Body>
              <Card.Title>{this.state.locatData.display_name}</Card.Title>
              <Card.Text>
                {this.state.locatData.lat} 
                {this.state.locatData.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        }

        {this.state.errorMessage &&

          <Alert variant="danger">
            Try Another Entry, Error:
        {this.state.theError.response.status}
          </Alert>
        }
      </div>

    );
  }
}

export default App;