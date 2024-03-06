import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'

import { LoginPage } from '../../../Pages/User/LoginPage'
import { RegisterUserPage } from '../../../Pages/User/RegisterUserPage'
import { UserPage } from '../../../Pages/user/UserPage'
import { OverviewChatPage } from '../../../Pages/OverviewChatPage'
import { SpecificChatPage } from '../../../Pages/SpecificChatPage'
import { AboutPage } from '../../../Pages/AboutPage'
import { FAQPage } from '../../../Pages/FAQPage'
import { HomePage } from "../../../Pages/HomePage"
import { LandingPage } from '../../../Pages/LandingPage'

export const AppRouter = () => {
   return (
    <Routes>
        <Route index element ={<LandingPage />} />
    
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterUserPage />} />

        <PrivateRoute path="/home" element={<HomePage />}></PrivateRoute>
        <PrivateRoute path="/about" element={<AboutPage />}></PrivateRoute>
        <PrivateRoute path="/faq" element={<FAQPage />}></PrivateRoute>
        <PrivateRoute path="/user" element={<UserPage />}></PrivateRoute>
            <PrivateRoute path="/Overview-chat" element={<OverviewChatPage />}></PrivateRoute>
            <PrivateRoute path="/specific-chat" element={<SpecificChatPage />}></PrivateRoute>
        
        <PrivateRoute path="*" element={<FallbackPage />}></PrivateRoute>

        
    </Routes>

  ) 
}
