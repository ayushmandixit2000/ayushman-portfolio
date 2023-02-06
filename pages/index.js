import Head from "next/head";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import ayushman from "../public/ayushman.png";
import stocks from "../public/stocks.png";
import m from "../public/m.png";
import hca from "../public/hca.png";
import nc from "../public/nc.png";
import tm from "../public/tm.png";
import lp from "../public/lp.png";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { IoMdPlanet } from "react-icons/io";


export default function Home() {
  const [DarkMode, setDarkMode] = useState(true);

  return (
    <div className={DarkMode ? "dark" : ""}>
      <Head>
        <title>Ayushman's Portfolio</title>
        <meta name="description" content="Ayushman Dixit's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="">
          <nav className="py-10 flex justify-center">
            <ul className="flex items-center">
              {DarkMode ? (
                <li>
                  <BsSunFill
                    onClick={() => setDarkMode(!DarkMode)}
                    className="cursor-pointer text-xl text-yellow-100"
                  />
                </li>
              ) : (
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!DarkMode)}
                    className="cursor-pointer text-xl text-yellow-300"
                  />
                </li>
              )}
              {DarkMode ? (
                <li>
                  <a
                    className="bg-gradient-to-r from-yellow-600 to-yellow-300 text-black px-4 py-2 rounded-md ml-8"
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1KcswohW0hwR4hyPgbXaCxeu6m4po_rcj/view?usp=share_link"
                  >
                    Resume
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1KcswohW0hwR4hyPgbXaCxeu6m4po_rcj/view?usp=share_link"
                  >
                    Resume
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <div className="hover:animate-pulse relative mx-auto rounded-full w-60 h-60 mt-4 overflow-hidden md:h-60 md:w-60">
            <Image src={ayushman} fill objectFit="cover" />
          </div>
          <div className="text-center p-3">
            {DarkMode ? (
              <h2 className="text-5xl py-2 animate-text bg-gradient-to-r from-teal-500 via-yellow-300 to-orange-500 bg-clip-text text-transparent md:text-7xl ">
                I'm Ayushman
              </h2>
            ) : (
              <h2 className="text-5xl py-2 font-medium md:text-7xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">
                I'm Ayushman
              </h2>
            )}

            <div className="text-3xl text-gray-500 mt-4 md:text-5xl dark:text-white">
              <Typewriter
                options={{
                  strings: [
                    "Rising Software Engineer",
                    "Coding Enthusiast",
                    "Software Algorithms",
                    "Web Development",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Hi there, i'm currenlty pursuing a bachelors in computer science
              and a masters in tech management. Whether i'm working on a
              personal project or challenging myself with LeetCode problems, i'm
              always up for a good time with code.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/ayushman-dixit-516a0b202/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-blue-400">
                <AiFillLinkedin />
              </div>
            </a>

            <a
              href="mailto:ayushmandixit2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-gray-400">
                <AiFillMail />
              </div>
            </a>

            <a
              href="https://github.com/ayushmandixit2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-purple-400">
                <AiFillGithub />
              </div>
            </a>
          </div>
        </section>

        <section>
          <div className="text-center mt-24">
            {DarkMode ? (
              <h2 className="text-3xl py-2 animate-text bg-gradient-to-r from-teal-500 via-yellow-300 to-orange-500 bg-clip-text text-transparent md:text-4xl ">
                Featured Projects
              </h2>
            ) : (
              <h2 className="text-3xl py-2 font-medium md:text-4xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">
                Featured Projects
              </h2>
            )}
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-2 dark:border-orange-200">
              <div className="relative mx-auto w-20 h-20 overflow-hidden">
                <Image src={stocks} />
              </div>
              <h4 className="text-2xl font-medium pt-3 pb-2 dark:text-white">
                Stocks App
              </h4>
              <p className="py-2 dark:text-gray-200">
                React native app displaying live stock prices and their details
                for S&P 500 stocks. Data is displayed in a list of stock
                components, with each component showing information about a
                specific stock, such as the symbol, company name, latest price,
                and change in price.
              </p>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    ReactNative
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    TypeScript
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-md">
                  CSS
                </a>
              </div>

              <div className="text-4xl flex mt-8 gap-6 justify-center">
                <a
                  href="https://photos.app.goo.gl/b9719qYC1miW4TuJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-blue-800 to-blue-800 text-black px-5 py-2 rounded-md">
                    <IoMdPlanet />
                  </div>
                </a>

                <a
                  href="https://github.com/ayushmandixit2000/Ticker-App/tree/S%26P500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-purple-500 to-purple-600 text-black px-5 py-2 rounded-md">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-2 dark:border-orange-200">
              <div className="relative mx-auto w-20 h-20 overflow-hidden">
                <Image src={lp} />
              </div>
              <h4 className="text-2xl font-medium pt-3 pb-2 dark:text-white">
                Learning Platform
              </h4>
              <p className="py-2 dark:text-gray-200">
                Blockchain learning platform personalised for crypto.com where
                developers can learn & earn. The webapp aims to incetivise
                developers to build projects by providing them with the
                appropriate resources to learn and incentivisng them to build on
                the chain through rewards.
              </p>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    ReactJS
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    NextJS
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    HCSS
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-md">
                  HTML
                </a>
              </div>

              <div className="text-4xl flex mt-8 gap-6 justify-center">
                <a
                  href="https://cdchackathon-cronoslearn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-blue-800 to-blue-800 text-black px-5 py-2 rounded-md">
                    <IoMdPlanet />
                  </div>
                </a>

                <a
                  href="https://github.com/ayushmandixit2000/cdchackathon_learning_platform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-purple-500 to-purple-600 text-black px-5 py-2 rounded-md">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-2 dark:border-orange-200">
              <div className="relative mx-auto w-20 h-20 overflow-hidden">
                <Image src={hca} />
              </div>
              <h4 className="text-2xl font-medium pt-3 pb-2 dark:text-white">
                Healthier Choice App
              </h4>
              <p className="py-2 dark:text-gray-200">
                React native app to allow users to identify, locate, and
                purchase healthier choice products. Features a comprehensive
                database of health-conscious products available in stores,
                making it easier for users to make informed decisions about
                their purchases
              </p>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    ReactNative
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    JavaScript
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-md">
                  TailwindCSS
                </a>
              </div>

              <div className="text-4xl flex mt-8 gap-6 justify-center">
                <a
                  href="https://photos.app.goo.gl/67xirnra8n1d5RXS6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-blue-800 to-blue-800 text-black px-5 py-2 rounded-md">
                    <IoMdPlanet />
                  </div>
                </a>

                <a
                  href="https://github.com/ayushmandixit2000/Healthier-Choice-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-purple-500 to-purple-600 text-black px-5 py-2 rounded-md">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-2 dark:border-orange-200">
              <div className="relative mx-auto w-20 h-20 overflow-hidden">
                <Image src={nc} />
              </div>
              <h4 className="text-2xl font-medium pt-3 pb-2 dark:text-white">
                NFT_CRIB
              </h4>
              <p className="py-2 dark:text-gray-200">
                Solution to encourage user adoption and engagement with NFTs
                through gamification. In-game marketplace to trade NFTS which
                can be used in the NFT_Crib game. Comes with Fiat on-ramps to
                buy crypto within the marketplace itself. Deployed on Moralis
                servers.
              </p>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    PhaserJS
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    Moralis
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    OnRamper
                  </a>
                </div>
              </div>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    JavaScript
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    CSS
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                  HTML
                </a>
              </div>

              <div className="text-4xl flex mt-8 gap-6 justify-center">
                <a
                  href="https://www.canva.com/design/DAE3Qp7Q9qA/Wxogr0CYVxSRws8MUcozIg/view?utm_content=DAE3Qp7Q9qA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-blue-800 to-blue-800 text-black px-5 py-2 rounded-md">
                    <IoMdPlanet />
                  </div>
                </a>

                <a
                  href="https://github.com/ayushmandixit2000/NHI_NFT_Crib"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-purple-500 to-purple-600 text-black px-5 py-2 rounded-md">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-2 dark:border-orange-200">
              <div className="relative mx-auto w-20 h-20 overflow-hidden">
                <Image src={tm} />
              </div>
              <h4 className="text-2xl font-medium pt-3 pb-2 dark:text-white">
                TaskMate
              </h4>
              <p className="py-2 dark:text-gray-200">
                Web-based task management application allowing users to keep
                track of their tasks in an efficient and user-friendly manner.
                Users can easily input tasks, edit or delete them, and mark them
                as completed. It provides a drag and drop feature that allows
                users to move pending tasks to a completed tasks box.
              </p>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    NextJS
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    TypeScript
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    CSS
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-md">
                  HTML
                </a>
              </div>

              <div className="text-4xl flex mt-8 gap-6 justify-center">
                <a
                  href="https://taskmate101.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-blue-800 to-blue-800 text-black px-5 py-2 rounded-md">
                    <IoMdPlanet />
                  </div>
                </a>

                <a
                  href="https://github.com/ayushmandixit2000/TaskMate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-purple-500 to-purple-600 text-black px-5 py-2 rounded-md">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-2 dark:border-orange-200">
              <div className="relative mx-auto w-20 h-20 overflow-hidden">
                <Image src={m} />
              </div>
              <h4 className="text-2xl font-medium pt-3 pb-2 dark:text-white">
                Movie Booking App
              </h4>
              <p className="py-2 dark:text-gray-200">
                MOBLIMA is an application to computerize the processes of making
                online booking and purchase of movie tickets, listing of movies
                and sale reporting. It will be used by the moviegoers and cinema
                staff. The application is a Console-based application
                (non-Graphical UI) made on the Java Programming Language
              </p>

              <div className="flex mt-2 gap-2 justify-center">
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    Java
                  </a>
                </div>
                <div>
                  <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-lg">
                    JavaScript
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <a className="font-sans text-sm bg-gradient-to-r from-gray-600 to-gray-600 px-2 py-1 text-white rounded-md">
                  OOP
                </a>
              </div>

              <div className="text-4xl flex mt-8 gap-6 justify-center">
                <a
                  href="https://youtu.be/7_5ZU8NCn5Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-blue-800 to-blue-800 text-black px-5 py-2 rounded-md">
                    <IoMdPlanet />
                  </div>
                </a>

                <a
                  href="https://github.com/ayushmandixit2000/MOBLIMA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-gradient-to-r from-purple-500 to-purple-600 text-black px-5 py-2 rounded-md">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            {DarkMode ? (
              <h2 className="text-3xl py-2 animate-text bg-gradient-to-r from-teal-500 via-yellow-300 to-orange-500 bg-clip-text text-transparent md:text-4xl ">
                Live LeetCode Stats
              </h2>
            ) : (
              <h2 className="text-3xl py-2 font-medium md:text-4xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">
                Live LeetCode Stats
              </h2>
            )}
          </div>

          {DarkMode ? (
            <div className="mt-12 flex justify-center items-center">
              
            <img
              src="https://leetcard.jacoblin.cool/ayushman11?theme=nord&font=Noto%20Sans&ext=activity"
              class="md:h-2/3 md:w-2/3 h-full w-full object-center clip-image"
            ></img>     
            
          </div>
          ) : (
            <div className="mt-12 flex justify-center items-center">
              
              <img
                src="https://leetcard.jacoblin.cool/ayushman11?theme=unicorn&font=Noto%20Sans&ext=activity"
                class="md:h-2/3 md:w-2/3 h-full w-full border-2 object-center clip-image"
              ></img>     
              
            </div>
          )}

          <div>
            <h1 className="text-center mt-24 mb-12 text-gray-500">
              Made by Ayushman
            </h1>
            <div className="mt-10 text-white dark:text-gray-900">test</div>
          </div>
        </section>
      </main>
    </div>
  );
}
