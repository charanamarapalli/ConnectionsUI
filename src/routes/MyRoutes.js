import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import CreateProposalLayout from "../pages/CreateProposalLayout";
import Viewproposalpagelayout from "../pages/Viewproposalpagelayout/Viewproposalpagelayout";
import Proposaleditor from "../pages/Createproposalpage/Proposaleditor";
import Gifteditor from "../pages/Createproposalpage/Gifteditor";
import Firstmeeteditor from "../pages/Createproposalpage/Firstmeeteditor";
import Uploadimageeditor from "../pages/Createproposalpage/Uploadimageseditor";
import Accepteditor from "../pages/Createproposalpage/Accepteditor";
import Proposalpage from "../pages/Viewproposalpage/Proposalpage";
import Firstmeetpage from "../pages/Viewproposalpage/Firstmeetpage";
import Ourgallerypage from "../pages/Viewproposalpage/Ourgallerypage";
import Giftpage from "../pages/Viewproposalpage/Giftpage";
import Dedicateasongpage from "../pages/Viewproposalpage/Dedicateasongpage";
import Homepage from "../pages/Viewproposalpage/Homepage";
import Acceptpage from "../pages/Viewproposalpage/Acceptpage";

export default function MyRoutes() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/create-proposal" element={<CreateProposalLayout />}>
              <Route path="proposal" element={<Proposaleditor />} />
              <Route path="first-meet" element={<Firstmeeteditor />} />
              <Route path="upload-images" element={<Uploadimageeditor />} />
              <Route path="gift" element={<Gifteditor />} />
              <Route path="accept" element={<Accepteditor />} />
              <Route path="dedicate-song" element={<Accepteditor />} />
            </Route>

            <Route path="/view-proposal" element={<Viewproposalpagelayout />}>
              <Route path="home" element={<Homepage />} />
              <Route path="proposal" element={<Proposalpage />} />
              <Route path="first-meet" element={<Firstmeetpage />} />
              <Route path="our-gallery" element={<Ourgallerypage />} />
              <Route path="gift" element={<Giftpage />} />
              <Route path="accept" element={<Acceptpage />} />
              <Route path="dedicate-song" element={<Dedicateasongpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

// title=""
// desc="From Proposal section"
// btnName="Get Started"
// prevBtnHide={true}
// nextBtnhide={false}
// nextBtnUrl="/my-proposal/our-first-meet"
