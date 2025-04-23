import React from 'react';
import Image from 'next/image';

interface ToolCardProps {
  icon?: string;
  name: string;
  desc: string;
  link: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon, name, desc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#181818] hover:bg-[#232323] transition-all duration-300 ease-in-out rounded-2xl shadow-md hover:shadow-xl p-6 border border-[#2a2a2a]"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <Image
            src={icon}
            alt={`${name} logo`}
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
        )}
        <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
          {name}
        </h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </a>
  );
};
