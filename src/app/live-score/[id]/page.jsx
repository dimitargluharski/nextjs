"use client";

import Panel from "@/components/Panel/Panel";

const Details = (props) => {
  console.log(props);
  console.log("to fetch data for current object use", props.params.id);
  return (
    <div>
      <Panel title="Preview Match" />
      <Panel title="Next Match">heloooo</Panel>
    </div>
  );
};

export default Details;
