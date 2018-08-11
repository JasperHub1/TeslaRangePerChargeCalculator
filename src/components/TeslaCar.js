import React from 'react';

const TeslaCar = props =>(
  <React.Fragment>
    <section className="teslaCar">
      <div className="teslaWheels">
        <div className={`teslaWheel teslaWheel--front teslaWheel--${props.selectedItem.wheels}--${props.selectedItem.speed}`} />
        <div className={`teslaWheel teslaWheel--rear teslaWheel--${props.selectedItem.wheels}--${props.selectedItem.speed}`} />
      </div>
    </section>
  </React.Fragment>
);

export default TeslaCar;
