"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-between mb-10 mx-20 sm:gap-32 w-7/10 items-center">
        <div className="sm:text-left text-center">
          <h1 className="text-5xl font-bold text-[#2977f5] mb-5">
            Project ADA
          </h1>
          <p className="text-[#595959]">
            Join us for an extraordinary event that celebrates and empowers
            girls in the world of technology. Exun Clan proudly presents{" "}
            <span className="font-bold">Project ADA: Girls in Tech 2023</span>{" "}
            an initiative aimed at learning and innovation among girls, in the
            tech industry. There are no prerequisites required. Dive into
            interactive workshops for Python where you can learn practical
            skills and engage in problem-solving. These sessions will empower
            you with new tools and knowledge.
            <br />
            <br />
            Unleash your creativity and problem-solving skills in our exciting
            contest. Participate and develop innovative solutions to real-world
            problems. These problems will be based on what was taught in the
            workshops. Note that the event is open exclusively for girls and non
            binary students of the Delhi NCR region
          </p>
          <br />
          <a
            href="/resources"
            className="bg-[#2977f5] p-3 rounded-lg text-white"
          >
            Resources
          </a>
        </div>
        <Image
          src="/illus.png"
          alt="Project ADA illus"
          width={500}
          height={500}
          className="py-10"
        />
      </div>
    </>
  );
}
