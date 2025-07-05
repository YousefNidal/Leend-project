
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/DashboardComponents/Navbar/Navbar'
import './Dashboard.css'



const Dashboard = () => {
  
  return (
    <>
    
<div className='flex'>
      <Navbar />
      <Outlet />
 
</div>
    

      
    
 

    
    
    </>
  )
}

export default Dashboard

