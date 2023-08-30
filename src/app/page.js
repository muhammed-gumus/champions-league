import React from "react";
import Link from "next/link";

const teams = [
  //1. torba
  { name: "Manchester City", logo: "city.png" },
  { name: "Sevilla", logo: "sevilla.png" },
  { name: "Barcelona", logo: "barcelona.png" },
  { name: "Napoli", logo: "napoli.png" },
  { name: "Bayern Münih", logo: "bayern.png" },
  { name: "PSG", logo: "psg.png" },
  { name: "Benfica", logo: "benfica.png" },
  { name: "Feyenoord", logo: "feyenoord.png" },

  //2. torba
  { name: "Real Madrid", logo: "real.png" },
  { name: "Manchester United", logo: "united.png" },
  { name: "Inter", logo: "inter.png" },
  { name: "Dortmund", logo: "dortmund.png" },
  { name: "Atletico Madrid", logo: "atletico.png" },
  { name: "Leipzig", logo: "leipzig.png" },
  { name: "Porto", logo: "porto.png" },
  { name: "Arsenal", logo: "arsenal.png" },

  //3. torba
  { name: "Shakhtar Donetsk", logo: "donetsk.png" },
  { name: "Salzburg", logo: "salzburg.png" },
  { name: "Rangers", logo: "rangers.png" },
  { name: "Milan", logo: "milan.png" },
  { name: "Braga", logo: "braga.png" },
  { name: "Lazio", logo: "lazio.png" },
  { name: "Kızılyıldız", logo: "kızılyıldız.png" },
  { name: "Kopenhag", logo: "kopenhag.png" },

  //4.torba
  { name: "Galatasaray", logo: "galatasaray.png" },
  { name: "Real Sociedad", logo: "sociedad.png" },
  { name: "Young Boys", logo: "young.png" },
  { name: "Celtic", logo: "celtic.png" },
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

const Index = () => {
  const groupedTeams = chunkArray(teams, 8);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {groupedTeams.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-center items-center flex-col"
            style={{ marginBottom: "1.5rem", textAlign: "center" }}
          >
            <h2 className="text-2xl">{groupIndex + 1}. Torba</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              {group.map((team, teamIndex) => (
                <div
                  key={teamIndex}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0 1.5rem",
                  }}
                >
                  <img
                    src={`/logo/${team.logo}`}
                    alt={`${team.name} Logo`}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Link href="/groups">
          <button className="bg-white text-blue-500 border-none px-6 py-3 rounded-md cursor-pointer mt-6 text-lg font-semibold transition duration-300 hover:bg-blue-500 hover:text-white">
            Go to Groups
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
