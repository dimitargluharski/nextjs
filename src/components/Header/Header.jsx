import React from "react";
// import { format } from "date-fns";

const Header = () => {
  const username = "John Doe"; // Example: User's username or email
  const lastLoggedIn = new Date(); // Example: User's last logged-in date
  const currentDate = new Date(); // Example: Current date

  return (
    <section className="flex justify-between items-center bg-gray-100 py-4 px-8">
      <div className="bg-red-500 text-white py-2 px-4 rounded-lg mr-4">
        <div className="text-lg font-semibold">Hello, {username}</div>
        <div>Last logged in: lastLoggedIn, "MMM dd, yyyy"</div>
      </div>
      <div className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        <div className="text-lg font-semibold">Current Date</div>
        <div>"MMM dd, yyyy"</div>
      </div>
    </section>
  );
};

export default Header;
