import Link from "next/link";

import Predictions from "../Predictions/Predictions";

const Row = (props) => {
  return (
    <Link href={`/live-score/${props.fixture.id}`}>
      <div className="flex m-3 p-3 gap-4 items-center rounded-md bg-white">
        <div className="flex-none flex items-center justify-center">
          {props.fixture.status.elapsed}'
        </div>
        <div>
          {props.goals.home} - {props.goals.away}
        </div>
        <div className="flex-1">
          {props.teams.home.name} - {props.teams.away.name}
        </div>
        <Predictions {...props} />
      </div>
    </Link>
  );
};

export default Row;
