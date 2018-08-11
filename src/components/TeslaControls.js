import React from 'react'

const TeslaControls = props => {
  // temp > 10, then display cooling AC; otherwise display HEAT
  let airCon;
  props.selectedItem.temp > 10 ? (
    airCon = (
      <div onClick={props.handleAirConSelect} className="teslaControl">
        <div className={"teslaControl__airCondition teslaControl__airCondition--cool " + ( props.selectedItem.airCon ? 'teslaControl__airCondition--active' : '') }>
          <p>AC ON</p>
          <i />
        </div>
      </div>
    )
  ) : (
    airCon = (
      <div onClick={props.handleAirConSelect} className="teslaControl">
        <div className={"teslaControl__airCondition teslaControl__airCondition--heat " + ( props.selectedItem.airCon ? 'teslaControl__airCondition--active' : '') }>
          <p>HEAT ON</p>
          <i />
        </div>
      </div>
    )
  )

  
  return (
    <React.Fragment>
      <section className="teslaControls">
        <div className="teslaControl">
          <p className="teslaControl__title">Speed</p>
          <select
            value={props.selectedItem.speed}
            onChange={props.handleSpeedSelect}
            className="teslaControl__item teslaControl__speed"
          >
            <option value="45">45 MPH</option>
            <option value="50">50 MPH</option>
            <option value="55">55 MPH</option>
            <option value="60">60 MPH</option>
            <option value="65">65 MPH</option>
            <option value="70">70 MPH</option>
          </select>
        </div>
        <div className="teslaControl">
          <p className="teslaControl__title">Outside Temperature</p>
          <select
            value={props.selectedItem.temp}
            onChange={props.handleTempSelect}
            className="teslaControl__item teslaControl__temperature"
          >
            <option value="-10">-10 °C</option>
            <option value="0">0 °C</option>
            <option value="10">10 °C</option>
            <option value="20">20 °C</option>
            <option value="30">30 °C</option>
            <option value="40">40 °C</option>
          </select>
        </div>

        {airCon}

        <div className="teslaControl">
          <div className="teslaControl__wheels">
            <p className="teslaControl__title">Wheels</p>
            <div className="teslaControl__wheels__container">
              <div
                onClick={props.handleWheelSelectA}
                className={"teslaControl__wheels__wheel teslaControl__wheels__wheel--19Wheel " + ( props.smallWheel ? 'teslaControl__wheels__wheel--active' : '') }
              >
                <p>19''</p>
              </div>
              <div
                onClick={props.handleWheelSelectB}
                className={"teslaControl__wheels__wheel teslaControl__wheels__wheel--21Wheel " + ( props.smallWheel ? '' : 'teslaControl__wheels__wheel--active') }
              >
                <p>21''</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default  TeslaControls;