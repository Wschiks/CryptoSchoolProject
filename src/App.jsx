import MuntComponent from "./CriptoSchool";
import {Route, Routes} from "react-router-dom";
import Test from "./Test.jsx";
import Grafiek from "./Grafiek.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {useState} from "react";

export default function App() {
    const [favorites, setFavorites] = useState([]); //maak de getters en setters aan. als er iets word veranderd zorg de use state voor een soort update

    const addToFavorites = (coin) => {

        setFavorites((oud) => {   // set zorgt er voor dat ze in de lijst komen. oud is de oude lijst waar dus de coin bij word gevoegd


            if (oud.includes(coin.id)) { // als de coin.id al in de oude lijst zit dan:

                return oud.filter((id) => id !== coin.id); //copy de oude list in de nieuw list met de filter. zonder dat die ene coin er in zit. verwijderen
            } else {

                return [...oud, coin.id]; //de coin word toegevoegd aangezien hij nog niet in de oude list stond. toevoegen
            }
        });
    };


    return (
        <div className="bg-[#090400] min-h-screen">
            <Header/>

            {/*Stukje over de favorieten coins*/}

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-yellow-400 text-xl font-bold">Favorieten:</h1>
                <div className="flex gap-2 flex-wrap justify-center">
                    {favorites.map((id) => ( //map is een for loop maar dan verander je de items door iets anders. dit geval door de span. hij loopt door de list favorietes
                        <span key={id}
                              className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">{id}</span>
                    ))}
                </div>
            </div>


            <div className="flex items-center justify-center">
                <main className="text-center">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MuntComponent
                                    addToFavorites={addToFavorites} // geeft de addToFavorites mee aan CriptoSchool.jsx
                                    favorites={favorites}
                                />
                            }
                        />
                        <Route path="coin/:id" element={<Test/>}/>
                        <Route path="grafiek/" element={<Grafiek/>}/>
                    </Routes>
                </main>
            </div>

            <Footer/>
        </div>
    );
}
