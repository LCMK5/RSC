import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "@remix-run/react";
import Basketball from "~/IMG/0/Basketball.webp";
import Volleyball from "~/IMG/0/Volleyball.webp";
import Badminton from "~/IMG/0/Badminton.webp";
import Table_Tennis from "~/IMG/0/TT.webp";
import Squash from "~/IMG/0/Squash.webp";
import Bowling from "~/IMG/0/Bowling.webp";

export default function IndoorSports() {
    const indoor = [
        { img: Basketball, name: "Basketball", path: "/facilities/basketball" },
        { img: Volleyball, name: "Volleyball", path: "/facilities/volleyball" },
        { img: Badminton, name: "Badminton", path: "/facilities/badminton" },
        { img: Table_Tennis, name: "Table Tennis", path: "/facilities/tabletennis" },
        { img: Squash, name: "Squash", path: "/facilities/squash" },
        { img: Bowling, name: "Bowling", path: "/facilities/bowling" },
    ];
  return (
    <>
      <Header />
        <main className="pt-[5rem] text-white bg-black flex justify-center items-center flex-col">
            <div
                className="w-[70%] text-4xl before:content-[''] before:grow before:m-auto before:border-b-2 before:border-solid before:border-white after:content-[''] after:grow after:m-auto after:border-b-2 after:border-solid after:border-white flex justify-center items-center">INDOOR SPORTS
            </div>
            <div className="m-fclt__content max-w-[70%] flex-[0_0_70%] grid grid-cols-3 gap-4 p-4 overflow-auto">
                {indoor.map((fclt) => (
                    <Link
                        key={fclt.img}
                        to={fclt.path}
                        className="m-fclt__item border-2 border-solid border-cyan-400 anmt anmt4"
                    >
                        <div className="m-fclt__img h-3/4 flex justify-center items-center overflow-hidden">
                            <img
                                src={fclt.img}
                                alt={fclt.img}
                                className="min-w-full min-h-full"
                            />
                        </div>
                        <div
                            className="m-fclt__desc h-1/4 text-2xl bg-zinc-900 border-t-2 border-solid border-cyan-400 flex justify-center items-center">
                            {fclt.name}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
        <Footer/>
    </>
  );
}