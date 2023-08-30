"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { toPng } from "html-to-image";

const teams = [
  //1. grup
  { name: "Manchester City", logo: "city.png" },
  { name: "Sevilla", logo: "sevilla.png" },
  { name: "Barcelona", logo: "barcelona.png" },
  { name: "Napoli", logo: "napoli.png" },
  //2. grup
  { name: "Bayern Münih", logo: "bayern.png" },
  { name: "PSG", logo: "psg.png" },
  { name: "Benfica", logo: "benfica.png" },
  { name: "Feyenoord", logo: "feyenoord.png" },
  //3. grup
  { name: "Real Madrid", logo: "real.png" },
  { name: "Manchester United", logo: "united.png" },
  { name: "Inter", logo: "inter.png" },
  { name: "Dortmund", logo: "dortmund.png" },
  //4. grup
  { name: "Atletico Madrid", logo: "atletico.png" },
  { name: "Leipzig", logo: "leipzig.png" },
  { name: "Porto", logo: "porto.png" },
  { name: "Arsenal", logo: "arsenal.png" },
  //5. grup
  { name: "Shakhtar Donetsk", logo: "donetsk.png" },
  { name: "Salzburg", logo: "salzburg.png" },
  { name: "Rangers", logo: "rangers.png" },
  { name: "Milan", logo: "milan.png" },
  //6. grup
  { name: "Braga", logo: "braga.png" },
  { name: "Lazio", logo: "lazio.png" },
  { name: "Kızılyıldız", logo: "kızılyıldız.png" },
  { name: "Kopenhag", logo: "kopenhag.png" },
  //7.grup
  { name: "Galatasaray", logo: "galatasaray.png" },
  { name: "Real Sociedad", logo: "sociedad.png" },
  { name: "Young Boys", logo: "young.png" },
  { name: "Celtic", logo: "celtic.png" },
  //8. grup
  { name: "Newcastle United", logo: "newcastle.png" },
  { name: "Union Berlin", logo: "berlin.png" },
  { name: "AEK", logo: "aek.png" },
  { name: "Lens", logo: "lens.png" },
];

const chunkArray = (array, chunkSize) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Index = () => {
  const [shuffledTeams, setShuffledTeams] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const shuffled = shuffleArray(teams);
    setShuffledTeams(shuffled);
  }, []);

  const groupedTeams = chunkArray(shuffledTeams, 4);
  const rows = chunkArray(groupedTeams, 4);

  const groupLetters = "ABCDEFGH";

  const handleTwitterShare = async () => {
    try {
      const contentElement = contentRef.current;
      console.log(contentElement);

      const dataUrl = await toPng(contentElement);
      console.log(dataUrl);

      const tweetContent = encodeURIComponent(
        "Check out this football team grouping!"
      );
      const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetContent}&url=${dataUrl}`;

      window.open(twitterUrl, "_blank");
    } catch (error) {
      console.error("Error generating or sharing image:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        margin: "4rem",
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {row.map((group, groupIndex) => (
              <div
                key={groupIndex}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 1rem",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  minWidth: "300px", // Eşit ölçüler
                }}
              >
                <h2
                  className="text-xl underline"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Grup {groupLetters[groupIndex + rowIndex * 4]}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {group.map((team, teamIndex) => (
                    <div
                      key={teamIndex}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "0.5rem 0",
                      }}
                    >
                      <img
                        src={`logo/${team.logo}`}
                        alt={`${team.name} Logo`}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "0.5rem",
                        }}
                      />
                      <p>{team.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-row m-2 gap-8">
          <Link href="/">
            <button className="flex flex-row gap-2 justify-center items-center bg-white text-blue-500 border-none px-4 py-3 rounded-md cursor-pointer mt-6 text-lg font-semibold ">
              <svg
                class="h-8 w-8 text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="11 7 6 12 11 17" />{" "}
                <polyline points="17 7 12 12 17 17" />
              </svg>
              Back to Home
            </button>
          </Link>

          <button
            onClick={handleTwitterShare}
            className="flex flex-row-reverse gap-2 justify-center items-center bg-white text-blue-500 border-none px-4 py-3 rounded-md cursor-pointer mt-6 text-lg font-semibold "
          >
            <svg
              class="h-8 w-8 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
            Share to Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
