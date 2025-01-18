import React from 'react';
import { Camera, Video, Users, Heart } from 'lucide-react';
import './services.css'
const services = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Photography',
    description: 'Professional photography services for all your special occasions.',
    image: './movie1.webp',
    profile: './movie1.webp',
    location: 'Studio 1'
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Videography',
    description: 'High-quality video production and editing services.',
    image: './movie1.webp',
    profile: './movie1.webp',
    location: 'Studio 2'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Wedding Coverage',
    description: 'Complete wedding photography and videography packages.',
    image: './movie1.webp',
    profile: './movie1.webp',
    location: 'Studio 3'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Events',
    description: 'Corporate events, parties, and social gatherings coverage.',
    image: './movie1.webp',
    profile: './movie1.webp',
    location: 'Studio 4'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#1b1f23] py-16 px-4">
      <div className="w-full mx-auto">
        <div className="text-center mb-7 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Products</h2>
          <p className="]text-xs  md:text-lg text-white max-w-2xl mx-auto text-wrap text-justify">
            BollyGrad Studioz is a premier entertainment company that offers a diverse range of captivating experiences to users worldwide. Our portfolio includes an array of exciting offerings such as music trailers, music releases, movies, new products, and much more. Whether you are a fan of Hollywood, Bollywood, Tollywood, or any other film industry, BollyGrad Studioz has something for everyone
          </p>
        </div>
        <div className="w-[80vw] cardouter flex  flex-wrap md:flex-nowrap justify-evenly items-center gap-5 m-auto" >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./p1.webp" alt="Front Image" />
                <p className="title">Listen Music </p>
                <p>Music</p>
              </div>
              <div className="flip-card-back">
                <img src="./p2.webp" alt="Back Image" />
                <p className="title">Listen Music</p>
                <p>Listen & Enjoy</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./p2.webp" alt="Front Image" />
                <p className="title">Watch Movies</p>
                <p>Movies</p>
              </div>
              <div className="flip-card-back">
                <img src="./p1.webp" alt="Back Image" />
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./p3.webp" alt="Front Image" />
                <p className="title"> Enjoy Trailers</p>
                <p>Trailers</p>
              </div>
              <div className="flip-card-back">
                <img src="./p4.webp" alt="Back Image" />
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./p4.webp" alt="Front Image" />
                <p className="title"> Our Products</p>
                <p>Products</p>
              </div>
              <div className="flip-card-back">
                <img src="./p4.webp" alt="Back Image" />
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='w-full text-center m-auto mt-20 text-xl md:text-4xl font-bold text-white'>BINGE WATCH</h1>
    </div>
  );
};

export default Services;