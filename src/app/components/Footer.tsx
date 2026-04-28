import { Github, Linkedin } from 'lucide-react';
import { Logo } from '../../imports/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'Github' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo size={80} />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              We turn ideas into code. We develop innovative digital solutions that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#98ef3c] hover:bg-white/10 hover:border-[#98ef3c]/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} Minecode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
