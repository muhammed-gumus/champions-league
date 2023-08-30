"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { toPng } from "html-to-image";

const teams = [
  //1. grup
  { name: "Manchester City", logo: "city.png", nation: "England" },
  { name: "Sevilla", logo: "sevilla.png", nation: "Spain" },
  { name: "Barcelona", logo: "barcelona.png", nation: "Spain" },
  { name: "Napoli", logo: "napoli.png", nation: "Italy" },
  //2. grup
  { name: "Bayern Münih", logo: "bayern.png", nation: "Germany" },
  { name: "PSG", logo: "psg.png", nation: "France" },
  { name: "Benfica", logo: "benfica.png", nation: "Portugal" },
  { name: "Feyenoord", logo: "feyenoord.png", nation: "Netherland" },
  //3. grup
  { name: "Real Madrid", logo: "real.png", nation: "Spain" },
  { name: "Manchester United", logo: "united.png", nation: "England" },
  { name: "Inter", logo: "inter.png", nation: "Italy" },
  { name: "Dortmund", logo: "dortmund.png", nation: "Germany" },
  //4. grup
  { name: "Atletico Madrid", logo: "atletico.png", nation: "Spain" },
  { name: "Leipzig", logo: "leipzig.png", nation: "Germany" },
  { name: "Porto", logo: "porto.png", nation: "Portugal" },
  { name: "Arsenal", logo: "arsenal.png", nation: "England" },
  //5. grup
  { name: "Shakhtar Donetsk", logo: "donetsk.png", nation: "Ukraine" },
  { name: "Salzburg", logo: "salzburg.png", nation: "Austria" },
  { name: "Rangers", logo: "rangers.png", nation: "Scotland" },
  { name: "Milan", logo: "milan.png", nation: "Italy" },
  //6. grup
  { name: "Braga", logo: "braga.png", nation: "Portugal" },
  { name: "Lazio", logo: "lazio.png", nation: "Italy" },
  { name: "Kızılyıldız", logo: "kızılyıldız.png", nation: "Serbia" },
  { name: "Kopenhag", logo: "kopenhag.png", nation: "Denmark" },
  //7.grup
  { name: "Galatasaray", logo: "galatasaray.png", nation: "Turkey" },
  { name: "Real Sociedad", logo: "sociedad.png", nation: "Spain" },
  { name: "Young Boys", logo: "young.png", nation: "Switzerland" },
  { name: "Celtic", logo: "celtic.png", nation: "Scotland" },
  //8. grup
  { name: "Newcastle United", logo: "newcastle.png", nation: "England" },
  { name: "Union Berlin", logo: "berlin.png", nation: "Germany" },
  { name: "AEK", logo: "aek.png", nation: "Greece" },
  { name: "Lens", logo: "lens.png", nation: "France" },
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

  // Check for teams with the same nation and swap if necessary
  for (let i = 1; i < shuffledArray.length; i++) {
    if (shuffledArray[i].nation === shuffledArray[i - 1].nation) {
      [shuffledArray[i], shuffledArray[i - 1]] = [shuffledArray[i - 1], shuffledArray[i]];
    }
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

  const handleDownloadImage = async () => {
    try {
      const contentElement = contentRef.current;

      // Generate an image from the content element using toPng function
      const dataUrl = await toPng(contentElement);

      // Create an anchor element with download attributes
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "team_grouping.png";

      // Trigger a click event on the anchor element
      a.click();

      // Clean up by removing the anchor element
      a.remove();
    } catch (error) {
      console.error("Error generating or downloading image:", error);
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
                      <p>{team.nation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-col items-center justify-center gap-4">
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
                Back to Home Page
              </button>
            </Link>

            <button
              onClick={handleDownloadImage}
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
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
                <polyline points="7 11 12 16 17 11" />{" "}
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
              Download the Draw
            </button>
          </div>
          <p>Refresh the page to change the matches!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
