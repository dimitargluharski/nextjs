"use client";

import { useState, useEffect } from "react";
import Row from "@/components/Row/Row";
import SearchField from "@/components/Search/SearchField";

const url = "https://v3.football.api-sports.io/fixtures?live=all";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64fa06bb722e21b379fa99db2e95e3bf",
    "X-RapidAPI-Host": "v3.football.api-sports.io",
  },
};

const MatchesList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.response);
      })
      .catch((err) => console.log(err));

    // cleanup
    return () => {};
  }, []);

  return (
    <div>
      <SearchField />
      {matches.map((match) => {
        return <Row {...match} key={match.fixture.id} />;
      })}
    </div>
  );
};

export default MatchesList;
