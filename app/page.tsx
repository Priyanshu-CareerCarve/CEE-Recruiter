import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Features } from "@/components/sections/Features/index";
import { JobListings } from "@/components/sections/JobListings";
import { WhyCEE } from "@/components/sections/WhyCEE";
// import { Internship } from "@/components/sections/Internships";
import { CTAForm } from "@/components/sections/CTAForm";
import Clients from "@/components/sections/Clients";
import CardContainer from "@/components/sections/CardContainer";
import PartnerBrands from "@/components/sections/PartnerBrands";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Clients />
      <Process />
      {/* <Features /> */}
      <JobListings />
      <WhyCEE />
      <PartnerBrands />
      <CardContainer />
      <CTAForm />
    </div>
  );
}
