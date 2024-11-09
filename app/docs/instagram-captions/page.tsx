import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaHeart, FaHashtag, FaPen, FaClock } from "react-icons/fa"; // Updated icons for each step

export default function InstagramCaptions() {
  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-white">
          Crafting Engaging Instagram Captions
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-pink-600 rounded-full">
                <FaHeart />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 1</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Start with a Hook</h3>
            <p className="text-gray-400">
              Capture attention in the first few words:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Use a question or bold statement.</li>
              <li>Appeal to emotions or curiosity.</li>
              <li>Keep it relevant and engaging.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-pink-600 rounded-full">
                <FaHashtag />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 2</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Use Relevant Hashtags</h3>
            <p className="text-gray-400">
              Hashtags increase discoverability on Instagram:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Research trending hashtags in your niche.</li>
              <li>Use a mix of popular and unique hashtags.</li>
              <li>Limit to 5-10 relevant hashtags.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-pink-600 rounded-full">
                <FaPen />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 3</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Write Clear CTAs</h3>
            <p className="text-gray-400">
              Encourage interactions through CTAs:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Ask followers to share thoughts in the comments.</li>
              <li>Invite followers to save or share the post.</li>
              <li>Use engaging phrases like “Tap to see more!”</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-pink-600 rounded-full">
                <FaClock />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 4</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Post at Optimal Times</h3>
            <p className="text-gray-400">
              Timing can affect your post’s reach:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Know when your audience is most active.</li>
              <li>Experiment with different posting times.</li>
              <li>Use Instagram Insights to track engagement.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <Link href="/docs">
            <Button className="px-4 py-2 text-white transition duration-300 bg-pink-600 rounded shadow-md hover:bg-pink-500">
              Go to Docs
            </Button>
          </Link>
          <div className="flex justify-end w-full">
            <Link href="/docs/linkedin-posts">
              <Button className="px-4 py-2 text-white transition duration-300 bg-purple-600 rounded shadow-md hover:bg-purple-500">
                Next Page
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
