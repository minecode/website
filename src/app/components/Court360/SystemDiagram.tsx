import { motion } from 'motion/react';
import { Cloud, Wifi, Activity, Trophy, Tablet, Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GridBackground, SectionHeader } from '../common';
import Section from '../common/Section';

export function SystemDiagram() {
  return (
    <section className="py-24 relative">
      <GridBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          title="How Does It Work?"
          description="A complete and integrated ecosystem for a revolutionary gaming experience"
        />

        <div className="md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-6 mb-6 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10"></div>
            <img
              src='/images/court.png'
              alt="Padel Court"
              className="w-full h-full object-contain opacity-90"
            />

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 z-30"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#98ef3c]/40 blur-3xl rounded-full animate-pulse"></div>
                <div className="relative px-8 py-4 bg-black/95 backdrop-blur-2xl border-2 border-[#98ef3c] rounded-2xl shadow-2xl hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Cloud className="w-10 h-10 text-[#98ef3c]" />
                      <div className="absolute -inset-1 bg-[#98ef3c]/20 blur-md rounded-full"></div>
                    </div>
                    <div className='text-center'>
                      <div className="text-xl font-bold text-white">Court<b>360</b></div>
                      <div className="text-xs text-[#98ef3c]">System</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-16 right-4 lg:top-20 lg:right-8 z-30 max-w-[220px] lg:max-w-[260px]"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#98ef3c]/30 blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-black/95 backdrop-blur-xl border-2 border-[#98ef3c]/60 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <div className="p-4">
                    <div className="mb-3 relative rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1736729654379-daa07a3629cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzY29yZWJvYXJkJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NzQ5NDcwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Monitor Scoreboard"
                        className="w-full h-auto aspect-video object-cover rounded-lg border-2 border-[#98ef3c]/40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#98ef3c] mb-1">15 - 40</div>
                          <div className="text-xs text-gray-300">SET 2 • LIVE</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-xs font-bold text-white mb-1">Court Monitor</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-16 left-8 lg:bottom-20 lg:left-16 z-20 max-w-[240px] lg:max-w-[280px]"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#98ef3c]/30 blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-black/95 backdrop-blur-xl border-2 border-[#98ef3c]/60 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <div className="p-5">
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <Wifi className="w-12 h-12 text-[#98ef3c]" />
                        <div className="absolute -inset-2 bg-[#98ef3c]/20 blur-lg rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-sm font-bold text-white mb-2">Wearable IoT</div>
                      <div className="text-[11px] text-gray-400 leading-relaxed">
                        Device in the player's possession for real-time score control
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[200px] lg:max-w-[240px]"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#98ef3c]/30 blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-black/95 backdrop-blur-xl border-2 border-[#98ef3c]/60 rounded-xl p-3 shadow-2xl hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-20 rounded-lg overflow-hidden border-2 border-[#98ef3c]/40 flex-shrink-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1764407289458-c74dca81d16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NDk0NjAyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Smartphone"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 flex items-center justify-center">
                        <div className="text-[#98ef3c] text-xs font-bold">360</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-white mb-1">App Mobile</div>
                      <div className="text-[10px] text-gray-400 mb-1">Join match, real-time score control and statistics</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <Section title="Club Dashboard" description="Centralized dashboard to view all games simultaneously in real-time" icon={Activity}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { court: 1, score: '30-0', set: 1, status: 'LIVE' },
              { court: 2, score: '15-15', set: 2, status: 'LIVE' },
              { court: 3, score: '40-30', set: 1, status: 'LIVE' },
              { court: 4, score: '40-AD', set: 3, status: 'LIVE' },
            ].map((game) => (
              <motion.div
                key={game.court}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-[#98ef3c]/30 rounded-lg p-4 text-center hover:border-[#98ef3c]/60 transition-all"
              >
                <div className="text-xs text-gray-400 mb-2">Court {game.court}</div>
                <div className="text-2xl font-bold text-[#98ef3c] mb-1">{game.score}</div>
                <div className="text-[11px] text-gray-500">SET {game.set} • {game.status}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Referee System" description="Advanced control for tournaments with foul management and detailed statistics" icon={Tablet}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 bg-black/50 border border-[#98ef3c]/30 rounded-lg">
              <span className="text-sm text-gray-300">Match Configuration</span>
              <Check className="w-5 h-5 text-[#98ef3c]" />
            </div>
            <div className="flex items-center justify-between p-3 bg-black/50 border border-[#98ef3c]/30 rounded-lg">
              <span className="text-sm text-gray-300">Advanced Score Control</span>
              <Check className="w-5 h-5 text-[#98ef3c]" />
            </div>
            <div className="flex items-center justify-between p-3 bg-black/50 border border-[#98ef3c]/30 rounded-lg">
              <span className="text-sm text-gray-300">Real-Time Analytics</span>
              <Check className="w-5 h-5 text-[#98ef3c]" />
            </div>
          </div>
        </Section>

        <Section title="Match Statistics" description="Detailed analytics for players and matches, accessible via the app and web dashboard" icon={Trophy}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-black/50 border border-[#98ef3c]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#98ef3c] mb-1">Points Won</div>
              <div className="text-xs text-gray-400">On service</div>
            </div>
            <div className="text-center p-4 bg-black/50 border border-[#98ef3c]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#98ef3c] mb-1">Service</div>
              <div className="text-xs text-gray-400">Efficiency</div>
            </div>
            <div className="text-center p-4 bg-black/50 border border-[#98ef3c]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#98ef3c] mb-1">Break</div>
              <div className="text-xs text-gray-400">Points</div>
            </div>
            <div className="text-center p-4 bg-black/50 border border-[#98ef3c]/20 rounded-xl">
              <div className="text-3xl font-bold text-[#98ef3c] mb-1">Tie</div>
              <div className="text-xs text-gray-400">Breaks</div>
            </div>

          </div>
        </Section>

        <Section background={false}>
          <div className="p-24 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#98ef3c] mb-2">For everyone</div>
              <p className="text-gray-400">For all players, from beginners to professionals</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#98ef3c] mb-2">Strava</div>
              <p className="text-gray-400">Share your performance with the world</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#98ef3c] mb-2">History</div>
              <p className="text-gray-400">Access detailed match history</p>
            </div>
          </div>
        </Section>

        <Section title="Summary" description="What Court360 is and the core benefits it delivers" icon={Activity} background={false}>
          <p className="text-sm leading-7 text-gray-300">
            Court<b>360</b> is an padel score ecosystem that connects portable and court-installed devices with our cloud software. It makes amateur players feel more professional while simplifying match and tournament management for clubs.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-black/50 p-4 border border-[#98ef3c]/15">
              <h4 className="text-sm font-semibold text-white">Live scoring</h4>
              <p className="mt-2 text-xs text-gray-300">Follow game score updates in real time.</p>
            </div>
            <div className="rounded-2xl bg-black/50 p-4 border border-[#98ef3c]/15">
              <h4 className="text-sm font-semibold text-white">Match history</h4>
              <p className="mt-2 text-xs text-gray-300">Store games, statistics, and performance data automatically.</p>
            </div>
            <div className="rounded-2xl bg-black/50 p-4 border border-[#98ef3c]/15">
              <h4 className="text-sm font-semibold text-white">Tournament support</h4>
              <p className="mt-2 text-xs text-gray-300">Scale from club matches to large competitions with ease.</p>
            </div>
            <div className="rounded-2xl bg-black/50 p-4 border border-[#98ef3c]/15">
              <h4 className="text-sm font-semibold text-white">Social impact</h4>
              <p className="mt-2 text-xs text-gray-300">Improve competitive and community experiences on every court.</p>
            </div>
            <div className="rounded-3xl border border-[#98ef3c]/20 bg-gradient-to-br from-gray-950 to-gray-900 p-6 shadow-2xl">
              <h4 className="text-sm font-semibold text-[#98ef3c] uppercase tracking-[0.2em]">Players</h4>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                <li>• Match history and performance analytics on mobile app.</li>
                <li>• Portable Bluetooth score buttons paired with the app.</li>
                <li>• No club infrastructure needed, perfect for casual play and improving player engagement.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#98ef3c]/20 bg-gradient-to-br from-gray-950 to-gray-900 p-6 shadow-2xl">
              <h4 className="text-sm font-semibold text-[#98ef3c] uppercase tracking-[0.2em]">Clubs</h4>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                <li>• Better player satisfaction and retention.</li>
                <li>• More visual and interactive match experiences.</li>
                <li>• Increased court value and premium services.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Tournament Support" description="Flexible options for club and standalone competition use" icon={Trophy} background={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#98ef3c]/20 bg-gradient-to-br from-gray-950 to-gray-900 p-6 shadow-2xl">
              <h4 className="text-sm font-semibold text-[#98ef3c] uppercase tracking-[0.2em]">Integrated</h4>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Clubs with Court<b>360</b> license can use the tournament platform via monthly add-on or per-event fee, using installed screens and devices.
              </p>
            </div>
            <div className="rounded-3xl border border-[#98ef3c]/20 bg-gradient-to-br from-gray-950 to-gray-900 p-6 shadow-2xl">
              <h4 className="text-sm font-semibold text-[#98ef3c] uppercase tracking-[0.2em]">Standalone</h4>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Clubs without Court<b>360</b> license can license the tournament platform per event for bracket management, results, and rankings.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
