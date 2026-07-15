"use client";

import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import Footer from "@/components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import FadeUp from "@/components/FadeUp";

export default function Contact() {  
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    const captchaToken = recaptchaRef.current?.getValue();

    if (!captchaToken) {
      setStatus("Silakan centang kotak CAPTCHA terlebih dahulu.");
      return;
    }

    // Gunakan FormData (Ini cara yang 100% aman dari error TypeScript untuk mengambil data form)
    const form = e.currentTarget;
    const formValues = new FormData(form);

    const formData = {
      name: formValues.get("name"),
      company: formValues.get("company"),
      email: formValues.get("email"),
      phone: formValues.get("phone"),
      subject: formValues.get("subject"),
      message: formValues.get("message"),
      token: captchaToken, 
    };

    // 3. Setup URL dan Header (seperti standar Anda)
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    try {
      // 4. Hit API Laravel
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "x-api-key": apiKey as string,
          "Content-Type": "application/json",
          "Accept": "application/json", // Penting: Agar Laravel me-return JSON saat validasi gagal, bukan redirect HTML
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Result dari server:", result);
      // 5. Cek status 'success' dari backend
      if (response.ok && result.success) {
        setStatus("Pesan berhasil dikirim!");
        form.reset(); // Kosongkan form
        recaptchaRef.current?.reset(); // Reset CAPTCHA
      } else {
        // Tampilkan pesan error bawaan dari response API Laravel (jika ada)
        setStatus(result.message || "Gagal mengirim pesan. Silakan coba lagi.");
        console.error("Error dari server:", result.errors || result);
      }

    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <PageLoader />
      <Navbar />
      
      <main className="animate-fade-in-up min-h-screen opac-bg overflow-x-hidden text-white font-['Averta-Regular'] bg-[#0b1015]">
       <FadeUp delay={0.4}>
          <div
            className="opac-bg relative isolate min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
          >
            <div
              className="container-box flex flex-col items-start pt-32 md:pt-40 pb-20 w-full max-w-[1200px] mx-auto px-6 md:px-12"
            >
              <div className="w-full text-left z-10 relative mb-16 md:mb-24">
                <h1
                  className="font-bold tracking-tight text-white leading-tight text-3xl sm:text-4xl md:text-5xl font-['Averta-Bold']"
                >
                  Have a
                  <span className="relative inline-block whitespace-nowrap">
                    &nbsp;Project in Mind?
                    <span
                      className="animate-loop-bar absolute -bottom-3 left-0 h-[4px] sm:h-[6px] w-full bg-[#f3723b] rounded-full"
                    ></span>
                  </span>
                </h1>

                <p
                  className="text-white mt-8 text-lg lg:text-xl leading-relaxed text-left max-w-2xl font-['Averta-Regular']"
                >
                  Have a chat with us and we will try to give our best input!
                </p>
              </div>

              <div
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-b border-gray-800 pb-20"
              >
                <div>
                  <h3
                    className="text-xl font-bold tracking-[0.2em] text-white uppercase mb-4 font-['Averta-Bold']"
                  >
                    EMAIL
                  </h3>
                  <a
                    href="mailto:hello@magneficocreative.com"
                    className="text-base md:text-l text-white underline decoration-gray-600 underline-offset-8 decoration-1 hover:text-[#f3723b] hover:decoration-[#f3723b] transition duration-300 break-all font-['Averta-Regular']"
                  >
                    hello@magneficocreative.com
                  </a>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold tracking-[0.2em] text-white uppercase mb-4 font-['Averta-Bold']"
                  >
                    WHATSAPP
                  </h3>
                  <a
                    href="https://wa.me/62838209000000"
                    className="text-base md:text-l text-white underline decoration-gray-600 underline-offset-8 decoration-1 hover:text-[#f3723b] hover:decoration-[#f3723b] transition duration-300 font-['Averta-Regular']"
                  >
                    +62 8382 0900 0000
                  </a>
                </div>
              </div>

              <div className="w-full">
                <h3
                  className="text-xl font-bold tracking-[0.2em] text-white uppercase mb-12 font-['Averta-Bold']"
                >
                  CONTACT US
                </h3>

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="form-group relative">
                      <input
                        type="text"
                        id="full-name"
                        name="name"
                        className="font-['Averta-Regular'] form-input peer w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#f3723b] placeholder-transparent transition-colors"
                        placeholder=" "
                        required
                      />
                      <label className="font-['Averta-Regular'] form-label absolute left-0 top-3 text-white text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-500"
                        >Full Name</label>
                    </div>
                    <div className="form-group relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="font-['Averta-Regular'] form-input peer w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#f3723b] placeholder-transparent transition-colors"
                        placeholder=" "
                      />
                      <label
                        className="font-['Averta-Regular'] form-label absolute left-0 top-3 text-white text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-500"
                        >Company</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="form-group relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="font-['Averta-Regular'] form-input peer w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#f3723b] placeholder-transparent transition-colors"
                        placeholder=" "
                        required
                      />
                      <label
                        className="font-['Averta-Regular'] form-label absolute left-0 top-3 text-white text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-500"
                        >Email</label>
                    </div>
                    <div className="form-group relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="font-['Averta-Regular'] form-input peer w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-[#f3723b] placeholder-transparent transition-colors"
                        placeholder=" "
                      />
                      <label
                        className="font-['Averta-Regular'] form-label absolute left-0 top-3 text-white text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-500"
                        >Phone</label>
                    </div>
                  </div>

                  <div className="form-group relative mt-4">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="font-['Averta-Regular'] form-input peer w-full bg-transparent border-b border-gray-600 !pt-7 !pb-2 text-white focus:outline-none focus:border-[#f3723b] placeholder-transparent transition-colors"
                      placeholder=" "
                      required
                    />

                    <label
                      className="font-['Averta-Regular'] form-label absolute left-0 top-7 text-gray-400 text-base transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500"
                    >
                      Subject
                    </label>
                  </div>

                  <div className="form-group relative mt-8">
                    <textarea
                      name="message"
                      rows={4}
                      className="font-['Averta-Regular'] form-input peer w-full bg-transparent border-b border-gray-600 !pt-7 !pb-2 text-white focus:outline-none focus:border-[#f3723b] placeholder-transparent transition-colors resize-none overflow-hidden"
                      placeholder=" "
                      required
                      
                    ></textarea>

                    <label
                      htmlFor="message"
                      className="font-['Averta-Regular'] form-label absolute left-0 top-7 text-gray-400 text-base transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500"
                    >
                      Message
                    </label>
                  </div>

                  <div className="pt-6">
                    <div
                      className="bg-[#1a1f26] w-fit px-4 py-3 rounded border border-gray-700 flex items-center gap-4 mb-10"
                    >
                      {/* <input
                        type="checkbox"
                        className="w-6 h-6 rounded border-gray-500 bg-transparent cursor-pointer text-[#f3723b] focus:ring-0"
                      />
                      <span className="text-sm text-gray-300 font-['Averta-Regular']"
                        >I'm not a robot</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"
                        alt="Captcha"
                        className="h-8 w-auto ml-4 opacity-70"
                      /> */}
                      {/* Widget reCAPTCHA */}
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "Mengirim..."}
                      className="hero-btn hover:bg-[#f3723b] hover:text-white hover:border-[#f3723b] text-white px-10 py-4 rounded-full transition-all duration-300 text-sm tracking-[0.2em] uppercase font-['Averta-Bold']"
                    >
                      {status === "Mengirim..." ? "SENDING..." : "SEND MESSAGE"}
                    </button>

                    {status && (
                      <p className={`mt-4 text-sm font-['Averta-Regular'] ${
                        status.includes("berhasil") ? "text-green-500" : 
                        status.includes("Mengirim") ? "text-gray-400" : "text-red-500"
                      }`}>
                        {status}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </FadeUp>
      </main>

      <Footer />
    </>
  );
}