// app/docs/api-reference/page.tsx

"use client"; // Ensure this is a client component
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust the path according to your project structure
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar"; // Adjust the path according to your project structure

export default function ApiReference() {
  const { userId } = useAuth(); // Get the userId to check if the user is signed in

  return (
    <div className="min-h-screen text-gray-100 bg-slate-950">
      <Navbar /> {/* Include the Navbar component */}
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          API Reference
        </h1>
        <section className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Exciting New API Coming Soon!
            </h2>
            <p className="text-gray-400">
              We are thrilled to announce that an API will soon be available to enhance your experience with our application. The API will allow you to integrate and interact with our platform seamlessly.
            </p>
            <SignedOut>
              {/* Show button only if user is not signed in */}
              <Button className="mt-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">
                <SignInButton mode="modal">
                <Link href="#">Sign Up for API Updates!</Link>
                </SignInButton>
              </Button>
            </SignedOut>
            <SignedIn>
              {/* Indicate the user is already signed in */}
              <p className="mt-4 text-blue-500">
                You are already signed in! Thank you for being with us❤️.
              </p>
            </SignedIn>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              What to Expect
            </h2>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Access to various endpoints for fetching and posting data.</li>
              <li>Comprehensive documentation to help you get started quickly.</li>
              <li>Enhanced capabilities for automating your workflows.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Stay Updated
            </h2>
            <p className="text-gray-400">
              We will notify you once the API is live. Stay tuned for updates and get ready to explore new possibilities!
            </p>
          </div>
        </section>

        <div className="flex justify-between mt-10">
          <Link href="/docs">
            <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">
              Go to Docs
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
