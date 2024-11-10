import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <h1 className="text-3xl lg:text-4xl font-bold text-white">
        Welcome to MyLinkShare!
      </h1>
      <p className="text-white">
        Connect and share your favorite links with friends and family.
      </p>

      <div className="flex flex-row space-x-4 mt-4">
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
