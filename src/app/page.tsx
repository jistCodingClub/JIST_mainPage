"use client"
import Header from "@/components/Dashboard/Header"
import Hero from "./hero/Page"
import AboutPage from "@/components/Dashboard/AboutSection"
import { AnimatedTestimonialsDemo } from "@/components/ui/AnimatedTestimonialsDemo"
import { ExpandableCardDemo } from "@/components/ui/ExpandableCardDemo"
import ProjectsFilters from "@/components/Dashboard/ProjectsFilters"



const page = () => {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <AboutPage/>
      {/* <ExpandableCardDemo/> */}
      <ProjectsFilters/>
      <AnimatedTestimonialsDemo/>
    </div>
  )
}

export default page