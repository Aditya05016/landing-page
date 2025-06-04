import { Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 items-start">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400">AIMestro</h1>
          <p className="text-sm text-gray-400 mt-2">Creating modern solutions for modern problems.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={24} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={24} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={24} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
     © {new Date().getFullYear()} AIMestro. All rights reserved.

      </div>
    </footer>
  );
};

export default Footer;
