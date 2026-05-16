
import Layout from '../components/Layout/Layout'
import StatCard from '../components/cards/StatCard'
import GuardTable from '../components/tables/GuardTable'
import '../styles/dashboard.css'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const navigate = useNavigate();

  const [historyCount, setHistoryCount] = useState(0);

  // Protect dashboard
  useEffect(() => {

    const auth = localStorage.getItem("auth");

    // If not logged in
    if (!auth) {
      navigate("/", { replace: true });
      return;
    }

  }, [navigate]);

 
 
  
return (
    <Layout>
      <div className='dashboard'>
        <div className='stats-grid'>
          <StatCard title='Total Guards' value='120' />
          <StatCard title='Active Sites' value='65' />
          <StatCard title='Incidents' value='87' />
          <StatCard title='Attendance' value='72.5%' />
        </div>

        <div className='dashboard-section'>
          <h2>Security Guards</h2>
          <GuardTable />
        </div>
      </div>
    </Layout>
  )
}



