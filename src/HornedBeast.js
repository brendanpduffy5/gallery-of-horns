import React from "react";
import {Card, Button} from "react-bootstrap";


class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            helloCounter: 0
        }
    }

    incrementHello = ( ) => {
        this.setState({
            helloCounter: this.state.helloCounter + 1
        })
    }

    render (){
        return(
            <Card style={{width: '20rem'}}>
                <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} height={250} />
                <Card.Body>
                <Card.Title><h2>{this.props.title}</h2></Card.Title>
                <Card.Text>
                <p>{this.props.description}</p>
                <p>&#x2764;&#xFE0F;{this.state.helloCounter} times</p>
                
                </Card.Text>
                <Button variant="primary" onClick={this.incrementHello} >Say Hello!</Button>

                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;
/* <img src="src/red heart.jpg" alt= "heart"/> */