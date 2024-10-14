import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Import Link from next/link

export default function LinkedInPost() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Crafting Effective LinkedIn Posts
        </h1>
        <section className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 1: Define Your Audience
            </h2>
            <p className="text-gray-400">
              Understanding your audience is crucial for creating relevant LinkedIn posts. Here are ways to identify your audience:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Consider your target demographics (industry, job role).</li>
              <li>Review engagement metrics from past posts to determine what resonates.</li>
              <li>Engage with your audience through comments and messages for better insights.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 2: Write Engaging Content
            </h2>
            <p className="text-gray-400">
              An engaging post captures attention and prompts interaction. Here are tips for writing compelling content:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Start with a strong hook to draw readers in.</li>
              <li>Incorporate relevant hashtags to increase post visibility.</li>
              <li>Ask questions to stimulate discussion in the comments.</li>
              <li>Keep it professional, yet personable to connect with your audience.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 3: Use Visuals Effectively
            </h2>
            <p className="text-gray-400">
              Visual content can enhance the impact of your posts. Consider these strategies:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Include images, infographics, or videos to make your post stand out.</li>
              <li>Ensure visuals are high-quality and relevant to your content.</li>
              <li>Use alt text to make your visuals accessible to all users.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 4: Engage with Your Audience
            </h2>
            <p className="text-gray-400">
              After posting, engagement is key to reach a wider audience:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Respond to comments promptly to foster a community.</li>
              <li>Share your post in relevant groups or with connections to increase visibility.</li>
              <li>Follow up with analytics to see what content works best.</li>
            </ul>
            <img src="/linkedin/linkedin.svg" alt="Engaging with Your Audience" className="mt-4 rounded shadow" />
          </div>
        </section>

        <div className="flex justify-between mt-10">
          <Link href="/docs">
            <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">Go to Docs</Button>
          </Link>
          <div className="flex justify-end w-full">
            <Link href="/docs/api-reference">
              <Button className="px-4 py-2 text-white transition duration-300 bg-green-600 rounded hover:bg-green-500">Next Page</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
