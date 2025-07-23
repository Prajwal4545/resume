// src/pages/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-800">Contact Me</h2>

        <p className="mt-6 text-center text-gray-700">
          Have a question or want to work together? I'd love to hear from you!
        </p>

        {/* Email Section */}
        <div className="mt-6 text-center">
          <a
            href="mailto:surpurprajwal@gmail.com"
            className="text-lg font-semibold text-blue-600 underline hover:text-blue-800"
          >
            surpurprajwal@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8 text-purple-800 text-2xl">
          <a href="https://github.com/surpurprajwal" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/surpurprajwal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="mailto:surpurprajwal@gmail.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white">
        <div className="container px-5 py-6 mx-auto flex items-center justify-between">
          <p className="text-sm">© 2025 Prajwal Surpur — All rights reserved</p>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="hover:text-blue-400">Privacy</a>
            <a href="/terms-of-service" className="hover:text-blue-400">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
