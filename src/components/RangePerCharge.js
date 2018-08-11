import React, { Component } from 'react';

import TeslaCar from './TeslaCar';
import TeslaStates from './TeslaStates';
import TeslaControls from './TeslaControls';

class RangePerCharge extends Component {
  state = {
    modals: ['60', '60D', '75', '75D', '90D', 'P100D'],
    list: {},
    selectedItem: {
      wheels: 19,
      airCon: true,
      speed: 55,
      temp: 20
    },
    rangeList: [
      {'60': 246},
      {'60D': 250},
      {'75': 297},
      {'75D': 306},
      {'90D': 336},
      {'P100D': 376}
    ],
    smallWheel: true
  };

  // local json data from jsonResponse.js 
  componentDidMount = () => {
    this.setState({ list: this.props.list });
  }

  // data structure
  // [modal][wheels][airCon].speed[speed][temp]
  // "[60][19][on]speed[45][10]";

  // find Range Data function
  findRangeData = (models, selectedItem) => {
    let rangeList =  models.map(model => {
      const { wheels, speed, airCon, temp } = selectedItem;
      const range = this.state.list[model][wheels][airCon ? 'on' : 'off'].speed[speed][temp];
      
      return {
        [model]: range
      };
    });

    this.setState({ rangeList });
  }

  // 19'' wheel selection
  handleWheelSelectA = () => {
    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          wheels: 19
        },
        smallWheel: true
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  };

  // 22'' wheel selection
  handleWheelSelectB = () => {
    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          wheels: 21
        },
        smallWheel: false
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  };

  // air conditioner click, on/off
  handleAirConSelect = () => {
    let airCon = !this.state.selectedItem.airCon;

    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          airCon
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  };

  // speed selection
  handleSpeedSelect = e => {
    let speed = parseInt(e.target.value);
    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          speed
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  };

  // outside temperature selection
  handleTempSelect = e => {
    let temp = parseInt(e.target.value);
    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          temp
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <TeslaCar selectedItem = {this.state.selectedItem} />

        <TeslaStates rangeList={this.state.rangeList} />

        <TeslaControls 
          handleSpeedSelect = {this.handleSpeedSelect}
          handleTempSelect = {this.handleTempSelect}
          handleAirConSelect = {this.handleAirConSelect}
          handleWheelSelectA = {this.handleWheelSelectA}
          handleWheelSelectB = {this.handleWheelSelectB}
          selectedItem = {this.state.selectedItem}
          smallWheel = {this.state.smallWheel}
        />
      </React.Fragment>
    );
  }
}

export default RangePerCharge;
