"use client";

import Panel from "@/components/Panel/Panel";

const Details = (props) => {
  console.log(props);
  console.log("to fetch data for current object use", props.params.id);
  return (
    <div className="flex w-max m-auto">
      <section className="p-2 bg-red-500 w-max">
        <Panel title="Live Section" />

        <section className="flex">
          <Panel title="Home Lineup" />
          <Panel title="Away Lineup" />
        </section>
      </section>

      <section className="bg-blue-500">
        <Panel title="Standings" />
        <section className="flex">
          <Panel title="Ball position" />
          <Panel title="Statistics" />
        </section>
        <Panel title="Momentum" />
      </section>
    </div>
  );
};

export default Details;
