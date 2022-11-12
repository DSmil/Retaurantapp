import React from "react";
import Delivery from "./img/delivery.png";
import Herobg from "./img/heroBg.png"
import { heroData } from "../utils/data";

function HomeContainer() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
            <div className="py-2 flex-1 gap-6 flex flex-col items-start md:items-start justify-cente">
                <div className="flex items-center justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img
                            src={Delivery}
                            clasName="w-full h-full object-contain"
                            alt="Delivery"
                        ></img>
                    </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text">
                    The Fastest delivery in{" "}
                    <span className="text-orange-600 text-[3rem] lg:text-[5.5rem]">
                        Shtip
                    </span>
                </p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    You can enojy in our delitious food at our restourant or get our food
                    delivered to your home. All orders for delivery must be made online or
                    over the phone!
                </p>

                <button
                    type="buttom"
                    className="bg-gradient-to-br from-orange-400 to-orange-500 
          w-full px-4 py-2 rounded-lg hover:shadow-lg tansition-all ease-in-out duration-100
          md:w-auto"
                >
                    Order Now
                </button>
            </div>
            <div className="py-2 flex-1 items-center relative">

                <img src={Herobg} className="ml-auto h-400 w-full lg:w-auto lg:h-650" alt="Herobg"></img>
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
                    {heroData && heroData.map(n => (

                        <div key={n.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                            <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="c1" />
                            <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
                            <p className="text-[12px] lg:text-md text-lighttextGray font-semibold my-1 lg:my-3">{n.decp}</p>
                            <p className="text-sm font-semibold text-headingColor">{n.price} <span className="text-xs text-red-600">den.</span></p>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}

export default HomeContainer;
