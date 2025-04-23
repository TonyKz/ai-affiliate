import { ToolCard } from '../components/ToolCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">AI Tools That Make You Money</h1>
        <p className="mb-6 text-lg">
          Discover the top AI tools to automate work, start side hustles, and earn passive income.
        </p>
        <a
          href="#tools"
          className="inline-block bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400"
        >
          Show Me the Tools
        </a>
      </div>
      <section id="tools" className="mt-16 max-w-2xl mx-auto space-y-6">
        <ToolCard
          name="Jasper AI"
          desc="Write content 10x faster with this AI copywriter. Great for blog posts, ads, and more."
          link="https://your-affiliate-link.com/jasper"
        />
        <ToolCard
          name="Ocoya"
          desc="Auto-generate and schedule social posts with AI captions and images."
          link="https://your-affiliate-link.com/ocoya"
        />
        <ToolCard
          name="SurferSEO"
          desc="Rank your blog posts with AI-powered on-page SEO recommendations."
          link="https://your-affiliate-link.com/surferseo"
        />
        <ToolCard
          name="Pictory"
          desc="Turn text into videos—great for YouTube Shorts, TikToks, and Reels."
          link="https://your-affiliate-link.com/pictory"
        />
      </section>
    </main>
  );
}
