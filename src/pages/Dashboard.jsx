import Navbar from "../components/Navbar";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
        <p className="text-lg">Dashboard under development 😎 🏗️</p>
      </div>
    </>
  );
};

export default Dashboard;
