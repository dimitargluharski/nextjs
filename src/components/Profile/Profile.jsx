import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  let today = new Date();

  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  return (
    <Link
      href="/profile"
      className="flex items-center rounded-md p-3 bg-slate-200"
    >
      <div>
        <Image
          width={35}
          height={35}
          className="rounded-md mr-2"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
          alt="profile image"
        />
      </div>

      <div>
        <p>Anastacia Maisy</p>
        <p>{today}</p>
      </div>
    </Link>
  );
};

export default Profile;
