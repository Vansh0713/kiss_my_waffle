import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          Welcome to Kiss My Waffle
        </h1>
      </div>
    </>
  );
}