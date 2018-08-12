import React from 'react';

const TeslaControls = props => {
  // temp > 10, then display cooling AC; otherwise display HEAT
  let airCon;
  props.selectedItem.temp > 10
    ? (airCon = (
        <div onClick={props.handleAirConSelect} className="teslaControl">
          <div
            className={
              'teslaControl__airCondition teslaControl__airCondition--cool ' +
              (props.selectedItem.airCon
                ? 'teslaControl__airCondition--active'
                : '')
            }
          >
            <p>AC ON</p>
            <i />
          </div>
        </div>
      ))
    : (airCon = (
        <div onClick={props.handleAirConSelect} className="teslaControl">
          <div
            className={
              'teslaControl__airCondition teslaControl__airCondition--heat ' +
              (props.selectedItem.airCon
                ? 'teslaControl__airCondition--active'
                : '')
            }
          >
            <p>HEAT ON</p>
            <i />
          </div>
        </div>
      ));

  return (
    <React.Fragment>
      <section className="teslaControls">
        <div className="teslaControl">
          <p className="teslaControl__title">Speed</p>
          <div className="teslaControl__item teslaControl__speed">
            <p className="teslaControl__value">
              {props.selectedItem.speed}
              <span className="teslaControl__unit">mph</span>
            </p>
            <div className="teslaControl__ArrowUpDown">
              <button
                className="teslaControl__btnUp"
                onClick={props.handleSpeedUpClick}
                disabled={props.selectedItem.speedMax}
              />
              <button
                className="teslaControl__btnDown"
                onClick={props.handleSpeedDownClick}
                disabled={props.selectedItem.speedMin}
              />
            </div>
          </div>
        </div>
        <div className="teslaControl">
          <p className="teslaControl__title">Outside Temperature</p>
          <div className="teslaControl__item teslaControl__temperature">
            <p className="teslaControl__value">
              {props.selectedItem.temp}
              <span className="teslaControl__unit">°C</span>
            </p>
            <div className="teslaControl__ArrowUpDown">
              <button
                className="teslaControl__btnUp"
                onClick={props.handleTempUpClick}
                disabled={props.selectedItem.tempMax}
              />
              <button
                className="teslaControl__btnDown"
                onClick={props.handleTempDownClick}
                disabled={props.selectedItem.tempMin}
              />
            </div>
          </div>
        </div>

        {airCon}

        <div className="teslaControl">
          <div className="teslaControl__wheels">
            <p className="teslaControl__title">Wheels</p>
            <div className="teslaControl__wheels__container">
              <div
                onClick={props.handleWheelSelectA}
                className={
                  'teslaControl__wheels__wheel teslaControl__wheels__wheel--19Wheel ' +
                  (props.smallWheel
                    ? 'teslaControl__wheels__wheel--active'
                    : '')
                }
              >
                <p>19''</p>
              </div>
              <div
                onClick={props.handleWheelSelectB}
                className={
                  'teslaControl__wheels__wheel teslaControl__wheels__wheel--21Wheel ' +
                  (props.smallWheel
                    ? ''
                    : 'teslaControl__wheels__wheel--active')
                }
              >
                <p>21''</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default TeslaControls;
