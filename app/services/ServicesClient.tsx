import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function Contact() {
  return (
    <>
      <PageLoader />
      <Navbar />
      
      <main className="animate-fade-in-up min-h-screen overflow-x-hidden text-white font-['Averta-Regular'] opac-bg">
        <div
          className="relative isolate pt-50 pb-50 sm:pt-60 sm:pb-24 lg:pt-40 lg:pb-50">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${process.env.BASE_PATH}/assets/image/home-bg.png')` }}
          ></div>
          <FadeUp delay={0.3}>
            <div className="mx-auto max-w-[1200px] px-6 md:px-12">
              <h1
                className="hero-heading md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-10 leading-tight font-['Averta-Bold'] max-w-4xl"
              >
                Discover how we can boost your brand experience
              </h1>

              <div
                className="hero-sub-heading2 flex items-center flex-wrap gap-4 md:gap-8 mt-5 text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mt-10"
              >
                <a href="#creative" className="hover:text-[#f3723b] transition"
                  >CREATIVE</a>

                <span className="text-white hidden md:inline">•</span>

                <a href="#development" className="hover:text-[#f3723b] transition"
                  >DEVELOPMENT</a>

                <span className="text-white hidden md:inline">•</span>

                <a href="#social" className="hover:text-[#f3723b] transition"
                  >SOCIAL MEDIA</a>
              </div>
              <div
                id="creative"
                className="hero-heading6 flex items-center flex-wrap gap-4 md:gap-8 text-sm font-bold tracking-[0.2em] text-gray-400 uppercase"
              >
                <h1 className="text-[#f3723b]">CREATIVE</h1>
              </div>

              <div
                className="flex flex-col gap-16 mb-5 border-b border-white/10 pb-5 last:border-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
                  <div className="w-full md:max-w-[1200px]">
                    <h3
                      className="hero-heading7 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                    >
                      BRAND IDENTITY
                    </h3>
                    <div
                      className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <br />
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                  >
                    <img
                      src="assets/image/creative-1.png"
                      alt="Brand Identity Mockup"
                      className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[80px] md:mr-5 !rounded-none"
                    />
                  </div>
                </div>

                <div className="w-full mt-10 md:mt-0">
                  <h4
                    className="hero-sub-heading4 md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                  >
                    Everything we create is made to perform with purpose
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Creative Direction & Guidelines
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Clear visual and messaging guidance to ensure brand
                        consistency across every touchpoint.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Marketing Design Assets
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Visual assets designed to capture attention and convert
                        audiences across digital and print channels.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Short-Form Video Content
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Engaging videos crafted for Reels, TikTok, product teasers,
                        and behind-the-scenes storytelling.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Content Planning Support
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Content calendars and posting schedules that keep your brand
                        timely, relevant, and consistent.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-16 mb-5 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <div
                    className="flex flex-col md:flex-row items-start gap-10 md:gap-20"
                  >
                    <div className="w-full mt-10 md:mt-0">
                      <h3
                        className="hero-heading9 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                      >
                        GENERATIVE AI STILLS & VIDEO PRODUCTION
                      </h3>
                      <div
                        className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br />
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>

                    <div
                      className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                    >
                      <img
                        src="assets/image/creative-1.png"
                        alt="Brand Identity Mockup"
                        className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[20px] md:mr-5 !rounded-none"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-10 md:mt-0">
                    <h4
                      className="hero-sub-heading4 text-2xl md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                    >
                      Everything we create is made to perform with purpose
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Creative Direction & Guidelines
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Clear visual and messaging guidance to ensure brand
                          consistency across every touchpoint.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Marketing Design Assets
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Visual assets designed to capture attention and convert
                          audiences across digital and print channels.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Short-Form Video Content
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Engaging videos crafted for Reels, TikTok, product
                          teasers, and behind-the-scenes storytelling.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Content Planning Support
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Content calendars and posting schedules that keep your
                          brand timely, relevant, and consistent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="development"
                className="hero-heading10 flex items-center flex-wrap gap-4 md:gap-8 text-sm font-bold tracking-[0.2em] text-gray-400 uppercase"
              >
                <h1 className="text-[#f3723b]">DEVELOPMENT</h1>
              </div>

              <div
                className="flex flex-col gap-16 mb-2 border-white/10 pb-2 last:border-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
                  <div className="w-full md:max-w-[1200px]">
                    <h3
                      className="hero-heading77 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                    >
                      WEBSITE DESIGN & DEVELOPMENT
                    </h3>
                    <div
                      className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <br />
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                  >
                    <img
                      src="assets/image/web-1.png"
                      alt="Brand Identity Mockup"
                      className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[20px] md:mr-5 !rounded-none"
                    />
                  </div>
                </div>

                <div className="w-full mt-10 md:mt-0">
                  <h4
                    className="hero-sub-heading4 md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                  >
                    Everything we create is made to perform with purpose
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Creative Direction & Guidelines
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Clear visual and messaging guidance to ensure brand
                        consistency across every touchpoint.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Marketing Design Assets
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Visual assets designed to capture attention and convert
                        audiences across digital and print channels.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Short-Form Video Content
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Engaging videos crafted for Reels, TikTok, product teasers,
                        and behind-the-scenes storytelling.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Content Planning Support
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Content calendars and posting schedules that keep your brand
                        timely, relevant, and consistent.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-16 mb-5 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <div
                    className="flex flex-col md:flex-row items-start gap-10 md:gap-20"
                  >
                    <div className="w-full mt-10 md:mt-0">
                      <h3
                        className="hero-heading9 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                      >
                        WEB & MOBILE APPLICATIONS
                      </h3>
                      <div
                        className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br />
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>

                    <div
                      className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                    >
                      <img
                        src="assets/image/web-1.png"
                        alt="Brand Identity Mockup"
                        className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[20px] md:mr-5 !rounded-none"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-10 md:mt-0">
                    <h4
                      className="hero-sub-heading4 text-2xl md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                    >
                      Everything we create is made to perform with purpose
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Creative Direction & Guidelines
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Clear visual and messaging guidance to ensure brand
                          consistency across every touchpoint.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Marketing Design Assets
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Visual assets designed to capture attention and convert
                          audiences across digital and print channels.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Short-Form Video Content
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Engaging videos crafted for Reels, TikTok, product
                          teasers, and behind-the-scenes storytelling.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Content Planning Support
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Content calendars and posting schedules that keep your
                          brand timely, relevant, and consistent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-16 mb-5 pb-5last:border-0 last:pb-0">
                  <div
                    className="flex flex-col md:flex-row items-start gap-10 md:gap-20"
                  >
                    <div className="w-full mt-10 md:mt-0">
                      <h3
                        className="hero-heading9 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                      >
                        CMS & CUSTOM SYSTEM
                      </h3>
                      <div
                        className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br />
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>

                    <div
                      className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                    >
                      <img
                        src="assets/image/web-1.png"
                        alt="Brand Identity Mockup"
                        className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[20px] md:mr-5 !rounded-none"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-10 md:mt-0">
                    <h4
                      className="hero-sub-heading4 text-2xl md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                    >
                      Everything we create is made to perform with purpose
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Creative Direction & Guidelines
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Clear visual and messaging guidance to ensure brand
                          consistency across every touchpoint.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Marketing Design Assets
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Visual assets designed to capture attention and convert
                          audiences across digital and print channels.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Short-Form Video Content
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Engaging videos crafted for Reels, TikTok, product
                          teasers, and behind-the-scenes storytelling.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Content Planning Support
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Content calendars and posting schedules that keep your
                          brand timely, relevant, and consistent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="social"
                className="hero-heading10 flex items-center flex-wrap gap-4 md:gap-8 text-sm font-bold tracking-[0.2em] text-gray-400 uppercase pt-10"
              >
                <h1 className="text-[#f3723b]">SOCIAL MEDIA</h1>
              </div>

              <div
                className="flex flex-col gap-16 mb-2 border-b border-white/10 pb-2 last:border-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
                  <div className="w-full md:max-w-[1200px]">
                    <h3
                      className="hero-heading77 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                    >
                      SOCIAL MEDIA STRATEGY
                    </h3>
                    <div
                      className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <br />
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                  >
                    <img
                      src="assets/image/socialmedia-1.png"
                      alt="Brand Identity Mockup"
                      className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[20px] md:mr-5 !rounded-none"
                    />
                  </div>
                </div>

                <div className="w-full mt-10 md:mt-0">
                  <h4
                    className="hero-sub-heading4 md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                  >
                    Everything we create is made to perform with purpose
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Creative Direction & Guidelines
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Clear visual and messaging guidance to ensure brand
                        consistency across every touchpoint.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Marketing Design Assets
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Visual assets designed to capture attention and convert
                        audiences across digital and print channels.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Short-Form Video Content
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Engaging videos crafted for Reels, TikTok, product teasers,
                        and behind-the-scenes storytelling.
                      </p>
                    </div>

                    <div>
                      <h5
                        className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                      >
                        Content Planning Support
                      </h5>
                      <p className="text-gray-400 text-base leading-relaxed">
                        Content calendars and posting schedules that keep your brand
                        timely, relevant, and consistent.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col gap-16 mb-24 border-b border-white/10 pb-24 last:border-0 last:pb-0"
                >
                  <div
                    className="flex flex-col md:flex-row items-start gap-10 md:gap-20"
                  >
                    <div className="w-full mt-10 md:mt-0">
                      <h3
                        className="hero-heading9 text-3xl md:text-4xl font-['Averta-Regular'] text-white mb-6 uppercase tracking-widest"
                      >
                        CONTENT PLANNING & MANAGEMENT
                      </h3>
                      <div
                        className="hero-sub-heading3 text-white font-['Averta-Regular'] leading-relaxed text-lg text-gray-400"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <br />
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>

                    <div
                      className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
                    >
                      <img
                        src="assets/image/socialmedia-1.png"
                        alt="Brand Identity Mockup"
                        className="w-full max-w-[350px] aspect-square object-cover drop-shadow-2xl md:mt-[20px] md:mr-5 !rounded-none"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-10 md:mt-0">
                    <h4
                      className="hero-sub-heading4 text-2xl md:text-3xl text-white font-['Averta-Regular'] mb-12 max-w-2xl"
                    >
                      Everything we create is made to perform with purpose
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Creative Direction & Guidelines
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Clear visual and messaging guidance to ensure brand
                          consistency across every touchpoint.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Marketing Design Assets
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Visual assets designed to capture attention and convert
                          audiences across digital and print channels.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Short-Form Video Content
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Engaging videos crafted for Reels, TikTok, product
                          teasers, and behind-the-scenes storytelling.
                        </p>
                      </div>

                      <div>
                        <h5
                          className="text-white text-lg font-bold mb-3 uppercase tracking-wide"
                        >
                          Content Planning Support
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Content calendars and posting schedules that keep your
                          brand timely, relevant, and consistent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
        
      </main>

      <Footer />
    </>
  );
}