import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function TwitterThreads() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Creating Twitter Threads
        </h1>
        <section className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 1: Understand Your Audience
            </h2>
            <p className="text-gray-400">
              Before crafting your Twitter thread, it's crucial to understand who your audience is and what they care about. This foundational step will ensure your content resonates. Here’s how to approach this:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Analyze your followers' interests and demographics using Twitter analytics.</li>
              <li>Research trending topics in your niche to gauge current interests.</li>
              <li>Engage with your audience by asking questions or conducting polls to gather insights.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 2: Plan Your Thread Structure
            </h2>
            <p className="text-gray-400">
              A well-structured thread captures attention and maintains engagement. Consider the following tips for structuring your thread effectively:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Start with a compelling hook that piques curiosity.</li>
              <li>Outline the main points you want to cover, ensuring each tweet contributes to the overall narrative.</li>
              <li>Use bullet points, numbered lists, or emojis to enhance readability.</li>
              <li>Include visuals (images, GIFs, or videos) to support your messages and make your thread visually appealing.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 3: Write and Edit Your Tweets
            </h2>
            <p className="text-gray-400">
              With your structure in place, it’s time to write! Focus on clarity, conciseness, and engagement. Here are key tips:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Use simple, direct language to convey your message effectively.</li>
              <li>Keep tweets under the character limit while ensuring they remain impactful.</li>
              <li>Edit for typos, grammar, and clarity. Reading aloud can help catch mistakes.</li>
              <li>Ask for feedback from peers or colleagues to refine your content.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 4: Publish and Promote Your Thread
            </h2>
            <p className="text-gray-400">
              Once you’re satisfied with your thread, it’s time to share it with the world. Follow these steps for effective publishing and promotion:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Choose an optimal time for posting based on when your audience is most active.</li>
              <li>Engage with followers by responding to comments and encouraging retweets.</li>
              <li>Share the thread across other social media platforms to increase visibility.</li>
              <li>Consider pinning the thread to your profile for added exposure.</li>
            </ul>
            <img src="/twitter/Twitterunderstand.svg" alt="Understanding Audience" className="mt-4 rounded shadow" />
          </div>
        </section>

        {/* Move Next Page button to the right */}
        <div className="flex justify-between mt-10">
          {/* Next Page button */}
          <Link href="/docs">
          <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">Go to Docs</Button>
          </Link>
          {/* Docs page button aligned to steps */}
          <div className="flex justify-end w-full">
            <Link href="/docs/instagram-captions">
            <Button className="px-4 py-2 text-white transition duration-300 bg-green-600 rounded hover:bg-green-500">Next Page</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
