import { SettingsData } from "../app/page"; // Adjust import path based on where Home is located

interface VideoSectionProps {
  data: SettingsData;
}

export default function VideoSection({ data }: VideoSectionProps) {
  return (
    <section className="group relative bg-gray-900 py-32 overflow-hidden flex flex-col justify-center items-center min-h-[80vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-50"
      >
        <source src={data.home_video} type="video/mp4" />
      </video>

      <div className="relative z-10 text-center pb-4 px-4 w-full">
        <h1 className="video-heading group w-full mx-auto flex flex-col items-center justify-center gap-2 font-bold tracking-tight text-white leading-tight">
          <span className="relative inline-block py-2 whitespace-nowrap text-[12vw] sm:text-7xl">
            Make and be
            <span className="absolute -bottom-2 left-0 h-[4px] sm:h-[6px] w-0 bg-[#f3723b] transition-all duration-[1000ms] ease-out group-hover:w-full rounded-full"></span>
          </span>
          <span className="relative inline-block py-2 whitespace-nowrap text-[8vw] sm:text-7xl">
            whatever you want
            <span className="absolute -bottom-2 left-0 h-[4px] sm:h-[6px] w-0 bg-[#f3723b] transition-all duration-[1000ms] ease-out group-hover:w-full delay-150 rounded-full"></span>
          </span>
        </h1>
        <p className="section-sub-heading text-white mt-6 font-medium text-pretty text-center opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2 w-full mx-auto max-w-4xl text-sm sm:text-xl">
          We are expertise on creating high profile AI generative video and graphic
        </p>
      </div>
    </section>
  );
}