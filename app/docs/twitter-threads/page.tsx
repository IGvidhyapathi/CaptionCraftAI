import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FaPenNib, FaUserFriends, FaTags, FaBullhorn } from "react-icons/fa"; // Icons for each step

export default function TwitterThreads() {
  return (
    <div className="min-h-screen text-gray-100 bg-slate-950">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-white">
          Crafting Engaging Twitter Threads
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-blue-400 rounded-full">
                <FaPenNib />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 1</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Start with a Compelling Hook</h3>
            <p className="text-gray-400">
              Capture attention with a strong opening tweet. Here’s how:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Begin with a bold statement, question, or intriguing fact.</li>
              <li>Use concise language to spark curiosity.</li>
              <li>Emojis can help make your hook stand out visually.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-blue-400 rounded-full">
                <FaUserFriends />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 2</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Develop Your Story</h3>
            <p className="text-gray-400">
              Build a narrative through each tweet to keep readers engaged:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Organize ideas into a sequence that flows smoothly.</li>
              <li>Keep each tweet relevant to the main message.</li>
              <li>Include personal insights or examples for relatability.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-blue-400 rounded-full">
                <FaTags />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 3</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">Use Hashtags and Mentions</h3>
            <p className="text-gray-400">
              Increase reach by incorporating hashtags and mentions:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Use relevant hashtags sparingly to boost visibility.</li>
              <li>Mention people or brands where relevant to spark engagement.</li>
              <li>Avoid overcrowding with hashtags for a cleaner look.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="p-6 transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-blue-400 rounded-full">
                <FaBullhorn />
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-white">Step 4</h2>
            </div>
            <h3 className="text-xl font-semibold text-white">End with a Call to Action</h3>
            <p className="text-gray-400">
              Wrap up your thread with a prompt for your audience:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Encourage readers to reply with their thoughts or share.</li>
              <li>Invite them to follow for more content or insights.</li>
              <li>Provide a link to a resource or related content.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <Link href="/docs">
            <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded shadow-md hover:bg-blue-500">
              Go to Docs
            </Button>
          </Link>
          <div className="flex justify-end w-full">
            <Link href="/docs/instagram-captions">
              <Button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded shadow-md hover:bg-blue-400">
                Next Page
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
