"use client";
import { useState } from "react";
import data from "@/data/resources.json";

const Resources = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (data) => data.title.toLowerCase().includes(search.toLowerCase()) == true,
  );

  return (
    <>
      <h1 className="text-4xl text-[#2977f5] mb-5 mt-10 mx-20 text-center font-bold">
        Resources
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="rounded-lg bg-[#e0ecff] p-2 outline-none w-96"
          placeholder="Search"
        />
      </div>
      <div className="gap-8 flex justify-evenly flex-wrap mx-20 my-10">
        {filteredData.map((card, i) => (
          <div key={i} className="text-[#595959] drop-shadow-2xl sm:flex">
            {card.video && (
              <video
                className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-96"
                controls
                poster="/thumbnail.png"
              >
                <source src={card.video} type="video/mp4" />
              </video>
            )}
            <div
              className={
                card.video
                  ? "bg-white p-5 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none flex justify-center flex-col gap-4 text-center w-96"
                  : "bg-white p-5 rounded-lg flex justify-center flex-col gap-4 text-center w-96"
              }
            >
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p>{card.description}</p>
              <a
                href={card.link}
                className="bg-[#2977f5] text-white p-2 rounded-lg"
                target="_blank"
              >
                Presentation
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Resources;
