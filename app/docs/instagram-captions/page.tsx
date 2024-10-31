import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaComment, FaHashtag, FaSmile, FaChartLine } from "react-icons/fa"; // Example icons

export default function InstagramCaptions() {
  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-black to-gray-800">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Generating Instagram Captions
        </h1>
        <section className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Step 1 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaComment />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 1: Know Your Brand Voice</h2>
            </div>
            <p className="text-gray-400">
              Understanding your brand voice is essential for creating engaging Instagram captions. Here are ways to define it:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Identify key adjectives that describe your brand (e.g., playful, professional).</li>
              <li>Review past captions to understand what resonates with your audience.</li>
              <li>Experiment with different tones and styles to find what feels authentic.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaHashtag />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 2: Craft Compelling Captions</h2>
            </div>
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

          {/* Step 3 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaSmile />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 3: Utilize Emojis and Formatting</h2>
            </div>
            <p className="text-gray-400">
              Emojis and formatting can enhance the appeal of your captions. Consider these strategies:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Use emojis to convey emotions or add visual interest.</li>
              <li>Break up long texts with line breaks and bullet points for readability.</li>
              <li>Highlight important information using capitalization or symbols.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaChartLine />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 4: Analyze and Iterate</h2>
            </div>
            <p className="text-gray-400">
              Once you’ve published your captions, it’s important to analyze their performance and iterate on your approach:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Monitor engagement metrics (likes, comments, shares) for your posts.</li>
              <li>Use Instagram Insights to understand what types of captions resonate.</li>
              <li>Experiment with different styles and lengths to see what works best.</li>
            </ul>
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
