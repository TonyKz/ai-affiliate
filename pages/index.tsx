import React from 'react';
import { ToolCard } from '../components/ToolCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
          Tony's Top AI Tools for 2025
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-300">
          Handpicked AI tools I personally use to build faster, automate smarter, and turn side hustles into income streams.
        </p>
        <a
          href="#tools"
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-black px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition hover:scale-105"
        >
          🚀 Explore the Stack
        </a>
      </div>

      <section
        id="tools"
        className="mt-24 max-w-6xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
      >
        <ToolCard
          icon="/icons/jasper.svg"
          name="Jasper"
          desc="Your personal AI copywriter. Generate blog posts, ads, and emails 10x faster."
          link="https://your-affiliate-link.com/jasper"
        />
        <ToolCard
          icon="/icons/ocoya.svg"
          name="Ocoya"
          desc="AI + scheduling for social media. Auto-generate posts and captions in seconds."
          link="https://your-affiliate-link.com/ocoya"
        />
        <ToolCard
          icon="/icons/copyai.svg"
          name="Copy.ai"
          desc="Leverage AI to craft marketing copy that converts visitors into customers."
          link="https://your-affiliate-link.com/copyai"
        />
        <ToolCard
          icon="/icons/surferseo.svg"
          name="SurferSEO"
          desc="Write content that ranks with real-time SEO optimization baked in."
          link="https://your-affiliate-link.com/surferseo"
        />
        <ToolCard
          icon="/icons/writesonic.svg"
          name="Writesonic"
          desc="AI writer for SEO-friendly content, ready in seconds for your websites, blogs, or ads."
          link="https://your-affiliate-link.com/writesonic"
        />
        <ToolCard
          icon="/icons/pictory.svg"
          name="Pictory"
          desc="Transform blog posts into videos—perfect for YouTube Shorts and TikTok."
          link="https://your-affiliate-link.com/pictory"
        />
      </section>

      <footer className="text-center mt-24 text-sm text-gray-500 space-y-2">
        <p>&copy; {new Date().getFullYear()} Tony's AI Stack — Built with ❤️ in Next.js</p>
        <p>
          Disclaimer: Some links are affiliate links. I may earn a small commission if you purchase through them.
        </p>
      </footer>
    </main>
  );
}
