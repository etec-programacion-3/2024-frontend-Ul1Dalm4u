import React from 'react';
import './HomePage.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";



const HomePage = () => {
  return (
    <div>
      <div className="slider">
            <div className="slide_track">
                <div className="slide">
                    <p>~ 10% Off Your First Order On Full Price Items ~</p>
                </div>
            </div>
      </div>
      <header>
        <p>Perito Moreno 2397, Godoy Cruz</p>
        <h3 className='title'>ULI _ TINO</h3>
        <div className='top_right_header'>
        <p>Login</p>
        <CiSearch />
        <CiHeart />
        <CiBag1 />
        </div>

      </header>
      <main className='cuerpo'>
        <img src="https://www.off---white.com/BWStaticContent/53000/26bc1ecf-9fb1-4bb4-a7af-f246bec08945_off-white-brb-batch-1-57.jpg" alt="" />
        <p className='brb'>"BE  RIGHT  BACK"</p>
        <p className='text_cuerpo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
    </div>
  );
}

export default HomePage;