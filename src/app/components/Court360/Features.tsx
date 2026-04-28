import { Monitor, Cloud, BarChart3, Trophy, Settings, Smartphone } from 'lucide-react';
import { SectionHeader, GridBackground, AnimatedListItem } from '../common';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface FeaturesProps {
  features?: Feature[];
}

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: Monitor,
    title: 'Digital Scoreboard',
    description: 'Track scores for multiple games in real time with an intuitive and responsive interface.'
  },
  {
    icon: Cloud,
    title: 'Custom configurations',
    description: 'Personalize the game and scoring rules to suit your complex.'
  },
  {
    icon: BarChart3,
    title: 'Analytics System',
    description: 'Access detailed statistics for each game, player performance, and complete history for analysis.'
  },
  {
    icon: Trophy,
    title: 'Competition mode',
    description: 'Organize tournaments and competitions with ease, managing game brackets, and show results.'
  },
  {
    icon: Settings,
    title: 'Easy setup',
    description: 'Quick and easy setup, allowing you to be ready to use.'
  },
  {
    icon: Smartphone,
    title: 'App Mobile',
    description: 'Track games and scores directly from your smartphone.'
  },
];

export function Features({ features = DEFAULT_FEATURES }: FeaturesProps) {
  return (
    <section className="py-24 relative">
      <GridBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          title="Main Features"
          description="Everything you need to manage your padel clube efficiently"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedListItem
                key={feature.title}
                index={index}
                className="group p-8 bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-2xl hover:border-[#98ef3c]/30 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-[#98ef3c]/10 border border-[#98ef3c]/30 flex items-center justify-center mb-6 group-hover:bg-[#98ef3c]/20 group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-[#98ef3c]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedListItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
