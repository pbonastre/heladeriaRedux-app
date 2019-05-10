import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import store from "../../store";

import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  state= {flavors: store.getState().freezer.iceCreams}
  componentDidMount(){
    store.subscribe(() => this.setState({flavors: store.getState().freezer.iceCreams}))
  }

  render() {
    console.log(this.state);
    const flavors=this.state.flavors;
    const freezerFlavor=Object.keys(flavors).map(flavorName => 
    <FreezerFlavor 
      key={flavorName}
      flavorName={flavorName} 
      scoops={flavors[flavorName]} /> )
    return (
      <Panel title="Freezer (°0C)">
        {freezerFlavor}
      </Panel>
    );
  }
}

export default Freezer;

