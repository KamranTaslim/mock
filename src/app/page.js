
"use client";
import { useState, useEffect } from "react";
import { AIQuizGenerator } from "@/components/AIQuizGenerator";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TestCategories } from "@/components/TestCategories";
import { ExamCategory } from "@/components/ExamCategory";

export default function Home() {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Get initial hash
    const hash = window.location.hash.substring(1);
    setCurrentHash(hash);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      setCurrentHash(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // If there's a hash, show ExamCategory page
  if (currentHash) {
    return (
      <>
        <Header/>
        <ExamCategory categoryKey={currentHash} />
      </>
    );
  }

  // Default home page
  return (
    <>
     <Header/>
     <Hero/>
     <AIQuizGenerator/>
     <TestCategories/>
     <Features/>
    </>
  );
}
