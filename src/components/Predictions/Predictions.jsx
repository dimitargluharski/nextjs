"use client";

import { useState, useEffect } from "react";

const url = "https://v3.football.api-sports.io/predictions?fixture=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64fa06bb722e21b379fa99db2e95e3bf",
    "X-RapidAPI-Host": "v3.football.api-sports.io",
  },
};

const Predictions = (props) => {
  const [prediction, setPrediction] = useState({});

  console.log("predictions", prediction);

  useEffect(() => {
    fetch(url + props.fixture.id, options)
      .then((res) => res.json())
      .then((data) => setPrediction(data.response[0]?.predictions?.percent))
      .catch((err) => console.log(err));

    console.log("predictions", prediction);
  }, [props.fixture.id]);

  return (
    <section>
      {prediction === undefined ? (
        ""
      ) : (
        <>
          <i className="mx-2 inline-block font-light lowercase">Prediction: </i>
          <span>
            <span className="font-bold">1</span>({prediction.home})
          </span>
          <span className="mx-2 inline-block">
            <span className="font-bold">X</span>({prediction.draw})
          </span>
          <span>
            <span className="font-bold">2</span>({prediction.away})
          </span>
        </>
      )}
    </section>
  );
};

export default Predictions;
