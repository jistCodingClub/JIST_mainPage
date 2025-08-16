"use client"
import Header from "@/components/Dashboard/Header"
import Hero from "./hero/Page"
import AboutPage from "@/components/Dashboard/AboutSection"
import { AnimatedTestimonialsDemo } from "@/components/ui/AnimatedTestimonialsDemo"
import ProjectsFilters from "@/components/Dashboard/ProjectsFilters"
import Events from "@/components/Dashboard/Events"
import JoinNow from "@/components/Authentication/JoinNow"
import Footer from "@/components/Dashboard/Footer"


const page = () => {

  return (
    <div className="">
 
      <Header/>
      <Hero/>
      <AboutPage/>
     
      <ProjectsFilters/>
      <AnimatedTestimonialsDemo/>
      <Events/>
      <JoinNow/>
      <Footer/>
    </div>
  )
}

export default page