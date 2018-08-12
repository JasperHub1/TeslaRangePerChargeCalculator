import React, { Component } from 'react';

import TeslaCar from './TeslaCar';
import TeslaStates from './TeslaStates';
import TeslaControls from './TeslaControls';
import TeslaControlsV2 from './TeslaControlsV2';

class RangePerCharge extends Component {
  state = {
    modals: ['60', '60D', '75', '75D', '90D', 'P100D'],
    speed: [45, 50, 55, 60, 65, 70],
    temp: [-10, 0, 10, 20, 30, 40],
    list: {},
    selectedItem: {
      wheels: 19,
      airCon: true,
      speed: 55,
      speedMax: false,
      speedMin: false,
      temp: 20,
      tempMax: false,
      tempMin: false
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

  ///////////////////////////////
  // UP and DOWN ARROW VERSION
  //////////////////////////////
  
  handleSpeedUpClick = () => {
    const curIndex = this.state.speed.indexOf(this.state.selectedItem.speed);
    const max = this.state.speed.length - 1;
    let newIndex;
    curIndex === max ? newIndex = curIndex : newIndex = curIndex + 1;
    const newSpeed = this.state.speed[newIndex];

    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          speed: newSpeed,
          speedMax: curIndex === max - 1,
          speedMin: false
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  }

  handleSpeedDownClick = () => {
    const curIndex = this.state.speed.indexOf(this.state.selectedItem.speed);
    const min = 0;
    let newIndex;
    curIndex === min ? newIndex = curIndex : newIndex = curIndex - 1;
    const newSpeed = this.state.speed[newIndex];

    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          speed: newSpeed,
          speedMax: false,
          speedMin: curIndex === min + 1
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  }

  handleTempUpClick = () => {
    const curIndex = this.state.temp.indexOf(this.state.selectedItem.temp);
    const max = this.state.temp.length - 1;
    let newIndex;
    curIndex === max ? newIndex = curIndex : newIndex = curIndex + 1;
    const newTemp = this.state.temp[newIndex];

    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          temp: newTemp,
          tempMax: curIndex === max - 1,
          tempMin: false
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  }

  handleTempDownClick = () => {
    const curIndex = this.state.temp.indexOf(this.state.selectedItem.temp);
    const min = 0;
    let newIndex;
    curIndex === min ? newIndex = curIndex : newIndex = curIndex - 1;
    const newTemp = this.state.temp[newIndex];

    this.setState(
      prevState => ({
        selectedItem: {
          ...prevState.selectedItem,
          temp: newTemp,
          tempMax: false,
          tempMin: curIndex === min + 1
        }
      }),
      () => {
        this.findRangeData(this.state.modals, this.state.selectedItem);
      }
    );
  }


  render() {
    return (
      <React.Fragment>
        <TeslaCar selectedItem = {this.state.selectedItem} />

        <TeslaStates rangeList={this.state.rangeList} />

        <TeslaControls 
          handleSpeedSelect = {this.handleSpeedSelect}
          handleTempSelect = {this.handleTempSelect}
          selectedItem = {this.state.selectedItem}
          handleAirConSelect = {this.handleAirConSelect}
          handleWheelSelectA = {this.handleWheelSelectA}
          handleWheelSelectB = {this.handleWheelSelectB}
          smallWheel = {this.state.smallWheel}
        />

        <TeslaControlsV2 
          handleSpeedUpClick = {this.handleSpeedUpClick}
          handleSpeedDownClick = {this.handleSpeedDownClick}
          handleTempUpClick = {this.handleTempUpClick}
          handleTempDownClick = {this.handleTempDownClick}
          selectedItem = {this.state.selectedItem}
          handleAirConSelect = {this.handleAirConSelect}
          handleWheelSelectA = {this.handleWheelSelectA}
          handleWheelSelectB = {this.handleWheelSelectB}
          smallWheel = {this.state.smallWheel}
        />
      </React.Fragment>
    );
  }
}

export default RangePerCharge;
