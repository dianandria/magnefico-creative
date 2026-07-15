"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import FadeUp from "@/components/FadeUp";

export default function AboutPage() {
  return (
    <>
      <PageLoader />
      <Navbar />

      {/* Main Container: Background navy gelap menyesuaikan tema */}
      <FadeUp delay={0.4}>
        <main className="animate-fade-in-up min-h-screen opac-bg font-['Averta-Regular'] overflow-hidden">
          
          {/* HERO SECTION */}
          <section className="relative pt-40 md:pt-48 pb-10 flex flex-col items-center justify-center text-center px-6 max-w-[900px] mx-auto">
            {/* <h1 className="about-hero-span font-['Averta-Bold']">
              Get the Benefits Of <br />
              the <span className="relative inline-block">
                Digital Frontier
                <span className="animate-loop-bar absolute -bottom-1 md:-bottom-2 left-0 h-[3px] md:h-[4px] bg-[#f97316] rounded-full"></span>
              </span>
            </h1>
            <p className="text-[#8ba3b8] text-[13px] md:text-[15px] max-w-[500px] leading-[1.7]">
              At Magnefico, we stay ahead of trends and technology to deliver
              optimal, forward-thinking solutions for your brand.
            </p> */}

            <div className="about-hero-content">
              <h1 className="group about-hero-title">
                <span className="about-hero-span">
                  Get the Benefits Of
                </span>
                <span className="about-hero-span">
                  the&nbsp;<span className="relative inline-block">
                    Digital Frontier
                    <span className="animate-loop-bar absolute -bottom-3 left-0 h-[4px] sm:h-[6px] bg-[#f3723b] rounded-full w-full"></span>
                  </span>
                </span>
              </h1>
              <p className="about-hero-desc">
                At Magnefico, we stay ahead of trends and technology to deliver
                optimal, forward-thinking solutions for your brand.
              </p>
            </div>
          </section>

          {/* SCROLL INDICATOR */}
          {/* <div className="flex flex-col items-center justify-center mt-12 mb-28 md:mb-40">
            <span className="text-[9px] font-bold tracking-[0.3em] text-[#64748b] uppercase mb-4">
              SCROLL
            </span>
            <div className="w-[1px] h-16 bg-[#334155] relative overflow-hidden">
              <div className="w-full h-1/2 bg-[#f97316] animate-scroll-line"></div>
            </div>
          </div> */}
          <div className="w-full flex justify-center relative z-20 shrink-0 mb-16 md:mb-20">
            <div className="flex flex-col items-center gap-4 opacity-70">
              <span className="about-scroll-text">Scroll</span>
              <div className="about-scroll-line-bg">
                <div className="about-scroll-line-active animate-scroll-line"></div>
              </div>
            </div>
          </div>

          {/* INTRO TEXT SECTION */}
          <section className="mx-auto max-w-[1200px] mb-32 md:mb-48">
            <div className="container-box relative z-10 w-full shrink-0">
              <div className="about-intro-grid">
                <div className="about-intro-left">
                  <h1 className="about-intro-heading">
                    <span className="relative inline-block">
                      Founded in 2014,
                      <span className="animate-loop-bar absolute -bottom-1 left-0 h-[4px] bg-[#f3723b] rounded-full"></span>
                    </span>
                    &nbsp;Magnefico has worked on thousands of projects
                    <span className="relative inline-block">
                      &nbsp;across various
                      <span className="animate-loop-bar absolute -bottom-1 left-0 h-[4px] bg-[#f3723b] rounded-full" style={{ animationDelay: "0.5s" }}></span>
                    </span>
                    <span className="relative inline-block">
                      industries,
                      <span className="animate-loop-bar absolute -bottom-1 left-0 h-[4px] bg-[#f3723b] rounded-full" style={{ animationDelay: "1s" }}></span>
                    </span>
                    &nbsp;collaborating with
                    <span className="relative inline-block">
                      clients from all over the world.
                    </span>
                  </h1>
                </div>
                <div className="about-intro-right">
                  <p className="about-intro-text">
                    Our experience with diverse clients has shaped our
                    professionalism—training us to work with precision, dedication,
                    and a strong focus on results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* OUR TEAMS SECTION */}
          <section className="about-team-section">
            <div className="container-box px-4 md:px-6">
              <div className="about-team-header-box">
                <h2 className="section-title mb-3">Our Teams</h2>
              </div>

              <div className="about-team-grid">
                <div className="group about-team-card up">
                  <img src="./assets/image/designer.jpg" className="about-team-img" alt="Team 1" />
                  <div className="about-team-overlay">
                    <span className="about-team-role">Creative Lead</span>
                  </div>
                </div>

                <div className="group about-team-card down">
                  <img src="./assets/image/designer.jpg" className="about-team-img" alt="Team 2" />
                  <div className="about-team-overlay">
                    <span className="about-team-role">Tech Lead</span>
                  </div>
                </div>

                <div className="group about-team-card up">
                  <img src="./assets/image/designer.jpg" className="about-team-img" alt="Team 3" />
                  <div className="about-team-overlay">
                    <span className="about-team-role">Art Director</span>
                  </div>
                </div>

                <div className="group about-team-card down">
                  <img src="./assets/image/designer.jpg" className="about-team-img" alt="Team 4" />
                  <div className="about-team-overlay">
                    <span className="about-team-role">Project Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MISSION SECTION (Full Width Image with Gradient) */}
          <section className="about-mission-section">
            <div className="about-mission-bg-wrap">
              <img src="./assets/image/designer.jpg" className="about-mission-img" alt="Team Working" />
              <div className="about-mission-gradient"></div>
            </div>

            <div className="container-box about-mission-content-wrap">
              <div className="about-mission-box">
                <h2 className="about-mission-title">
                  A
                  <span className="relative inline-block">
                    goal-oriented team
                    <span className="animate-loop-bar absolute -bottom-1 left-0 h-[4px] md:h-[6px] bg-[#f3723b] rounded-full"></span>
                  </span>
                  <br />
                  made up of
                  <span className="relative inline-block">
                    experts in their fields.
                    <span className="animate-loop-bar absolute -bottom-1 left-0 h-[4px] md:h-[6px] bg-[#f3723b] rounded-full" style={{ animationDelay: '0.5s' }}></span>
                  </span>
                </h2>
                <p className="about-mission-desc">
                  We continuously strive to deliver exactly what our clients
                  need—executed with care, creativity, and purpose.
                </p>
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="about-cta-section">
            <div className="container-box about-cta-wrap">
              <div className="about-cta-box">
                <h2 className="about-cta-title">
                  Interested in Working<br />With Us?
                </h2>
                <p className="about-cta-desc">
                  We're always looking for talented individuals who are passionate
                  about creativity, technology, and making meaningful work.
                </p>
              </div>
            </div>
          </section>

        </main>
      </FadeUp>

      <Footer />
    </>
  );
}