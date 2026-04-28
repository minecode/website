import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-[#98ef3c] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          <div className="text-2xl font-bold bg-gradient-to-r text-white text-transparent bg-clip-text">
            COURT<b className='text-[#98ef3c]'>360</b>
          </div>
        </div>
      </nav>

  );
}
