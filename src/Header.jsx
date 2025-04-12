import {Link} from "react-router-dom";


function Header() {



    return (
        <>
<header>
    <div className="w-full headerheight  midden">
        <div className=" w-screen h-24  flex items-center ">

            <div className="relative w-full h-24 flex items-center justify-center space-x-10">
                <div className="logo"></div>
                <Link to="/" className="text-lg hover:underline link">Home</Link>
                <Link to="/grafiek" className="text-lg hover:underline link">Grafiek</Link>

            </div>

        </div>
        <div className="w-screen  flinkhoog flex bg">
            <div className="flinkhoog header1 flex flex-col justify-center ml-28 -mt-16 text-white">
                <h1 className="text-[9.5rem] font-extrabold leading-[1.1] max-w-9xl">
                    Snel, <span className="bg-gradient-to-r from-[#FF8A43] to-[#FFA3B5] text-transparent bg-clip-text">makkelijk</span>,<br />
                    crypto in zicht
                </h1>

                <p className="mt-8 text-2xl max-w-3xl text-gray-300">
                    Bekijk realtime koersen, ontdek trends en hou je favoriete munten in de gaten.
                    Alles wat je nodig hebt op één plek – zonder gedoe.
                </p>
            </div>






            <div className="flinkhoog headaer-img header2">

            </div>

        </div>


    </div>
</header>

        </>


    );
}

export default Header;