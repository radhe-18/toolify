"use client";

export default function ContactPage() {

  return (
    <div
      className="
        min-h-screen relative overflow-hidden 
        bg-[#f5f6fa] text-gray-900
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 dark:text-white
      "
    >
      {/* Header spacer */}
      <div className="h-16" />

      {/* Soft background for LIGHT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>

        {/* Light mode subtle shapes */}
        <div className="block dark:hidden">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-100 opacity-40 blur-2xl"></div>
          <div className="absolute top-1/3 right-20 w-36 h-36 rounded-full bg-purple-100 opacity-40 blur-2xl"></div>
          <div className="absolute bottom-16 left-1/3 w-48 h-48 rounded-full bg-pink-100 opacity-40 blur-2xl"></div>
        </div>

        {/* Dark floating animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <section className="py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full shadow-xl mb-8
            bg-gradient-to-r from-blue-500 to-purple-600
          ">
            <span className="text-3xl text-white">📬</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h1>

          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto 
            text-gray-600 dark:text-gray-300
          ">
            Have questions about AI tools? Need help finding the perfect solution?
            We're here to help you navigate the future of technology.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE INFO */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Whether you're a developer, business owner, or AI enthusiast — we'd love to hear from you.
            </p>

            <div className="space-y-8">

              {/* Item */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4
                  bg-blue-100 text-blue-600 
                  dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-600 dark:text-white
                ">
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">hello@aitools.com</p>
                  <p className="text-gray-600 dark:text-gray-300">support@aitools.com</p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4
                  bg-purple-100 text-purple-600
                  dark:bg-gradient-to-r dark:from-purple-500 dark:to-purple-600 dark:text-white
                ">
                  💬
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                  <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
                  <p className="text-gray-600 dark:text-gray-300">Avg response time: 2 min</p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4
                  bg-pink-100 text-pink-600
                  dark:bg-gradient-to-r dark:from-pink-500 dark:to-pink-600 dark:text-white
                ">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 AI Innovation Drive</p>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="
            rounded-3xl p-8 shadow-xl border 
            bg-white text-gray-900 border-gray-200
            dark:bg-slate-800/80 dark:text-white dark:border-slate-700/50
          ">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border 
                    bg-white text-gray-900 placeholder-gray-500
                    border-gray-300 focus:ring-2 focus:ring-blue-500
                    dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border 
                    bg-white text-gray-900 placeholder-gray-500
                    border-gray-300 focus:ring-2 focus:ring-blue-500
                    dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border 
                  bg-white text-gray-900 placeholder-gray-500
                  border-gray-300 focus:ring-2 focus:ring-blue-500
                  dark:bg-slate-700 dark:text-white dark:border-slate-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                <select className="
                  w-full px-4 py-3 rounded-xl border
                  bg-white text-gray-900 border-gray-300
                  focus:ring-2 focus:ring-blue-500  
                  dark:bg-slate-700 dark:text-white dark:border-slate-600
                ">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows="5"
                  className="
                    w-full px-4 py-3 rounded-xl border resize-none
                    bg-white text-gray-900 placeholder-gray-500
                    border-gray-300 focus:ring-2 focus:ring-blue-500
                    dark:bg-slate-700 dark:text-white dark:border-slate-600
                  "
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                className="
                  w-full py-4 rounded-xl text-white font-semibold shadow-lg
                  bg-gradient-to-r from-blue-500 to-purple-600
                  hover:from-blue-600 hover:to-purple-700 transition-all
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </section>

        {/* FAQ SECTION */}
        <section className="
          mt-16 rounded-3xl p-12
          bg-white text-gray-900 border border-gray-200
          dark:bg-white/5 dark:text-white dark:border-white/20 backdrop-blur-sm
        ">
          <h2 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="
              p-6 rounded-2xl shadow bg-gray-50 text-gray-800
              dark:bg-white/5 dark:text-gray-300 dark:border-white/20
            ">
              <h3 className="text-xl font-bold mb-2">How do I submit my AI tool?</h3>
              <p>We are working on a submission form. Contact us meantime.</p>
            </div>

            <div className="
              p-6 rounded-2xl shadow bg-gray-50 text-gray-800
              dark:bg-white/5 dark:text-gray-300 dark:border-white/20
            ">
              <h3 className="text-xl font-bold mb-2">Is this directory free?</h3>
              <p>Yes! It’s completely free.</p>
            </div>
            <div className="
              p-6 rounded-2xl shadow bg-gray-50 text-gray-800
              dark:bg-white/5 dark:text-gray-300 dark:border-white/20
            ">
              <h3 className="text-xl font-bold mb-2">How often is the directory updated?</h3>
              <p>   We update our directory regularly with the latest AI tools and features. New tools are added as they're released.</p>
            </div>
            <div className="
              p-6 rounded-2xl shadow bg-gray-50 text-gray-800
              dark:bg-white/5 dark:text-gray-300 dark:border-white/20
            ">
              <h3 className="text-xl font-bold mb-2">Can I suggest new categories?</h3>
              <p> Absolutely! We're always looking to improve our categorization. Send us your suggestions and we'll consider adding them.</p>
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="my-20 py-16 text-center rounded-3xl
          bg-gradient-to-r from-blue-600 to-purple-600 text-white
        ">
          <h2 className="text-4xl font-bold mb-6">Ready to Discover AI Tools?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start exploring our comprehensive directory of cutting-edge AI tools.
          </p>
          <a
            href="/"
            className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg"
          >
            Browse Tools →
          </a>
        </section>

      </div>
    </div>
  );
}
