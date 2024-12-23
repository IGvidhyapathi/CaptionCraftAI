import React from 'react'
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar';
import { ArrowRight, PlayCircle, PlayIcon } from 'lucide-react';
import { Play } from 'next/font/google';

const SupportPage = () => {
  return (
    <div className="min-h-screen text-gray-200 bg-slate-950">
        <Navbar/>
      {/* Header Section */}
      <header className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className='mt-10'>
        <h1 className="text-2xl font-bold text-primary sm:text-5xl">Support - CaptionCraft AI</h1>
        <p className="mt-4 text-xl">How can we assist you with CaptionCraft AI?</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

        <section aria-label="Support Options Section">
  <h2 className="text-3xl font-semibold text-primary">Get In Touch</h2>
  <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
    {/* Complaint about Content */}
    <div className="flex flex-col p-6 transition-all duration-500 transform bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-700">
      <h3 className="text-xl font-semibold text-gray-200 text-accent">Help and Support</h3>
      <p className="mt-2 text-gray-300">Submit a ticket to our support team or email support@captioncraftai.dev directly</p>
      <div className="mt-6">
        <Link href="https://forms.zohopublic.in/cvidhyapathi1555gm1/form/Support/formperma/egn0zlcbOfqvRDXGQrgbWNDfBwSHWS2qrip_l8XF0PM" passHref>
          <Button className="p-3 text-white transition duration-300 transform bg-red-900 rounded hover:bg-red-700 hover:scale-105 hover:translate-y-1" aria-label="File a Complaint">
            Submit Ticket
          </Button>
        </Link>
      </div>
    </div>

    {/* Sales Inquiry */}
    <div className="flex flex-col p-6 transition-all duration-500 transform bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-700">
      <h3 className="text-xl font-semibold text-gray-200 text-accent">Sales</h3>
      <p className="mt-2 text-gray-300">Connect with our sales team to talk about pricing, enterprise contracts, or to request a demo.</p>
      <div className="mt-auto">
        <Link href="/support/meeting" passHref>
          <Button className="p-3 text-white transition duration-300 transform rounded bg-neutral-950 hover:bg-neutral-900 hover:scale-105 hover:translate-y-1" aria-label="Submit Sales Ticket">
            Talk to Sales
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>



          {/* FAQ Section */}
          <section aria-label="FAQ Section">
            <h2 className="text-4xl font-semibold text-primary">Frequently Asked Questions</h2>
            <div className='mt-8'>
              <Accordion type="multiple" >
                <AccordionItem value="item-1">
                  <AccordionTrigger>How can I reach CaptionCraft AI support?</AccordionTrigger>
                  <AccordionContent>
                  You can directly contact our support team via the "Chat with Us" feature on our support page or email us at support@captioncraft.ai. We aim to respond within 24 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What should I do if the captions generated aren’t accurate or relevant?</AccordionTrigger>
                  <AccordionContent>
                  If you encounter issues with caption accuracy, please file a complaint through the "File a Complaint" option. Our team will review and make adjustments to improve content relevance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I report a bug or issue?</AccordionTrigger>
                  <AccordionContent>
                  Click on the "Report Bug" button on the support page to report any technical issues. Please provide details so our team can assist you quickly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What do I do if the platform isn’t loading or responding?</AccordionTrigger>
                  <AccordionContent>
                  First, clear your browser cache and refresh the page. If the issue persists, check our social media for any platform maintenance updates or contact support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent>
                  For now we are not allowing our customer to cancel plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I request new features for CaptionCraft AI?</AccordionTrigger>
                  <AccordionContent>
                  We welcome feedback and feature requests! Use our feedback option on the support page to share your ideas, and our team will consider them for future updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          
        </div>
      </main>

      {/* Footer Section */}
      <footer className="py-6 text-center bg-black">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} CaptionCraft AI. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default SupportPage
