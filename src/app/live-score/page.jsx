import Row from "@/components/Row/Row";

async function getData() {
  const response = await fetch(
    "https://v3.football.api-sports.io/fixtures?live=all",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64fa06bb722e21b379fa99db2e95e3bf",
        "X-RapidAPI-Host": "v3.football.api-sports.io",
      },
      next: {
        revalidate: 300, // 5min
      },
    }
  );

  const data = await response.json();

  return data.response;
}

const MatchList = async () => {
  const data = await getData();

  return (
    <>
      {data.map((match) => (
        <Row key={match.fixture.id} {...match} />
      ))}
    </>
  );
};

export default MatchList;
