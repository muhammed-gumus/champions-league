import React from "react";
import Link from "next/link";

const teams = [
  //1. torba
  { name: "Manchester City", logo: "city.png", nation: "England" },
  { name: "Sevilla", logo: "sevilla.png", nation: "Spain" },
  { name: "Barcelona", logo: "barcelona.png", nation: "Spain" },
  { name: "Napoli", logo: "napoli.png", nation: "Italy" },
  { name: "Bayern Münih", logo: "bayern.png", nation: "Germany" },
  { name: "PSG", logo: "psg.png", nation: "France" },
  { name: "Benfica", logo: "benfica.png", nation: "Portugal" },
  { name: "Feyenoord", logo: "feyenoord.png", nation: "Netherland" },

  //2. torba
  { name: "Real Madrid", logo: "real.png", nation: "Spain" },
  { name: "Manchester United", logo: "united.png", nation: "England" },
  { name: "Inter", logo: "inter.png", nation: "Italy" },
  { name: "Dortmund", logo: "dortmund.png", nation: "Germany" },
  { name: "Atletico Madrid", logo: "atletico.png", nation: "Spain" },
  { name: "Leipzig", logo: "leipzig.png", nation: "Germany" },
  { name: "Porto", logo: "porto.png", nation: "Portugal" },
  { name: "Arsenal", logo: "arsenal.png", nation: "England" },

  //3. torba
  { name: "Shakhtar Donetsk", logo: "donetsk.png", nation: "Ukraine" },
  { name: "Salzburg", logo: "salzburg.png", nation: "Austria" },
  { name: "Rangers", logo: "rangers.png", nation: "Scotland" },
  { name: "Milan", logo: "milan.png", nation: "Italy" },
  { name: "Braga", logo: "braga.png", nation: "Portugal" },
  { name: "Lazio", logo: "lazio.png", nation: "Italy" },
  { name: "Kızılyıldız", logo: "kızılyıldız.png", nation: "Serbia" },
  { name: "Kopenhag", logo: "kopenhag.png", nation: "Denmark" },

  //4.torba
  { name: "Galatasaray", logo: "galatasaray.png", nation: "Turkey" },
  { name: "Real Sociedad", logo: "sociedad.png", nation: "Spain" },
  { name: "Young Boys", logo: "young.png", nation: "Switzerland" },
  { name: "Celtic", logo: "celtic.png", nation: "Scotland" },
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

const Index = () => {
  const groupedTeams = chunkArray(teams, 8);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
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
          <button className="bg-white text-blue-500 border-none px-6 py-3 rounded-md cursor-pointer mt-6 text-lg font-semibold">
            Go to Groups
          </button>
        </Link>
      </div>
      <footer
        style={{
          marginTop: "1rem",
          textAlign: "center",
          paddingBottom: "1rem",
        }}
      >
        <p>
          Visit my website:{" "}
          <a
            href="https://mami.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            mami.dev
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
