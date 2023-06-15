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
  const [filteredMatches, setFilteredMatches] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.response);
      })
      .catch((err) => console.log(err));

    // Cleanup
    return () => {};
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = matches.filter(
      (match) =>
        match.teams.home.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        match.teams.away.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMatches(filtered);
  };

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      {(filteredMatches.length > 0 ? filteredMatches : matches).map((match) => (
        <Row {...match} key={match.fixture.id} />
      ))}
    </div>
  );
};

export default MatchesList;
