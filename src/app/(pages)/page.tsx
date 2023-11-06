"use client";
import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";

const Home = () => {
  const { authStatus } = useAuth();
  return <h1>Home</h1>;
};

export default Home;
