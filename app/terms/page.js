"use client";

export default function TermsPage() {

  return (
    <div
      className="
        min-h-screen 
        overflow-hidden 
        relative 
        transition-all duration-300
        bg-[#f5f6fa] 
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900
      "
    >
      {/* DARK MODE Background Elements */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Header Spacer */}
      <div className="h-16"></div>

      {/* HERO SECTION */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:opacity-100 opacity-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg">
              <span className="text-3xl">📋</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Terms & Conditions
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Understanding our commitment to providing a safe, ethical, and innovative AI tools platform
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="
            rounded-3xl p-8 md:p-12 shadow-xl border
            bg-white text-gray-900 border-gray-200
            dark:bg-slate-800/80 dark:text-gray-300 dark:border-slate-700/50
            backdrop-blur-lg
          "
        >
          {/* FULL ORIGINAL CONTENT STARTS HERE */}
          <div className="prose prose-lg max-w-none dark:prose-invert">

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* 1 - Acceptance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  1
                </span>
                Acceptance of Terms
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                By accessing and using the AI Tools Directory ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                These terms apply to all visitors, users, and others who access or use the Service. By using our Service, you agree to be bound by these Terms.
              </p>
            </section>

            {/* 2 - License */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  2
                </span>
                Use License
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Permission is granted to temporarily access the materials (information or software) on AI Tools Directory for personal, non-commercial transitory viewing only.
              </p>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>

              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            {/* 3 - Listings */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  3
                </span>
                AI Tool Listings
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                The AI Tools Directory provides information about various AI tools and services. While we strive to maintain accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or reliability of any tool listings.
              </p>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Users are responsible for their own evaluation and use of any AI tools listed on our platform. We are not responsible for:
              </p>

              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>The performance or functionality of third-party AI tools</li>
                <li>Any damages or losses resulting from the use of listed tools</li>
                <li>The privacy practices of third-party tool providers</li>
                <li>Any disputes between users and tool providers</li>
              </ul>
            </section>

            {/* 4 - Accounts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  4
                </span>
                User Accounts
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </section>

            {/* 5 - Prohibited */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  5
                </span>
                Prohibited Uses
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                You may not use our Service:
              </p>

              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>For any unlawful purpose</li>
                <li>To violate laws or regulations</li>
                <li>To infringe intellectual property rights</li>
                <li>To harass, abuse, insult, harm, or defame</li>
                <li>To submit false information</li>
                <li>To upload malicious code</li>
                <li>To spam or scrape data</li>
              </ul>
            </section>

            {/* 6 - Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  6
                </span>
                Content Policy
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Our Service allows you to post, link, store, share and otherwise make available certain information. You are responsible for content you post.
              </p>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                By posting content to the Service, you grant us the right to use and display such content publicly.
              </p>
            </section>

            {/* 7 - Termination */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  7
                </span>
                Termination
              </h2>

              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                We may terminate or suspend your account immediately for any violation of these Terms.
              </p>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            {/* 8 - Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  8
                </span>
                Limitation of Liability
              </h2>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                In no event shall our platform or team be liable for any indirect, incidental, or consequential damages.
              </p>
            </section>

            {/* 9 - Changes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  9
                </span>
                Changes to Terms
              </h2>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                We reserve the right to update these Terms at any time.
              </p>
            </section>

            {/* 10 - Contact */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="w-8 h-8 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  10
                </span>
                Contact Us
              </h2>

              <div className="bg-gray-200 dark:bg-slate-700 rounded-xl p-6">
                <p className="font-medium text-gray-700 dark:text-gray-300">Email: legal@aitools.com</p>
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  Address: 123 AI Innovation Drive, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:opacity-100 opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're here to help clarify any questions you might have about our terms and conditions
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
