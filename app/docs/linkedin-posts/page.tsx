import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaPencilAlt, FaShareSquare, FaUsers, FaHashtag } from "react-icons/fa"; // Icons for each step

export default function LinkedInCaptions() {
  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-white">
          Writing LinkedIn Captions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaPencilAlt />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 1</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Start with a Hook</h3>
            <p className="text-gray-400">
              Capture attention right away with a compelling opening. Consider these tips:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Use a thought-provoking question.</li>
              <li>Share a surprising statistic.</li>
              <li>Start with a relatable scenario.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaShareSquare />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 2</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Keep It Professional</h3>
            <p className="text-gray-400">
              Your audience is professional, so ensure your tone reflects that:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Avoid slang and overly casual language.</li>
              <li>Be concise and clear in your message.</li>
              <li>Use industry-relevant terminology.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaUsers />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 3</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Engage with Your Audience</h3>
            <p className="text-gray-400">
              Encourage interaction and conversation by:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Asking for thoughts or opinions.</li>
              <li>Inviting others to share their experiences.</li>
              <li>Tagging relevant people to spark engagement.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                <FaHashtag />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 4</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Use Hashtags Wisely</h3>
            <p className="text-gray-400">
              Hashtags can improve visibility. Here’s how to use them effectively:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Research trending hashtags in your industry.</li>
              <li>Limit to 3-5 relevant hashtags.</li>
              <li>Include them at the end of your caption.</li>
            </ul>
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
