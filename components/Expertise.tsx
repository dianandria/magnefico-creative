import Image from 'next/image';

export default function Expertise() {
  return (
    <section className="py-20 bg-[#0b1015]">
        <div className="container-box">
          <h2
            className="text-[#f3723b] text-xl md:text-2xl uppercase tracking-[0.3em] text-center mb-15 font-['Averta-Bold']"
          >
            EXPERTISE
          </h2>

          <div
            className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px] px:10"
          >
            <div
              className="group relative w-full md:w-1/3 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ease-in-out hover:md:w-1/2 h-[300px] md:h-auto"
            >
              <Image
                src="/web-v2/assets/image/CreativeThumb.png"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 opacity-40"
                alt="Creative Thumbnail"
                fill
              />

              <Image
                src="/web-v2/assets/image/Creative2.png"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                alt="Creative Full"
                fill
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:via-black/20"
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span
                  className="hidden md:block absolute top-8 left-8 text-gray-400 text-xs tracking-widest uppercase rotate-180 transition-opacity duration-300 md:group-hover:opacity-0"
                  style={{ writingMode: 'vertical-rl' }}
                  >CREATIVE DIRECTION</span>
                <div
                  className="transform transition-all duration-500 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  <span
                    className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block"
                    >Creative Direction</span>
                  <h3
                    className="text-white text-3xl font-bold uppercase tracking-wider mb-3"
                  >
                    Creative
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                    Crafting visual identities that speak louder than words.
                    From UI/UX Design to full Art Direction.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group relative w-full md:w-1/3 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ease-in-out hover:md:w-1/2 h-[300px] md:h-auto"
            >
              <Image
                src="/web-v2/assets/image/Development.png"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 opacity-40"
                alt="Dev Thumbnail"
                fill
              />

              <Image
                src="/web-v2/assets/image/web.png"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                alt="Development Full"
                fill
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:via-black/20"
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span
                  className="hidden md:block absolute top-8 left-8 text-gray-400 text-xs tracking-widest uppercase rotate-180 transition-opacity duration-300 md:group-hover:opacity-0"
                  style={{ writingMode: 'vertical-rl' }}
                  >DEVELOPMENT</span>
                <div
                  className="transform transition-all duration-500 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  <span
                    className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block"
                    >Development</span>
                  <h3
                    className="text-white text-3xl font-bold uppercase tracking-wider mb-3"
                  >
                    Dev
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                    Bringing designs to life with clean code. Expertise in
                    Fullstack, Frontend, and Creative Coding.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group relative w-full md:w-1/3 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ease-in-out hover:md:w-1/2 h-[300px] md:h-auto"
            >
              <Image
                src="/web-v2/assets/image/DigitalMarketing.png"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 opacity-40"
                alt="Marketing Thumbnail"
                fill
              />

              <Image
                src="/web-v2/assets/image/marketing2.png"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                alt="Marketing Full"
                fill
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:via-black/20"
              ></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span
                  className="hidden md:block absolute top-8 left-8 text-gray-400 text-xs tracking-widest uppercase rotate-180 transition-opacity duration-300 md:group-hover:opacity-0"
                  style={{ writingMode: 'vertical-rl' }}
                  >DIGITAL MARKETING</span>
                <div
                  className="transform transition-all duration-500 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  <span
                    className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block"
                    >Marketing</span>
                  <h3
                    className="text-white text-3xl font-bold uppercase tracking-wider mb-3"
                  >
                    Marketing
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                    Connecting brands with people. SEO, Social Media Management,
                    and Performance Ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}