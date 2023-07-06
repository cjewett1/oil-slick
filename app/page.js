import Image from "next/image";
import Nav from "./components/header";
import UpcomingGames from "./components/upcoming-games";
import Stats from "./components/stats";
import Standings from "./components/standings";
import Score from "./components/score";
import News from "./components/news";
import Footer from "./components/footer";

export default function Home() {
    return (
        <main>
            <Nav />
            <div className='content-container'>
                <div className='first-row flex justify-between'>
                    <Score />
                    <News />
                </div>
                <div className='second-row flex justify-between'>
                    <Stats />
                    <Standings />
                </div>
                <div className='third-row flex justify-center'>
                    <UpcomingGames />
                </div>
            </div>
            <Footer />
        </main>
    );
}
