import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="relative min-h-screen bg-[#070b12] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
            
            <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

            <div className="w-full max-w-md text-center relative z-10 space-y-8">
                
            
                <div className="relative inline-block select-none">
                    <h1 className="text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-700 opacity-20 filter drop-shadow-lg">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-black uppercase tracking-widest text-[#8b5cf6] bg-purple-500/10 px-4 py-2 border border-purple-500/20 backdrop-blur-sm rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.15)] animate-pulse">
                            Lost In Space
                        </span>
                    </div>
                </div>

                {/* 💎 মেইন কন্টেন্ট গ্লাস কার্ড */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                        Page Not Found!
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                        Oops! The page or resource you are looking for has been moved, deleted, or never existed in this dimension.
                    </p>
                    
                   
                    <div className="pt-4">
                        <Link 
                            href="/" 
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 active:scale-[0.96] transition-all uppercase group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            Back To Home
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;