import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Dashboard = () => {
  const [counts, setCounts] = useState({
    CPU: null,
    GPU: null,
    Motherboard: null,
    PSU: null,
    Storage: null,
    RAM: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Execute all count queries in parallel using Promise.all
        const results = await Promise.all([
          // results is an array, order matters!
          supabase.from("CPU").select("*", { count: "exact", head: true }),
          supabase.from("GPU").select("*", { count: "exact", head: true }),
          supabase
            .from("Motherboard")
            .select("*", { count: "exact", head: true }),
          supabase.from("PSU").select("*", { count: "exact", head: true }),
          supabase.from("Storage").select("*", { count: "exact", head: true }),
        ]);

        // Update the counts state with the results
        setCounts({
          CPU: results[0].count,
          GPU: results[1].count,
          Motherboard: results[2].count,
          PSU: results[3].count,
          Storage: results[4].count,
          RAM: 0,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center max-w-[1240px] mx-auto px-4 py-10">
        {loading && <p>Loading counts...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full text-[#242424]">
            <div className="bg-gray-100 min-h-[150px] p-6 rounded-md shadow-md hover:bg-blue-400 transition duration-200">
              {counts.CPU} CPUs
            </div>
            <div className="bg-gray-100 min-h-[150px] p-6 rounded-md shadow-md hover:bg-green-400 transition duration-200">
              {counts.RAM} Memory Devices
            </div>
            <div className="bg-gray-100 min-h-[150px] p-6 rounded-md shadow-md hover:bg-red-400 transition duration-200">
              {counts.Motherboard} Motherboards
            </div>
            <div className="bg-gray-100 min-h-[150px] p-6 rounded-md shadow-md hover:bg-yellow-400 transition duration-200">
              {counts.PSU} Power Supplies
            </div>
            <div className="bg-gray-100 min-h-[150px] p-6 rounded-md shadow-md hover:bg-purple-400 transition duration-200">
              {counts.Storage} Storage Devices
            </div>
            <div className="bg-gray-100 min-h-[150px] p-6 rounded-md shadow-md hover:bg-pink-400 transition duration-200">
              {counts.GPU} GPUs
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
