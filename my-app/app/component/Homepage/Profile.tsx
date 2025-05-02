"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Instagram, AtSign, Linkedin, Dribbble } from 'lucide-react';
import { images } from '@/public/images';
import { sectionPadding } from '../styles/styles';
import Link from 'next/link';

type Props = {};

const Profile = (props: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [stats, setStats] = useState({ experience: 0, projects: 0, clients: 0 });
    const statsRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isInView, setIsInView] = useState(false);

    // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
  
    const element = document.getElementById(sectionId);
    console.log("Attempting to scroll to:", sectionId, element); // Debug log
  
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Element with ID "${sectionId}" not found`);
    }
  };

    // Counter animation function
    const animateCounter = (start: any, end: any, duration: any, setValue: any, property: any) => {
        let startTimestamp: any = null;
        const step = (timestamp: any) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);

            // setValue(prev => ({...prev, [property]: value}));
            setValue((prev: { experience: number; projects: number; clients: number }) => ({ ...prev, [property]: value }));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Trigger counter animation when stats section comes into view
    useEffect(() => {
        if (isInView) {
            animateCounter(0, 5, 1500, setStats, 'experience');
            animateCounter(0, 20, 2000, setStats, 'projects');
            animateCounter(0, 80, 2500, setStats, 'clients');
        }
    }, [isInView]);

    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
    }, []);

    return (
        <div id='home' className={`flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-900 text-white min-h-screen overflow-hidden ${sectionPadding} backdrop-blur-lg bg-opacity-80 relative pt-40 md:pt-28`}>
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-md z-0"></div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-purple-600 bg-opacity-20"
                        style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 20}s infinite linear`,
                            opacity: Math.random() * 0.5,
                            transform: `scale(${Math.random() * 0.8 + 0.2})`,
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(100px, 100px) rotate(180deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
                @keyframes shine {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>

            <div className="flex-1 space-y-6 relative z-10">
                <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-gray-300 mb-1">Hi, I am</p>
                    <h1 className="text-3xl font-bold mb-2">Ewuji Oluwaseyi John</h1>
                    <h2 className={`text-4xl font-bold text-purple-600 mb-8 ${isLoaded ? 'animate-pulse' : ''}`}
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #9333ea 0%, #c084fc 50%, #9333ea 100%)',
                            backgroundSize: '200% auto',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'shine 3s linear infinite'
                        }}>
                        Devops Engineer
                    </h2>

                    <div className="flex space-x-4 mb-12">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                            style={{ animationDuration: '2s', animationDelay: '300ms', animationIterationCount: 1 }}>
                            <Instagram size={16} />
                        </a>
                        <a href="mailto:example@example.com"
                            className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                            style={{ animationDuration: '2s', animationDelay: '400ms', animationIterationCount: 1 }}>
                            <AtSign size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/ewuji-john-40bb1413b/" target="_blank" rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                            style={{ animationDuration: '2s', animationDelay: '500ms', animationIterationCount: 1 }}>
                            <Linkedin size={16} />
                        </a>
                        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                            style={{ animationDuration: '2s', animationDelay: '600ms', animationIterationCount: 1 }}>
                            <Dribbble size={16} />
                        </a>
                    </div>
                </div>

                <div className={`flex space-x-4 mb-2 pb-12 transition-all duration-700 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                    >
                        <span className="relative z-10">Hire Me</span>
                        <span className="absolute inset-0 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-30"></span>
                    </button>
                    <button className="border border-gray-600 hover:border-purple-400 text-white font-medium py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                        <Link href="https://drive.google.com/file/d/1wMzbPCTu2m_NbYJBYi_LOal4WOfchi-s/view?usp=sharing" target='_blank' className="relative z-10">Download CV</Link>
                        <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-20"></span>
                    </button>
                </div>

                <div
                    ref={statsRef}
                    className={`flex md:w-3/5 mt-12 pb-11 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: '700ms' }}
                >
                    <div className="flex-1 border-r border-gray-700 px-4 transform transition-all duration-500 hover:scale-105">
                        <h3 className="text-xl font-bold text-purple-600">{stats.experience}+</h3>
                        <p className="text-xs sm:text-sm text-gray-300 font-semibold">Experiences</p>
                    </div>
                    <div className="flex-1 border-r border-gray-700 px-4 transform transition-all duration-500 hover:scale-105">
                        <h3 className="text-xl font-bold text-purple-600">{stats.projects}+</h3>
                        <p className="text-xs sm:text-sm font-semibold text-gray-300 text-nowrap">Project done</p>
                    </div>
                    <div className="flex-1 px-4 transform transition-all duration-500 hover:scale-105">
                        <h3 className="text-xl font-bold text-purple-600">{stats.clients}+</h3>
                        <p className="text-xs sm:text-sm font-semibold text-gray-300 text-nowrap">Happy Clients</p>
                    </div>
                </div>
            </div>

            <div className={`relative flex-1 max-w-md transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-16 opacity-0 rotate-6'} z-10`}>
                <div className="relative">
                    {/* Animated circular background with glassmorphic effect */}
                    <div
                        className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-1000 scale-100 border border-purple-400 border-opacity-20"
                        style={{ animation: 'pulse 4s infinite ease-in-out' }}
                    ></div>

                    {/* Glowing ring */}
                    <div
                        className="w-72 h-72 md:w-96 md:h-96 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
                        style={{
                            boxShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
                            animation: 'pulse 4s infinite ease-in-out alternate'
                        }}
                    ></div>

                    {/* Profile image with overflow hidden to create circular effect */}
                    <div
                        className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
                        style={{
                            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
                        }}
                    >
                        <Image
                            src={images.home}
                            alt="Ewuji Oluwaseyi John"
                            className="w-full h-full object-cover object-center transition-transform hover:scale-110 duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;