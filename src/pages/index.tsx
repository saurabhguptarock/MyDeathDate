import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const countdown = document.querySelector(".countdown");

    const launchDate = new Date("Aug 28, 2069 12:00:00").getTime();

    const intvl = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (!countdown) return;

      countdown.innerHTML = `
      <div>${days}<span>DAYS</span></div>
      <div>${("0" + hours).slice(-2)}<span>HOURS</span></div>
      <div>${("0" + mins).slice(-2)}<span>MINUTES</span></div>
      <div>${("0" + sec).slice(-2)}<span>SECONDS</span></div>
      `;
    }, 1000);

    return () => clearInterval(intvl);
  }, []);

  return (
    <div>
      <Head>
        <title>Death Date</title>
      </Head>

      <div className="container mx-auto">
        <section className="h-screen">
          <div className="top-0 left-0 flex items-center justify-center w-full h-full text-center">
            <h1 className="flex flex-col items-center justify-center text-center md:flex-row countdown"></h1>
          </div>
        </section>
      </div>
    </div>
  );
}
