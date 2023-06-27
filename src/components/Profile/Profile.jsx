import Link from "next/link";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Link href="/profile">
      {user ? `Welcome, ${user}!` : "Welcome, guest!"}
    </Link>
  );
};

export default Profile;
