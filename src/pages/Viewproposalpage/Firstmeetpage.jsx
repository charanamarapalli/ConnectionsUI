import React from "react";
import Viewproposalbuttons from "../../components/Viewproposalbuttons/Viewproposalbuttons";
import Textcard from "../../components/Textcard/Textcard";
import '../Viewproposalpagelayout/Viewproposalpagelayout.css'
const Firstmeetpage = () => {
  return (
    <>
      <div className="view-proposal-container">
        <h1><Textcard description = "Manam Kalisina Modati Roju"/></h1>
        <Textcard description="Trishamma, gurtunda..
          aaroju nuv nannu vachi excuse me phonepe chestanu cash ivvamani adigav. Aa taruvata kasepu ki front lo edo godava adi chusi light ga navvukunam. Aa taruvata, naa trishamma daham veste water ichanu.. Nemmadiga ala intiki velli hit and trail chesa bf
           vunnada leda ani, naa adrustam bagunbdi andulo kuda succeed aipoyanu..Ala kalisina manam.. 
           eeroju ila..eno memories tho..."/>
        <Viewproposalbuttons prevUrl="/view-proposal/home" nextUrl="/view-proposal/our-gallery"/>
      </div>
    </>
  );
};

export default Firstmeetpage;
