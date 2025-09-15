import ChromaGrid from "./AboutTeamLogic"

const AboutTeam = () => {

    const items = [
  {
    image: "https://media.licdn.com/dms/image/v2/D5603AQH_Ee8IoB10dg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711996778669?e=1760572800&v=beta&t=Mc_lsWde4PmOAqIjKJNC45HjtC5qGHDz4qhDML5qpAU",
    title: "Karmesh Gupta",
    subtitle: "CEO at OSTO",
    handle: "@karmeshgupta",
    borderColor: "#282978",
    gradient: "linear-gradient(145deg, #282978, #000)",
    url: "https://www.linkedin.com/in/karmeshgupta/"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5603AQG9h5h0oYCxsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729264168766?e=1760572800&v=beta&t=Idpt5RWApGBo_GaMC2_x6nIEBx6ZnweLuh8J4eYZWHM",
    title: "Praveen Gupta",
    subtitle: "Co-Founder at OSTO",
    handle: "@praveengupta",
    borderColor: "#3b3d99",
    gradient: "linear-gradient(180deg, #3b3d99, #000)",
    url: "https://www.linkedin.com/in/pkg/"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5603AQGDkbru2arlrA/profile-displayphoto-scale_200_200/B56ZgpYW.0G0AY-/0/1753040910051?e=1760572800&v=beta&t=7TjTdw1Xu_cavgJUzJe1qy0ikQK3ijJwby6L3D6jqu8",
    title: "Sahitya Lakshmi",
    subtitle: "SDET 1",
    handle: "@sahityalakshmi",
    borderColor: "#282a77",
    gradient: "linear-gradient(180deg, #282a77, #000)",
    url: "#"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFgPBKklDuGmA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657192107026?e=1760572800&v=beta&t=sFU_Fj7jyaJ5ZSBQqWDqouKqp1BCsbs9NvW6-nF-BzQ",
    title: "Deepak Verma",
    subtitle: "SDE-1 at OSTO",
    handle: "@deepakverma",
    borderColor: "#393a96",
    gradient: "linear-gradient(145deg, #393a96, #000)",
    url: "#"
  }
];

    return(
        <>
        <div className="text-center mb-10">
        <h2 className="font-bold text-5xl px-8 text-center mt-20 mb-5" style={{ color: '#282a77' }}>Meet our Team</h2>
        <p className="text-gray-500 text-2xl">Dedicated experts committed to revolutionizing cybersecurity</p>
        </div>
        <div className="relative mb-20 lg:h-[50vh] h-[165vh]">
        <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
        />
        </div>
        </>
    )
}

export default AboutTeam