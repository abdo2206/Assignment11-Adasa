import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialIcons = {
  twitter: FaXTwitter,
  github: FaGithub,
  linkedin: FaLinkedin,
};

const socialLinks = [
  { platform: "twitter", url: "https://twitter.com/" },
  { platform: "github", url: "https://github.com/" },
  { platform: "linkedin", url: "https://linkedin.com/in/" },
];

export default function TeamCard({ member }) {
  return (
    <div
      key={member.id}
      className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
    >
      <div className="relative inline-block mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
        />

        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <h3 className="font-bold text-white text-lg">{member.name}</h3>
      <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>

      <div className="flex justify-center gap-3">
        {socialLinks.map(({ platform, url }) => {
          const Icon = socialIcons[platform];

          return (
            <Link
              key={platform}
              to={url}
              className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
