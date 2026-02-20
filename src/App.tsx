import { Rocket, Lightbulb, TrendingUp } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Navbar */}
      <nav className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Gardine
          </a>
          <div className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-70"></div>
          {/* Subtle animated background */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 animate-fade-in-up">
              Unlock Your Potential with Gardine
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
              Powerful tools and intuitive design to help you achieve your goals faster and more efficiently.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-1000">
              Get Started Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-100">Why Choose Gardine?</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Rocket className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-50">Blazing Fast</h3>
                <p className="text-gray-300">Experience unparalleled speed and performance designed to keep you productive.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Lightbulb className="w-16 h-16 text-purple-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-50">Innovative Ideas</h3>
                <p className="text-gray-300">Unlock new possibilities with our cutting-edge features and smart solutions.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <TrendingUp className="w-16 h-16 text-pink-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-50">Growth Focused</h3>
                <p className="text-gray-300">Tools and insights to help you grow and scale your projects effortlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied users who are already experiencing the Gardine difference.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              Sign Up For Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gardine. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


