import MuntComponent from "./CriptoSchool";
import {Route, Routes, Link} from "react-router-dom";
import Test from "./Test.jsx";
import Grafiek from "./Grafiek.jsx";

export default function App() {
    return (
        <>
            <div className="bg-[#090400] w-screen">
                <header>
                    <div className="w-full headerheight bg-emerald-600">
                        <div className="bg-blue-200 w-screen h-24">
                            kasjhdfb
                        </div>



                        <Link to="/">Home</Link>
                        <Link to="grafiek">grafiek</Link>
                        <Link to="/">Home</Link>
                    </div>
                </header>


                <div className="flex items-center justify-center ">
                    <main className="text-center">
                        <Routes>
                            <Route path="/" element={<MuntComponent/>}/>
                            <Route path="coin/:id" element={<Test/>}/>
                            <Route path="grafiek/" element={<Grafiek/>}/>
                        </Routes>
                    </main>
                </div>

                <div className="w-screen footer bg-img footergrijs">

                    <div className="footer-grooten border border-gray-700 align-middle rounded-4xl">
                        <div className="footer-opdeelen ">
                            <h4>Hier</h4>
                            <h4>staat</h4>
                            <h4>niet</h4>
                            <h4>zo</h4>
                            <h4>heel</h4>

                        </div>
                        <div className="footer-opdeelen ">
                            <h4>veel</h4>
                            <h4>nuttigs</h4>
                            <h4>maar</h4>
                            <h4>ja..</h4>
                            <h4>kan gebreuren</h4>
                        </div>
                        <div className="footer-opdeelen"></div>
                        <div className="footer-opdeelen "></div>
                        <div className="footer-opdeelen "></div>


                    </div>

                </div>
            </div>


        </>
    );
}
