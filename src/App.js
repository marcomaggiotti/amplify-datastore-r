import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import { Reservation, ReservationStatus } from "./models";

//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function onCreate() {
  DataStore.save(
      new Reservation({
          title: `New title ${Date.now()}`,
          date: `${Date.now()}`,
          status: ReservationStatus.ACTIVE,
          requests: `test`
      })
  );
}

function onDeleteAll() {
  DataStore.delete(Reservation, Predicates.ALL);
}

async function onQuery() {
  const reservations = await DataStore.query(Reservation, (c) => c.status.eq(`ACTIVE`));

  console.log(reservations);
}

function App() {
  useEffect(() => {
    const subscription = DataStore.observe(Reservation).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input type="button" value="NEW" onClick={onCreate} />
            <input type="button" value="DELETE ALL" onClick={onDeleteAll} />
            <input type="button" value="QUERY rating > 4" onClick={onQuery} />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;