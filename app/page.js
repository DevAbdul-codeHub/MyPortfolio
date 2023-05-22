import Head from "next/head";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, aiFillFilePdf } from "react-icons/ai"; 
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdul Rahman Portofolio</title>
        <meta name="description" content="Generated by" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md-px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">AbDuL</h1>
            <ul className="flex items-center">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-2xl"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </li>
              <li>
                {/* bg-fuchsia */}
                <a
                  className="bg-le bg-gradient-to-r from-fuchsia-500 to-yellow-600 text-white px-4 py-2 rounded-md  ml-8"
                  href="https://github.com/DevAbdul-codeHub?tab=repositories"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-fuchsia-500 to-yellow-600 text-white px-4 py-2 rounded-md  ml-8"
                  href="https://www.linkedin.com/in/abdul-ar/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-fuchsia-500 to-yellow-600 text-white px-4 py-2 rounded-md  ml-8"
                  href="https://www.linkedin.com/in/abdul-ar/"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <Image
              src="/../public/apic.png"
              width={330}
              height={330}
              alt="Picture of the author"
              className="relative mx-auto bg-gradient-to-b rounded-full mt-20 overflow-hidden"
            />
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl ppy-2 text-fuchsia-600 font-medium">
              Hello, I am Abdul Rahman
            </h2>
            <h3 className="text-2xl text-yellow-600 py-2">
              Frontend Developer with Expertise in MERN Stack and Tailwind CSS
            </h3>
            <p className="text-md py-5 leading-8 text-gay-800">
              Welcome to my portfolio website!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 ">
            <a
              href="https://github.com/DevAbdul-codeHub?tab=repositories"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdul-ar/" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
        </section>

        {/* SKILLS Section 2 */}
        <section className="mt-10 flex justify-center gap-16 py-3">
          <h3 className="text-3xl py-1">Skills</h3>{" "}
        </section>
        <section className="flex justify-center gap-16 py-3">
          <Skills />
        </section>

        {/*  */}
        {/*  Porotfolio Section  */}
        <section className="mt-10 flex justify-center gap-16 py-3">
          <Portfolio />
        </section>
        {/*  */}
      </main>
    </div>
  );
}
