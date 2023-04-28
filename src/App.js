import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import BeastModal from "./BeastModal";
import newData from "./Data.json";
import { Form } from "react-bootstrap/Form";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
      showModal: false,
      newData: newData,
    }
  }
  showBeastModal = () => {
    this.setState({showModal: true})
  }

  hideBeastModal = () => {
    this.setState({showModal: false})
  }

  selectedBeast = (beastObj) =>{
    this.setState({beast: beastObj})
  }

  changeHorns = (e) => {
    e.preventDefault();
    let filteredHorns;

    if(e.target.value === '1'){
      filteredHorns = newData.filter(beast => beast.horns === '1')
    }
    else if(e.target.value === '2'){
      filteredHorns = newData.filter(beast => beast.horns === '2')
    }
    else if(e.target.value === '3'){
      filteredHorns = newData.filter(beast => beast.horns === '3')
    }
    else if(e.target.value === '100'){
      filteredHorns = newData.filter(beast => beast.horns === '100')
    }
    else { 
      filteredHorns = newData
    }
    this.setState({newData: filteredHorns})
  }

  render (){
    return (
        <>
          <Header />

          <Form>
            <Form.Group>
              <Form.label>Choose number of horns</Form.label>
              <Form.Select onChange={this.changeHorns}>
                <option>Open this select menu</option>
                <option value=" ">Select the number of Horns</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">One Hundred Horns</option>
              </Form.Select>
            </Form.Group>
          </Form>

          <Main 
          showBeastModal={this.showBeastModal}
          selectedBeast={this.selectedBeast}
          newData={this.state.newData}
          />
          <BeastModal
            showModal={this.state.showModal}
            hideBeastModal={this.hideBeastModal}
            beast={this.state.beast}
          
          />
          <Footer />
        </>
      )

  }
}

export default App;
