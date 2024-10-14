import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Import Link from next/link

export default function InstagramCaptions() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Generating Instagram Captions
        </h1>
        <section className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 1: Know Your Brand Voice
            </h2>
            <p className="text-gray-400">
              Understanding your brand voice is essential for creating engaging Instagram captions. Here are ways to define it:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Identify key adjectives that describe your brand (e.g., playful, professional).</li>
              <li>Review past captions to understand what resonates with your audience.</li>
              <li>Experiment with different tones and styles to find what feels authentic.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 2: Craft Compelling Captions
            </h2>
            <p className="text-gray-400">
              A good caption grabs attention and encourages engagement. Here are tips for crafting effective captions:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Start with a hook that captivates your audience.</li>
              <li>Incorporate relevant hashtags to increase visibility.</li>
              <li>Ask questions or prompt users to engage with your post.</li>
              <li>Keep it concise, but ensure it conveys the message effectively.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 3: Utilize Emojis and Formatting
            </h2>
            <p className="text-gray-400">
              Emojis and formatting can enhance the appeal of your captions. Consider these strategies:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Use emojis to convey emotions or add visual interest.</li>
              <li>Break up long texts with line breaks and bullet points for readability.</li>
              <li>Highlight important information using capitalization or symbols.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 4: Analyze and Iterate
            </h2>
            <p className="text-gray-400">
              Once you’ve published your captions, it’s important to analyze their performance and iterate on your approach:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Monitor engagement metrics (likes, comments, shares) for your posts.</li>
              <li>Use Instagram Insights to understand what types of captions resonate.</li>
              <li>Experiment with different styles and lengths to see what works best.</li>
            </ul>
            <img src="/instagram/instagram.png" alt="Analyzing and Iterating Captions" className="mt-4 rounded shadow" />
          </div>
        </section>

        <div className="flex justify-between mt-10">
          {/* Next Page button */}
          <Link href="/docs">
          <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">Go to Docs</Button>
          </Link>
          {/* Docs page button aligned to steps */}
          <div className="flex justify-end w-full">
            <Link href="/docs/linkedin-posts">
            <Button className="px-4 py-2 text-white transition duration-300 bg-green-600 rounded hover:bg-green-500">Next Page</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
