"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const promoData = [
  {
    id: 1,
    image: "/assets/wings-chicken.jpg",
    label: "USER BARU",
    labelBg: "bg-yellow-400 text-black",
    title: "DISKON 15% RICHEESE APP",
    description: "Install dan daftar akun Richeese App buat dapet diskon spesial pesanan pertama.",
    buttonText: "AMBIL PROMO"
  },
  {
    id: 2,
    image: "/assets/fire-chicken.jpg",
    label: "TUKAR POIN",
    labelBg: "bg-red-600 text-white",
    title: "500 POIN = AYAM GRATIS",
    description: "Poin numpuk? Tuker langsung sama 1 Paket Fire Chicken gratis tanpa bayar!",
    buttonText: "TUKAR SEKARANG"
  },
  {
    id: 3,
    image: "/assets/burger-chicken.jpg",
    label: "SPECIAL VIP",
    labelBg: "bg-gradient-to-r from-yellow-200 to-yellow-500 text-black",
    title: "BUY 1 GET 1",
    description: "Khusus pemegang VIP Pass, nikmati promo Buy 1 Get 1 setiap hari Jumat.",
    buttonText: "CEK STATUS VIP"
  }
];

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<any | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen text-zinc-900 bg-light-pattern selection:bg-yellow-400 overflow-x-hidden">
      
      <header className="fixed top-0 left-0 right-0 z-[100] w-full shadow-lg">
        <div className="bg-yellow-400 text-red-900 font-bold text-[10px] sm:text-xs md:text-sm py-2 marquee-container border-b border-yellow-500">
          <div className="marquee-content uppercase tracking-tight">
            📢 INFO BUAT ANAK KOSAN: MASUKIN KODE <span className="bg-black text-white px-2 rounded-md font-black">RIFQI-GANTENG</span> DI APP BUAT DAPET EKSTRA 2 CHEESE SAUCE GRATIS! 📢
          </div>
        </div>

        <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 h-20 md:h-24 transition-all duration-300">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full max-w-7xl">
            
            <div className="bg-[#da251d] h-full w-24 md:w-36 flex flex-col items-center justify-center cursor-pointer shadow-md">
              <span className="text-white font-bold italic text-lg md:text-3xl leading-none">Richeese</span>
              <span className="text-yellow-400 font-bold text-[8px] md:text-[12px] tracking-widest uppercase">Factory</span>
            </div>

            <div className="hidden lg:flex items-center gap-12">
              <div className="flex space-x-10 text-base md:text-xl font-black tracking-widest text-[#7a1811]">
                <a href="#menu" className="hover:text-red-600 transition-colors">OUR MENU</a>
                <a href="#promo" className="hover:text-red-600 transition-colors">PROMO</a>
                <a href="#vip" className="hover:text-red-600 transition-colors">MEMBER</a>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#da251d] text-white px-10 py-3 rounded-full font-black text-base tracking-widest uppercase hover:bg-red-700 transition shadow-lg shadow-red-600/30"
              >
                Order Now
              </motion.button>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="bg-[#da251d] text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest"
              >
                Order
              </motion.button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#7a1811] p-2 focus:outline-none">
                {isMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col items-center py-8 gap-8 font-black text-[#7a1811] tracking-[0.2em] text-xl">
                  <a href="#menu" onClick={() => setIsMenuOpen(false)}>OUR MENU</a>
                  <a href="#promo" onClick={() => setIsMenuOpen(false)}>PROMO</a>
                  <a href="#vip" onClick={() => setIsMenuOpen(false)}>MEMBER</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <div className="pt-32 md:pt-44">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-12 lg:py-20 overflow-hidden bg-pattern"
        >
          <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10 max-w-7xl">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img 
                src="/assets/mabar-complete.jpg" 
                alt="MUKBANG COMPLETE" 
                className="w-full max-w-sm md:max-w-lg rounded-3xl shadow-2xl border-4 border-white/20 transform -rotate-1"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
              <h1 className="text-5xl md:text-[90px] font-black text-yellow-400 leading-[0.9] tracking-tighter mb-4 italic uppercase">
                MUKBANG<br/><span className="text-white">COMPLETE</span>
              </h1>
              <h2 className="text-lg md:text-2xl font-bold text-zinc-300 mb-8 uppercase tracking-widest italic">Perut Full, Nugas Jadi Powerfull!</h2>
              <div className="inline-block bg-black/60 backdrop-blur-sm p-7 rounded-3xl border border-white/10 shadow-2xl text-left w-full sm:w-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-end">
                  <ul className="text-white text-base md:text-lg space-y-2 font-medium">
                    <li className="flex items-center gap-2">🍗 5 FIRE CHICKEN</li>
                    <li className="flex items-center gap-2">🍚 3 NASI PUTIH</li>
                    <li className="flex items-center gap-2">🥤 3 MINUMAN</li>
                  </ul>
                  <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-8 text-left w-full">
                    <p className="text-yellow-400 text-3xl md:text-5xl font-black tracking-tighter leading-none">Rp161<span className="text-2xl">.818</span></p>
                    <p className="text-zinc-500 line-through text-xs md:text-sm italic">Rp217.272,-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="h-2 bg-yellow-400 w-full"></div>

        <section id="menu" className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-[#7a1811] uppercase tracking-tighter italic">REKOMENDASI MENU MAHASISWA</h3>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl">
            <motion.div whileHover={{y:-10}} className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all group">
              <img src="/assets/burger-chicken.jpg" className="w-40 md:w-52 h-40 md:h-52 mx-auto rounded-full mb-8 shadow-lg group-hover:scale-105 transition duration-500" />
              <h4 className="font-black text-lg md:text-xl text-[#7a1811] uppercase italic">RICH BURGER CHICKEN</h4>
            </motion.div>
            <motion.div whileHover={{y:-10}} className="bg-red-50/50 p-8 md:p-10 rounded-[2.5rem] border border-red-50 text-center hover:shadow-xl transition-all group">
              <img src="/assets/fire-burger-Chicken.jpg" className="w-40 md:w-52 h-40 md:h-52 mx-auto rounded-full mb-8 shadow-lg group-hover:scale-105 transition duration-500" />
              <h4 className="font-black text-lg md:text-xl text-red-700 uppercase italic">FIRE BURGER CHICKEN</h4>
            </motion.div>
          </div>
        </section>

        <div className="h-px bg-gray-100 w-full"></div>

        <section className="bg-[#fdf1d6] py-12 md:py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
            <motion.div animate={{rotate:360}} transition={{duration:30, repeat:Infinity, ease:"linear"}} className="w-full md:w-1/2 flex justify-center z-10">
              <img src="/assets/eskrim-choco.jpg" alt="Ice Cream" className="w-48 md:w-64 h-48 md:h-64 object-cover rounded-full shadow-xl border-4 border-white" />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left z-10">
              <span className="bg-[#5e2115] text-white px-3 md:px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-black tracking-widest uppercase">Cocok Untuk Nugas Malam</span>
              <h3 className="text-4xl md:text-6xl font-black text-[#5e2115] mt-4 md:mt-5 mb-2 tracking-tighter italic leading-none">RICHOCO DINO</h3>
              <p className="text-lg md:text-xl text-[#5e2115]/70 font-bold uppercase tracking-widest">HANYA <span className="text-4xl md:text-5xl font-black text-[#5e2115]">Rp 13<span className="text-2xl md:text-3xl">.636</span></span></p>
            </div>
          </div>
        </section>

        <div className="h-2 bg-yellow-400 w-full"></div>

        <section id="promo" className="py-16 md:py-24 bg-zinc-950 border-b-8 border-yellow-400">
          <div className="container mx-auto px-4 md:px-6 text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider italic">HOT DEALS PROMO</h3>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mt-5"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl">
            {promoData.map((promo) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={promo.id}
                onClick={() => setSelectedPromo(promo)}
                className="bg-zinc-900 p-6 md:p-8 rounded-[2.5rem] border border-white/5 cursor-pointer shadow-2xl flex flex-col group"
              >
                <div className="w-full h-40 md:h-44 bg-black rounded-2xl overflow-hidden mb-6 md:mb-8">
                  <img src={promo.image} alt={promo.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500" />
                </div>
                <div className="flex-grow text-center">
                  <span className={`${promo.labelBg} text-[8px] md:text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest`}>{promo.label}</span>
                  <h4 className="text-white font-black text-lg md:text-xl mt-4 md:mt-5 mb-3 uppercase tracking-tight">{promo.title}</h4>
                  <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed mb-6 md:mb-8">{promo.description}</p>
                </div>
                <button className={`w-full py-3 md:py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg ${promo.id === 2 ? 'bg-red-600 text-white' : 'bg-yellow-400 text-black'}`}>
                  {promo.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="vip" className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20 relative z-10 max-w-6xl">
            <div className="text-center lg:text-left max-w-md">
              <h3 className="text-3xl md:text-5xl font-black text-yellow-400 mb-4 md:mb-6 leading-none uppercase italic">MEMBER KHUSUS<br/><span className="text-white">MAHASISWA</span></h3>
              <p className="text-zinc-500 text-sm md:text-base italic leading-relaxed">Kartu ajaib buat nambah poin tiap beli makan siang. Tukarkan dengan Fire Chicken saat tanggal tua di outlet terdekat!</p>
            </div>
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[320px] md:w-96 h-48 md:h-56 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden shadow-2xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 cursor-pointer mx-auto lg:mx-0"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-7 md:w-12 md:h-8 bg-yellow-600/20 border border-yellow-500/20 rounded-md"></div>
                <span className="text-white font-black italic text-lg md:text-xl">Richeese</span>
              </div>
              <div className="mt-8 md:mt-12 relative z-10">
                <span className="text-zinc-700 text-4xl md:text-5xl font-black italic tracking-tighter opacity-30">VIP</span>
              </div>
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 text-left">
                <p className="text-base md:text-lg font-bold text-yellow-400 uppercase tracking-widest leading-none">MUHAMAD RIFQI FADIL</p>
                <p className="text-[8px] md:text-[10px] text-zinc-600 uppercase font-black tracking-widest mt-1">AUTHORIZED MEMBER</p>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="bg-white pt-12 md:pt-20 border-t border-gray-100 mt-auto pb-0">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-6">
                <div className="bg-[#da251d] w-20 h-20 flex items-center justify-center rounded-2xl shadow-xl">
                  <span className="text-white font-bold italic text-xs leading-none text-center">Richeese<br/><span className="text-yellow-400 text-[10px]">Factory</span></span>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-[11px] tracking-tighter cursor-pointer hover:bg-black transition-all">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <div className="w-11 h-11 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-[11px] tracking-tighter cursor-pointer hover:bg-black transition-all">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </div>
                  <div className="w-11 h-11 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-[11px] tracking-tighter cursor-pointer hover:bg-black transition-all">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center">
                <div className="flex gap-8 justify-center text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-red-600">CONTACT US</a>
                    <a href="#" className="hover:text-red-600">DISCOVERY</a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-red-600">BIG ORDER</a>
                    <a href="#" className="hover:text-red-600">PRIVACY POLICY</a>
                  </div>
                </div>
                <p className="font-black text-2xl md:text-3xl text-gray-800 uppercase tracking-tighter leading-none"></p>
                <p className="text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold mt-3"></p>
              </div>

              <div className="w-full md:w-80">
                <p className="text-[10px] md:text-[11px] font-black text-gray-800 uppercase tracking-widest mb-3 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse"></span>
                  OUTLET MARGONDA DEPOK
                </p>
                <div className="h-40 rounded-3xl overflow-hidden border border-gray-200 shadow-inner">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.232371900135!2d106.83002621537248!3d-6.364234064032768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec111f185dbb%3A0x1a87796d11626f2f!2sRicheese%20Factory%20Margonda!5e0!3m2!1sen!2sid!4v1682390884000!5m2!1sen!2sid" className="w-full h-full grayscale opacity-80" style={{ border: 0 }}></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fce029] py-5 text-[#5e2115] font-black text-center text-[8px] md:text-[10px] tracking-[0.4em] uppercase border-t border-yellow-500 shadow-inner">
            © 2026 RICHEESE FACTORY INDONESIA - FTUI INTERNSHIP PROJECT
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {selectedPromo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedPromo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-white/10 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] max-w-2xl w-full relative shadow-2xl overflow-hidden text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedPromo(null)} className="absolute top-4 md:top-8 right-6 md:right-10 text-zinc-600 hover:text-white font-black text-3xl md:text-4xl">×</button>
              <img src={selectedPromo.image} alt={selectedPromo.title} className="w-full max-h-48 md:max-h-72 object-contain rounded-3xl mb-10 bg-black/40 p-2" />
              <span className={`${selectedPromo.labelBg} px-4 md:px-6 py-1 md:py-1.5 rounded-full font-black text-[8px] md:text-[10px] uppercase tracking-widest`}>{selectedPromo.label}</span>
              <h2 className="text-2xl md:text-5xl font-black text-white mt-4 md:mt-6 mb-4 uppercase italic tracking-tighter">{selectedPromo.title}</h2>
              <p className="text-zinc-500 text-xs md:text-sm mb-8 md:mb-12 max-w-md leading-relaxed mx-auto">{selectedPromo.description}</p>
              <button className={`w-full md:w-auto px-10 md:px-16 py-3 md:py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl ${selectedPromo.id === 2 ? 'bg-red-600 text-white' : 'bg-white text-black'}`}>
                {selectedPromo.buttonText}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[100] bg-white text-black p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.3)] border-l-[8px] md:border-l-[12px] border-yellow-400 max-w-[280px] md:max-w-sm flex items-center gap-4 md:gap-6"
          >
            <div className="flex-1">
              <p className="font-black text-red-700 text-base md:text-xl tracking-tighter italic leading-none">Hai, Rifqi! 👋</p>
              <p className="text-[8px] md:text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-1 md:mt-2 leading-relaxed">Klaim saus keju gratis kamu di Richeese App sekarang!</p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-zinc-300 hover:text-black font-black text-xl md:text-2xl">×</button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}