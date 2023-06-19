import React from "react";
// import { format } from "date-fns";

import UserPanel from "../UserPanel/UserPanel";

const Header = () => {
  let today = new Date();

  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const username = "John Doe"; // Example: User's username or email

  today = mm + "/" + dd + "/" + yyyy;

  return (
    <section className="flex justify-between items-center bg-gray-100 py-4 px-8">
      <div className="bg-green-500 text-white py-2 px-4 rounded-lg mr-4">
        <div className="text-lg font-semibold">Welcome, Anastacia!</div>
      </div>

      <UserPanel />
    </section>
  );
};

export default Header;
