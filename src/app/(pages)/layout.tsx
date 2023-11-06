"use client";
import appwriteService from "@/appwrite/config";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import { AuthProvider } from "@/context/authContext";
import React, { useEffect, useState } from "react";

const ProtectedLayout = ({children }:React.ReactNote) =>{
    const [authStatus,setAuthStatus] = useState(false);
    const [loader,setLoader] = useState(true);

    useEffect(() =>{
        appwriteService.isLoggedIn()
        .then(setAuthStatus)
        .finally(() => setLoader(false));
    }, []);

    return <AuthProvider
}
