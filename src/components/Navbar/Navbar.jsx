import Link from "next/link";

export default function Navbar() {
  const isActive = true;
  const inactive = "hover:bg-blue-700";
  const active = "bg-blue";

  return (
    <nav className="flex flex-col h-screen bg-blue-500 text-white">
      <div className="flex items-center justify-center py-4">
        <Link href="/">
          <div className="text-xl font-bold">Soccer App</div>
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <Link href="/" className={`px-4 py-2 ${isActive ? active : inactive}`}>
          Home
        </Link>
        <Link href="live-score" className="px-4 py-2">
          Live
        </Link>
        <Link href="leagues" className="px-4 py-2">
          Leagues
        </Link>
        <Link href="/teams" className="px-4 py-2">
          Teams
        </Link>
        <Link href="/players" className="px-4 py-2">
          Players
        </Link>
        <Link href="/news" className="px-4 py-2">
          News
        </Link>
      </div>
    </nav>
  );
}
