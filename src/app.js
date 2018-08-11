import React from 'react';

import Header from './components/Header';
import jsonResponse from './components/jsonResponse';
import RangePerCharge from './components/RangePerCharge';

const App = () => (
  <React.Fragment>
    <Header />
    <main className="main-content">
      <div className="container">
        <h1>Range Per Charge</h1>

        <RangePerCharge list={jsonResponse} />

        <section className="teslaNotice">
          <p>
            The actual amount of range that you experience will vary based on
            your particular use conditions. See how particular use conditions
            may affect your range in our simulation model.
          </p>
          <p>
            Vehicle range may vary depending on the vehicle configuration,
            battery age and condition, driving style and operating,
            environmental and climate conditions.
          </p>
        </section>
      </div>
    </main>
  </React.Fragment>
);

export default App;
