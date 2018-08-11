import React from 'react';

const TeslaStates = props => (
  <React.Fragment>
    <section className="teslaStates">
      <div className="teslaState">
        <div className="teslaState__icon teslaState__icon--60" />
        <p>{props.rangeList[0]['60']}</p>
      </div>
      <div className="teslaState">
        <div className="teslaState__icon teslaState__icon--60d" />
        <p>{props.rangeList[1]['60D']}</p>
      </div>
      <div className="teslaState">
        <div className="teslaState__icon teslaState__icon--75" />
        <p>{props.rangeList[2]['75']}</p>
      </div>
      <div className="teslaState">
        <div className="teslaState__icon teslaState__icon--75d" />
        <p>{props.rangeList[3]['75D']}</p>
      </div>
      <div className="teslaState">
        <div className="teslaState__icon teslaState__icon--90d" />
        <p>{props.rangeList[4]['90D']}</p>
      </div>
      <div className="teslaState">
        <div className="teslaState__icon teslaState__icon--p100d" />
        <p>{props.rangeList[5]['P100D']}</p>
      </div>
    </section>
  </React.Fragment>
);

export default TeslaStates;
