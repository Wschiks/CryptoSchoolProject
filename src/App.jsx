import MuntComponent from "./CriptoSchool";
import {Route, Routes, Link} from "react-router-dom";

export default function App() {
    return (
        <>
            <div className="bg-[#090400] w-screen">
                <header className="text-center">
                    <h1>Welkom bij de Cryptomunt app</h1>
                    <Link to="/">Home</Link>
                    <Link to="/">Home</Link>
                    <Link to="/">Home</Link>
                </header>

                <div className="flex items-center justify-center ">
                    <main className="text-center">
                        <Routes>
                            <Route path="/" element={<MuntComponent/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    );
}
