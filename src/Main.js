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
                {newData.map((beast, idx) =>
                    <HornedBeast
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                        beast={beast}
                        showBeastModal={this.props.showBeastModal}
                        selectedBeast={this.props.selectedBeast}
                        key={idx}
                    />
                )}
            </Row>
            </Container>
        )
    }
}

export default Main;