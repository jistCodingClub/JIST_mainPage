"use client"

import Hero from "./hero/Page"
import AboutPage from "@/components/Dashboard/AboutSection"
import ProjectsFilters from "@/components/Dashboard/ProjectsFilters"
import Events from "@/components/Dashboard/Events"
import Footer from "@/components/Dashboard/Footer"
import TeamSection from "@/components/Dashboard/TeamSection"
import Header from "@/components/Dashboard/Header"



const page = () => {

  return (
    <div className="">

      <Header />
      <Hero />
      <AboutPage />
      <ProjectsFilters />
      <TeamSection />
      <Events />
      <Footer />
    </div>
  )
}

export default page