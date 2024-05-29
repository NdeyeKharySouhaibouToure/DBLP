import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function ListeAuteur() {
    const [auteurs, setAuteurs] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les données des auteurs
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000');
                setAuteurs(response.data);
                console.log('Réponse de l\'API :', response.data);
            } catch (error) {
                console.error('Erreur lors de la requête :', error);
            }
        };
        fetchData();
    }, []); // Utilisation de useEffect pour appeler la fonction fetchData une seule fois après le rendu initial

    return (
        
        <div className='app flex-reverse-wrap'>
            
            <div className="app min-h-screen   bg-gray-50 py-6 sm:py-12 ">

                <div className="max-w-3xl mx-auto"><h1 className='font-bold text-3xl'>Liste des noms des auteurs</h1>
                    {auteurs.map((auteur, index) => (
                        <div key={index} className="relative flex-wrap shadow-2xl my-auto justify-center overflow-hidden bg-gray-1 py-6 sm:py-12">
                            <div className="group  relative cursor-pointer overflow-hidden text-white bg-[#9b8459] px-8 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[10]"></span>
                                <div className="relative z-10  mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-[#1d1a151f] transition-all duration-300 group-hover:bg-black">
                                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="50px" height="50px" viewBox="0 0 1280.000000 651.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,651.000000) scale(0.100000,-0.100000)"
                                    fill="#ffffff" stroke="none">
                                    <path d="M12540 6449 c-306 -157 -596 -230 -853 -214 -238 14 -470 75 -819
                                    214 -120 48 -124 48 -188 40 -35 -5 -67 -13 -71 -17 -11 -11 -33 -6332 -22
                                    -6343 5 -5 36 -12 70 -17 55 -8 68 -6 149 25 319 122 657 181 973 170 261 -9
                                    474 -51 729 -143 124 -45 128 -46 186 -36 33 6 64 16 69 21 12 12 15 410 28
                                    3710 5 1443 6 2627 2 2632 -4 4 -37 9 -73 12 -63 5 -68 3 -180 -54z m-102
                                    -1541 l-3 -263 -747 -3 -748 -2 0 265 0 265 750 0 750 0 -2 -262z m2 -903 l0
                                    -265 -750 0 -750 0 0 265 0 265 750 0 750 0 0 -265z"/>
                                    <path d="M5264 5619 c3 -239 11 -672 16 -964 5 -291 14 -800 20 -1130 6 -330
                                    15 -852 20 -1160 5 -308 14 -828 20 -1155 5 -327 12 -722 16 -876 l6 -282 102
                                    48 c358 168 684 193 983 74 37 -15 125 -58 195 -95 70 -38 132 -69 138 -69 7
                                    0 9 13 6 32 -3 18 -8 236 -11 483 -3 248 -10 689 -15 980 -5 292 -14 805 -20
                                    1140 -6 336 -15 855 -20 1155 -5 300 -14 844 -20 1210 -6 366 -13 742 -16 837
                                    l-6 172 -110 -56 c-467 -234 -816 -215 -1272 66 l-39 25 7 -435z"/>
                                    <path d="M8352 5134 c-311 -274 -615 -413 -976 -446 -127 -11 -341 -2 -414 18
                                    -16 5 -21 3 -17 -7 2 -8 48 -158 101 -334 124 -413 212 -705 314 -1040 78
                                    -259 134 -444 275 -910 36 -118 94 -312 130 -430 36 -118 94 -312 130 -430 36
                                    -118 95 -313 131 -432 36 -120 87 -290 114 -378 27 -88 83 -275 125 -415 43
                                    -140 79 -258 82 -263 2 -4 39 24 81 63 159 145 373 275 578 349 207 75 503
                                    113 716 92 67 -6 122 -10 124 -8 1 1 -26 97 -61 212 -60 199 -264 878 -471
                                    1565 -53 173 -131 432 -174 575 -43 143 -128 424 -189 625 -410 1361 -501
                                    1664 -504 1671 -1 3 -44 -31 -95 -77z m167 -886 c38 -119 150 -512 147 -516
                                    -12 -12 -1070 -322 -1076 -315 -10 11 -162 534 -157 539 4 5 1055 322 1069
                                    323 3 1 11 -14 17 -31z"/>
                                    <path d="M2785 3309 c-693 -3 -1603 -7 -2022 -8 l-762 -1 45 -95 c103 -220
                                    142 -365 151 -550 9 -211 -21 -341 -138 -584 -32 -68 -58 -125 -57 -126 5 -3
                                    4383 17 4386 20 1 1 -16 36 -38 78 -51 94 -83 175 -118 297 -24 86 -27 111
                                    -27 260 0 226 28 342 154 637 17 40 31 74 31 77 0 4 -78 5 -172 4 -95 -1 -740
                                    -5 -1433 -9z"/>
                                    <path d="M1510 1468 c-822 -5 -1496 -11 -1498 -12 -1 -2 18 -45 42 -97 104
                                    -223 141 -382 141 -609 0 -223 -32 -362 -124 -543 l-49 -97 156 0 c481 0 4197
                                    22 4200 25 2 1 -17 43 -42 92 -105 209 -144 348 -153 533 -9 205 26 355 138
                                    589 32 68 59 125 59 127 0 6 -1115 2 -2870 -8z"/>
                                    </g>
                                     </svg>
                                    </span>
                                    <div className="space-y-6 pt-5 text-base font-extrabold leading-7  text-white transition-all duration-300 group-hover:text-black/90">
                                        <p>{auteur.author}</p>
                                    </div>
                                    <div className="pt-5 text-base font-semibold leading-7">
                                        <p>
                                            <a href="#" className="text-white transition-all duration-300 group-hover:text-black">Details &rarr;</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListeAuteur;
