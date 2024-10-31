import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaLightbulb, FaSearch, FaBullhorn, FaClock } from "react-icons/fa"; // Icons for each step

export default function YouTubeDescriptions() {
  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-white">
          Crafting YouTube Descriptions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaLightbulb />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 1</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Start with a Catchy Intro</h3>
            <p className="text-gray-400">
              A strong introduction can help grab viewers' attention. Here’s how to create an engaging intro:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Include a brief summary of the video's content.</li>
              <li>Highlight the unique value viewers can expect.</li>
              <li>Keep it concise and appealing.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaSearch />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 2</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Use Relevant Keywords</h3>
            <p className="text-gray-400">
              Keywords help with SEO and make your video discoverable. Try these tips:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Research popular keywords in your niche.</li>
              <li>Incorporate keywords naturally in your description.</li>
              <li>Use phrases that match viewers' search intent.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaBullhorn />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 3</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Add Calls to Action</h3>
            <p className="text-gray-400">
              Encourage viewers to engage further with clear CTAs:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Invite viewers to like, subscribe, and comment.</li>
              <li>Include links to relevant playlists or videos.</li>
              <li>Add a CTA for additional resources or downloads.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaClock />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 4</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Organize with Timestamps</h3>
            <p className="text-gray-400">
              Timestamps can improve viewer experience. Here’s how:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Break down content with time markers for easy navigation.</li>
              <li>Highlight main sections or chapters for clarity.</li>
              <li>Place timestamps at the beginning of your description.</li>
            </ul>
            <img src="/youtube/youtube.png" alt="Organizing with Timestamps" className="mt-4 rounded-lg shadow-lg border border-gray-700" />
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <Link href="/docs">
            <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500 shadow-md">
              Go to Docs
            </Button>
          </Link>
          <div className="flex justify-end w-full">
            <Link href="/docs/api-reference">
              <Button className="px-4 py-2 text-white transition duration-300 bg-green-600 rounded hover:bg-green-500 shadow-md">
                Previous Page
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
