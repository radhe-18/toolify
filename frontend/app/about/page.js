"use client";

export default function AboutPage() {

  return (
    <div
      className="
        min-h-screen relative overflow-hidden transition-all duration-300
        bg-[#f5f6fa] 
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900
      "
    >
      {/* Animated Background – only in dark mode */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating particles – only dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Header Spacer */}
        <div className="h-16"></div>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:opacity-100 opacity-0"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                The Future of AI
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover, explore, and master the most advanced AI tools shaping tomorrow's technology landscape
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              To democratize access to cutting-edge AI technology and empower creators, businesses, and innovators worldwide
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Discover */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 dark:bg-white/5 dark:border-white/20 backdrop-blur-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Discover</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore thousands of AI tools across categories, from image generation to code assistance, all in one place
              </p>
            </div>

            {/* Innovate */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 dark:bg-white/5 dark:border-white/20 backdrop-blur-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Innovate</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay ahead of the curve with the latest AI advancements and emerging technologies
              </p>
            </div>

            {/* Transform */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 dark:bg-white/5 dark:border-white/20 backdrop-blur-lg text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Transform</h3>
              <p className="text-gray-600 dark:text-gray-300">
                 Transform your workflow with AI-powered solutions that enhance productivity and creativity
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose AI Tools?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience the most comprehensive and user-friendly AI tools directory on the web
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* items */}
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  ∞
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Comprehensive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Thousands of tools across AI categories</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  ⚡
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Real-time</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Always up-to-date with the latest tools</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  🎯
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Curated</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Hand-picked tools for quality assurance</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  🚀
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Completely free to use and explore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Future Roadmap</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're constantly evolving to bring you the best AI tools experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 dark:bg-white/5 dark:border-white/20 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Community Reviews
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                User reviews, ratings, and detailed feedback for every AI tool
              </p>
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 dark:bg-white/5 dark:border-white/20 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tool Comparison</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Side-by-side comparison of tools with detailed feature analysis
              </p>
            </div>

            {/* Submission */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 dark:bg-white/5 dark:border-white/20 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tool Submission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Submit your own AI tools and get featured in our directory
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Explore the Future?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of users discovering the best AI tools for their projects
              </p>

              <a
                href="/"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore AI Tools
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
