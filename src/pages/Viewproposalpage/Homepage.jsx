import React from "react";
import Viewproposalbuttons from "../../components/Viewproposalbuttons/Viewproposalbuttons";
import Textcard from "../../components/Textcard/Textcard";
import Background from "./Background";
const Homepage = () => {
  return (
    <>
      <div className="view-proposal-container">
        <h1>
            <Textcard description="Shall we Start?"/>
        </h1>
        <Textcard description="Hi ra chitti talli, ee 41 days deeksha lo nen nee gurunche alochistu, naa future ki nen imrpove cheskuntu chesina ee project nike dedicate chestuna. Almost 2-3 months paine kastapaddanu and inko 3 months kastapadali , but to make dec 14 special.. ayyappa deeksha lo ninnu avoid chestu chadvtuna ani cheppi chesindi idey..Naku after deeskha ninnu kalisina roju memorable cheyli ani ala vundedi. room tisukoni decorate cheyinchi cake cut cheyiste nuv happy avtva, but nen andulo em chesanu, money okate spend chesa. But nen mee gurunchi enta alochistunano teliyali antey..idey proof..naa hardwork ni, nee paina prema ni, kalipi chesanu idi..Hope you will enjoy it.. " />
        <Viewproposalbuttons prevUrl="" nextUrl="/view-proposal/first-meet" />
      </div>
    </>
  );
};

export default Homepage;
