'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import illus from "@/components/illus.png"
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className="display: flex justify-between mx-20 gap-32 w-7/10">
          <div className="py-10">
            <h1 className="text-4xl text-[#2977f5] mb-5">Project ADA</h1>
            <p className="text-[#595959] text-justify">Join us for an extraordinary event that celebrates and empowers girls in the world of technology. Exun Clan proudly presents "Project ADA: Girls in Tech 2023," an initiative aimed at learning and innovation among girls, in the tech industry. There are no prerequisites required. Dive into interactive workshops for Python (CompetitiveProgramming) where you can learn practical skills and engage in problem-solving. These sessions will empower you with new tools and knowledge.</p><br />
            <p className="text-[#595959] text-justify">Unleash your creativity and problem-solving skills in our exciting contest. Participate and develop innovative solutions to real-world problems. These problems will be based on what was taught in the workshops. Note that the event is open exclusively for girls and non binary students of the Delhi NCR region</p><br></br>
            <p className="text-[#595959] text-justify">Date: 30th October (Monday), 1st November (Wednesday) and 3rd November (Friday) </p>
            <p className="text-[#595959] text-justify">Time: [Time]</p>
          </div>
          <Image 
            src={illus}
            alt="Project ADA illus"
            width={300}
            height={400}
            className="py-10"
          />
        </div>
        <p className="text-[#595959] px-20 mb-10 text-justify">Step into a world of possibilities, knowledge, and empowerment at Project ADA: Girls in Tech 2023. Together, we're reshaping the future of technology and paving the way for a more equitable industry.</p>
        <Footer/>
    </>
  )
}
