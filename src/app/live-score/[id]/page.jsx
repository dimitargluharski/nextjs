"use client";

import Panel from "@/components/Panel/Panel";

const Details = (props) => {
  console.log(props);
  console.log("to fetch data for current object use", props.params.id);
  return (
    <div>
      <h1>Details</h1>
      <Panel />
      <Panel />
      <Panel />
      <Panel />
    </div>
  );
};

export default Details;