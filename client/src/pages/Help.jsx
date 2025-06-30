import Navbar from "@/components/Navbar";
import { MessageCircle, Book, Phone, Mail } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <Navbar />

      <main className="pt-24 pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Help & Support
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're here to help you get the most out of KnowYourDrugs
            </p>
          </div>

          <div className="grid gap-6">
            {/* Quick Help */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Live Chat</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get instant help from our support team
                </p>
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                  Start Chat →
                </button>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Knowledge Base</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Browse our comprehensive help articles
                </p>
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                  Browse Articles →
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How accurate is the drug information?",
                    a: "Our information is sourced from medical databases and reviewed by healthcare professionals, but should not replace professional medical advice.",
                  },
                  {
                    q: "Is my data secure?",
                    a: "Yes, we use industry-standard encryption and do not store personal health information beyond what's necessary for the service.",
                  },
                  {
                    q: "Can I use this service for medical advice?",
                    a: "No, this service is for educational purposes only. Always consult with qualified healthcare providers for medical advice.",
                  },
                  {
                    q: "How do I report incorrect information?",
                    a: "You can contact our support team through the contact options below, and we'll review and update the information as needed.",
                  },
                ].map(({ q, a }, i) => (
                  <div key={i} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">{q}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Phone Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">1-800-KNOW-DRUG</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">support@knowyourdrugs.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
