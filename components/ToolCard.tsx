type ToolCardProps = {
  name: string;
  desc: string;
  link: string;
};

export function ToolCard({ name, desc, link }: ToolCardProps) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400 mb-2">{desc}</p>
      <a
        href={link}
        className="text-green-400 underline hover:text-green-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try {name}
      </a>
    </div>
  );
}
