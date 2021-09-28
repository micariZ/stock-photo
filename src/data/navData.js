import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "license",
    links: [
      { label: "pricing", icon: <FaCreditCard />, url: "/products" },
      { label: "plan", icon: <FaCreditCard />, url: "/products" },
      { label: "billing", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    page: "explore",
    links: [
      { label: "discover photos", icon: <FaBook />, url: "/products" },
      { label: "popular searches", icon: <FaBook />, url: "/products" },
      { label: "leaderboard", icon: <FaBook />, url: "/products" },
      { label: "free videos", icon: <FaBook />, url: "/products" },
      { label: "challenges", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
