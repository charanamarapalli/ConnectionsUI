import React, {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import { getCurrentStatus } from '../../service/dashboardService';
import './Dashboardcard.css'
import { setAuthToken } from '../../service/apiClient';


export default function Card(props) {

  const navigate = useNavigate();
  const handleRedirection = ()=>{
    navigate(props.redirectionUrl);
  }

  const [currentStatus, setCurrentStatus] = useState("");

  const fetchStatus = async () => {
    try {
      const status = await getCurrentStatus();
      setCurrentStatus(status);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <>
      <div className="dashboard-card bg-color">
            <h2 className="text-white">{props.title}</h2>
            <hr className="line-break"/>
            <div className="know-more">
                <div className="description text-white">
                    <p>{props.description}</p> 
                    <p>{"Your Current Status: "+ currentStatus}</p>      
                </div>
                 <div className="about-picture">
                    <img className="picture" src={"/assets/images/IMG_5844.JPG"} alt="Broken image"/>
                 </div>
            </div>
            <button className="btn-submit btn-width-100 label" onClick={handleRedirection}>Click to Start</button>
        </div>
    </>
  )
}
