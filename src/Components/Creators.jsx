import { Linkedin } from "lucide-react";
import { VleiUserIcon } from "./customs/VleiUserIcon";

export default function CreatorsCard() {
  const creators = [
    {
      name: "Bismark Nyota",
      role: "Team Lead, AI & Tech",
      avatar: "/bismark.jpg",
      linkedin: "https://www.linkedin.com/in/bismark-nyota-5a4017280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    {
      name: "Terrence T Zizhou",
      role: "Software & Hardware",
      avatar: "/terry.jpg",
      linkedin: "https://www.linkedin.com/in/terrence-zizhou-b260932aa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Btays7G%2F2SrKw0aZDhrLcMw%3D%3D",
    },
    {
      name: "Tanya A Mukoyi",
      role: "Advocacy & Outreach",
      avatar: "/tanya.jpg",
      linkedin: "https://www.linkedin.com/in/tanyaradzwa-mukoyi-123b5632a ",
    },
    {
      name: "Babongile B Sibanda",
      role: "AI & Tech/Wikimedian",
      avatar: "/WhatsApp Image 2025-07-19 at 20.16.21_274c4802.jpg",
      linkedin: "https://www.linkedin.com/in/babongile-sibanda-b98471368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Panashe Dhangarazi",
      role: "Ops Research & Stats",
      avatar: <VleiUserIcon size={42} />,
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-white/95 rounded-2xl shadow-lg shadow-[#4e602a] p-6 flex flex-col gap-4 max-w-2xl mx-auto mb-8 border border-green-100">
      <div className="font-semibold text-lg text-[#234445] mb-2">CREATED BY</div>
      <div className="flex flex-row gap-6 flex-wrap">
        {creators.map((person) => {
          // Make entire card a link if valid LinkedIn
          const CardContent = (
            <div
              className={`flex items-center gap-3 flex-1 min-w-[180px] mb-2 rounded-xl px-2 py-1 transition ${
                person.linkedin !== "#" ? "hover:bg-green-50 cursor-pointer group" : ""
              }`}
            >
              {/* Avatar */}
              {typeof person.avatar === "string" ? (
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover border border-green-200 shadow"
                />
              ) : (
                person.avatar
              )}
              {/* Name and Role */}
              <div className="flex flex-col">
                <span className="font-medium text-[#234445] group-hover:underline">{person.name}</span>
                <span className="text-xs text-green-700">{person.role}</span>
              </div>
              {/* LinkedIn icon */}
              {person.linkedin !== "#" && (
                <span className="ml-2 text-[#0077b5] group-hover:text-green-800">
                  <Linkedin size={22} />
                </span>
              )}
            </div>
          );
          return person.linkedin !== "#" ? (
            <a
              key={person.name}
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn for ${person.name}`}
              className="flex-1 min-w-[180px]"
              style={{ textDecoration: "none" }}
            >
              {CardContent}
            </a>
          ) : (
            <div key={person.name} className="flex-1 min-w-[180px]">{CardContent}</div>
          );
        })}
      </div>
    </div>
  );
}
