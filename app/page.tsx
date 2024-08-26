"use client"
import Hero from "@/components/commons/Hero";
import NextTopLoader from "nextjs-toploader";
import Navigation from "@/components/commons/Navigation";
import Articles from "@/components/commons/Articles";
import Projects from "@/components/commons/Projects";
import Footer from "@/components/commons/Footer";
import Featured from "@/components/commons/Featured";
import {Testimonial} from "@/components/commons/Testimonial"
import { TracingBeam } from "@/components/ui/tracing-Beam";
import  TextRevealDemo  from "@/components/commons/TextRevealDemo";
import { TextBase } from "@/components/commons/TextBase";
import { FeaturedCard } from "@/components/commons/FeaturedCard";
import Questions from "@/components/commons/Questions";


export default function Home() {
  return (
   <div className="">
    <TracingBeam>
    <NextTopLoader />
    <Navigation/>
    <Hero/>
    <Testimonial/>
    <TextRevealDemo/>
    <Articles/>
    <Projects/>
    {/* <GridMaps/> */}
    <TextBase/>
    <Featured/>
    <Questions/>
    {/* <FeaturedCard/> */}
    <Footer/>
    </TracingBeam>
   </div>
  );
}
