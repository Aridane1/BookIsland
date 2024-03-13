import React from "react";
import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from './PrivateRoute'


import { LoginPage } from '../../Pages/User/LoginPage'
import { RegisterUserPage } from '../../Pages/User/RegisterUserPage'
import { UserPage } from '../../Pages/User/UserPage'
import { OverviewChatPage } from '../../Pages/User/Chat/OverviewChatPage'
import { SpecificChatPage } from '../../Pages/User/Chat/SpecificChatPage'
import { AboutPage } from '../../Pages/AboutPage'
import { FAQPage } from '../../Pages/FAQPage'
import { HomePage } from "../../Pages/HomePage"
import { LandingPage } from '../../Pages/LandingPage'
import { FallbackPage } from '../../Pages/FallbackPage'
import { SpecificPage } from '../../Pages/SpecificPage'


export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />


        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterUserPage />} />
        
        <Route path="/specific" element={<SpecificPage />} />
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/faq" element={<FAQPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
            <Route path="/Overview-chat" element={<OverviewChatPage />}></Route>
            <Route path="/specific-chat" element={<SpecificChatPage />}></Route>
        
        <Route path="*" element={<FallbackPage />}></Route>


    </Routes>
  );
};
