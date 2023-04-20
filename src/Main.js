import React from "react";
import HornedBeast from "./HornedBeast";
import newData from "./Data.json";
import "./Main.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{
    render(){
        return(
            <Container>
            <Row className= "hornedBeasts">
                {newData.map(beast =>
                    <HornedBeast
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                    />
                )}
            </Row>
            </Container>
        )
    }
}

export default Main;