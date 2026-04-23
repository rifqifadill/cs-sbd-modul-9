"use client";
import { useState, useEffect } from 'react';

const promoData = [
  {
    id: 1,
    image: "/assets/wings-chicken.jpg",
    label: "User Baru",
    labelBg: "bg-yellow-400 text-black",
    title: "Diskon 15% Richeese App",
    description: "Install dan daftar akun Richeese App buat dapet diskon spesial pesanan pertama.",
    buttonText: "Ambil Promo"
  },
  {
    id: 2,
    image: "/assets/fire-chicken.jpg",
    label: "Tukar Poin",
    labelBg: "bg-red-600 text-white",
    title: "500 Poin = Ayam Gratis",
    description: "Poin numpuk? Tuker langsung sama 1 Paket Fire Chicken gratis tanpa bayar!",
    buttonText: "Tukar Sekarang"
  },
  {
    id: 3,
    image: "/assets/burger-chicken.jpg",
    label: "Special VIP",
    labelBg: "bg-gradient-to-r from-yellow-200 to-yellow-500 text-black",
    title: "Buy 1 Get 1",
    description: "Khusus pemegang VIP Pass, nikmati promo Buy 1 Get 1 setiap hari Jumat.",
    buttonText: "Cek Status VIP"
  }
];

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<{ id: number; image: string; label: string; labelBg: string; title: string; description: string; buttonText: string; } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen text-zinc-900 bg-light-pattern">
      
      <div className="bg-yellow-400 text-red-900 font-bold text-sm py-1 marquee-container border-b border-yellow-500">
        <div className="marquee-content">
          📢 Info buat anak kosan: Masukin kode <span className="bg-black text-white px-2 rounded-md font-medium tracking-wide">RIFQI-MABAR</span> di app buat dapet ekstra 2 Cheese Sauce gratis! Lumayan buat ngemil pas ngoding. 📢
        </div>
      </div>

      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 h-20 transition-all">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-full">
          <div className="bg-[#da251d] h-full w-24 md:w-32 flex flex-col items-center justify-center cursor-pointer shadow-inner">
            <span className="text-white font-bold italic text-xl md:text-2xl leading-none">Richeese</span>
            <span className="text-yellow-400 font-bold text-xs md:text-sm">Factory</span>
          </div>
          <div className="hidden lg:flex space-x-8 text-[#7a1811] font-bold text-sm tracking-widest items-center">
            <a href="#menu" className="hover:text-red-500 transition-colors">OUR MENU</a>
            <a href="#promo" className="hover:text-red-500 transition-colors">PROMO</a>
            <a href="#event" className="hover:text-red-500 transition-colors relative group">
              <span className="absolute -top-3 -left-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
              EVENT
            </a>
            <a href="#vip" className="hover:text-red-500 transition-colors">MEMBER</a>
          </div>
          <button className="bg-[#da251d] text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition shadow-sm hover:shadow-md text-sm tracking-wide">
            Order Now
          </button>
        </div>
      </nav>

      <header className="bg-pattern relative overflow-hidden border-b border-yellow-400/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center relative z-10">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0 relative group">
            <img 
              src="/assets/mabar-complete.jpg" 
              alt="Paket Mabar Complete" 
              className="w-full max-w-lg rounded-2xl shadow-2xl border border-white/5 transform -rotate-1 group-hover:rotate-0 transition duration-500 object-cover h-80"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12 text-white">
            <h1 className="text-6xl md:text-8xl font-black text-[#fce029] leading-none tracking-tighter mb-2 text-shadow-solid transform -rotate-1">
              MUKBANG<br/>COMPLETE
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-white/90 mb-8 tracking-tight">Perut Full Nugas Jadi Powerfull!</h2>
            
            {/* Glassmorphism Price Box */}
            <div className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl text-left transition hover:bg-black/50">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
                
                <ul className="text-white/90 font-medium text-base md:text-lg space-y-2">
                  <li className="flex items-center"><span className="text-yellow-400 text-2xl font-bold mr-2">5</span> Fire Chicken</li>
                  <li className="flex items-center"><span className="text-yellow-400 text-2xl font-bold mr-2">3</span> Nasi</li>
                  <li className="flex items-center"><span className="text-yellow-400 text-2xl font-bold mr-2">3</span> Minuman</li>
                </ul>

                <div className="border-l border-white/20 pl-0 md:pl-6 pt-4 md:pt-0">
                  <p className="text-gray-400 text-xs tracking-wider uppercase mb-1">Harga Paket Nugas</p>
                  <p className="text-gray-500 line-through text-sm">Rp217.272,-</p>
                  <p className="text-[#fce029] text-4xl md:text-5xl font-black tracking-tighter">Rp161<span className="text-2xl md:text-3xl">.818,-</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="menu" className="py-20 bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-black text-[#7a1811] uppercase tracking-tighter">Rekomendasi Menu Mahasiswa</h3>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-500 text-sm max-w-lg mx-auto">Sering begadang ngerjain tugas? Ini dua burger andalan yang bikin mata minimalis dan perut ekonomis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300 group">
              <img src="/assets/burger-chicken.jpg" alt="Rich Burger" className="w-52 h-52 object-cover rounded-full shadow-md group-hover:scale-105 transition duration-500" />
              <h4 className="font-black text-xl mt-8 text-[#7a1811] uppercase tracking-tight">Rich Burger Chicken</h4>
              <p className="text-gray-500 text-sm text-center mt-3 px-4 leading-relaxed">Daging ayam krispi ditambah saus keju khas Richeese.</p>
            </div>
            <div className="flex flex-col items-center bg-red-50/50 p-8 rounded-2xl border border-red-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300 group">
              <img src="/assets/fire-burger-Chicken.jpg" alt="Fire Burger" className="w-52 h-52 object-cover rounded-full shadow-md group-hover:scale-105 transition duration-500" />
              <h4 className="font-black text-xl mt-8 text-red-700 uppercase tracking-tight">Fire Burger Chicken</h4>
              <p className="text-red-900/70 text-sm text-center mt-3 px-4 leading-relaxed">Buat yang butuh melek semalaman, pedesnya ayam Richeese dibikin burger.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3e3] py-16 border-y border-[#f0e3cc] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl">
          <div className="flex justify-center z-10 relative">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl transform scale-110"></div>
            <img src="/assets/eskrim-choco.jpg" alt="Ice Cream" className="w-64 h-64 object-cover rounded-full shadow-xl relative z-10 border border-white/50" />
          </div>
          <div className="text-center md:text-left z-10">
            <span className="bg-[#5e2115] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">Obat Mata Segar Seharian</span>
            <h3 className="text-5xl font-black text-[#5e2115] mt-5 mb-3 tracking-tighter">Richoco Dino</h3>
            <p className="text-lg text-[#5e2115]/80 font-medium">Hanya <span className="text-5xl font-black text-[#5e2115] ml-2">Rp 13<span className="text-3xl">.636</span></span></p>
          </div>
        </div>
      </section>

      <section id="promo" className="py-20 bg-[#121212] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-white uppercase tracking-wider">Promo Special Richeese</h3>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promoData.map((promo) => (
              <div 
                key={promo.id} 
                className={`bg-[#1a1a1a] ${promo.id === 2 ? 'border border-red-900/50' : 'border border-zinc-800/50'} p-6 rounded-2xl shadow-lg flex flex-col items-center transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 group cursor-pointer`}
                onClick={() => setSelectedPromo(promo)}
              >
                <div className="w-full h-48 bg-[#111] rounded-xl flex items-center justify-center overflow-hidden mb-6 relative">
                  <img src={promo.image} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="text-center flex-grow w-full">
                  <span className={`${promo.labelBg} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>{promo.label}</span>
                  <h4 className="font-black text-xl mt-4 mb-2 uppercase tracking-tight">{promo.title}</h4>
                  <p className="text-zinc-400 text-xs mb-8 leading-relaxed px-2">{promo.description}</p>
                </div>
                <button className={`w-full ${promo.id === 2 ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-yellow-400 hover:bg-yellow-500 text-black'} font-bold py-3.5 rounded-xl transition uppercase text-xs tracking-wider`}>
                  {promo.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="vip" className="py-24 bg-black text-white relative overflow-hidden border-t border-zinc-900">
        
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-14 max-w-5xl mx-auto">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg mb-4">Limited Edition</span>
              <h3 className="text-5xl font-black text-white mb-4 tracking-tighter leading-none">VIP <span className="text-yellow-400">Card</span> Mahasiswa</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">Kartu ajaib khusus mahasiswa. Ubah struk makan siangmu menjadi poin Fire Chicken gratis saat tanggal tua menyerang.</p>
            </div>

            <div className="w-full lg:w-auto flex justify-center perspective-container">
              
              
              <div className="w-96 h-56 rounded-2xl p-6 relative overflow-hidden shadow-2xl border border-white/10 bg-[#0d0d0d] hover:scale-105 hover:rotate-2 transition-all duration-500 group cursor-pointer 3d-card">
                
                
                <div className="absolute inset-0 bg-brushed-metal opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine z-20" />

      
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-9 border border-yellow-600/50 rounded-lg absolute top-0 left-0 bg-gradient-to-br from-yellow-600/30 to-yellow-900/10 shadow-inner"></div>
                  
                  
                  <div className="absolute top-1 right-20 text-yellow-600/10 text-4xl font-black rotate-12 opacity-50 pointer-events-none">R</div>
                  
                  <div className="absolute top-0 right-0 z-10 text-right">
                    <span className="text-white font-black italic text-base block">Richeese</span>
                    <span className="text-yellow-500 text-[9px] font-bold uppercase tracking-widest -mt-1 block">Factory</span>
                  </div>
                </div>

                
                <div className="mt-16 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-8 rounded-md bg-gradient-to-br from-gray-400/80 to-gray-600/50 border border-gray-500 flex items-center justify-center shadow-md">
                      <div className="w-8 h-6 border border-gray-700/50 rounded-sm"></div>
                    </div>
                    <svg className="w-5 h-5 text-zinc-500 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-2xl font-black tracking-tighter text-shadow-glow text-white">VIP</span>
                  </div>
                </div>

          
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1 font-medium">Authorized Member</p>
                      <p className="text-base font-bold tracking-widest uppercase bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent text-shadow-glow">Muhamad Rifqi Fadil</p>
                    </div>
                    <div className="flex -space-x-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-[#ea001b]"></div>
                      <div className="w-6 h-6 rounded-full bg-[#f79e1b]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-0"></div>
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent z-0 opacity-70"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white pt-16 border-t border-gray-100 mt-auto">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            
            <div className="flex gap-8">
              <div className="bg-[#da251d] w-16 h-16 flex items-center justify-center rounded-xl shadow-sm">
                <span className="text-white font-bold italic text-[10px] leading-none text-center">Richeese<br/><span className="text-yellow-400 text-[8px]">Factory</span></span>
              </div>
              <div className="flex gap-10 text-sm text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                <div className="flex flex-col gap-3">
                  <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
                  <a href="#" className="hover:text-red-600 transition-colors">Discovery</a>
                  <a href="#" className="hover:text-red-600 transition-colors">Career</a>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="#" className="hover:text-red-600 transition-colors">Big Order</a>
                  <a href="#" className="hover:text-red-600 transition-colors">Birthday</a>
                  <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center md:items-start">
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-gray-50 text-red-600 border border-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 text-red-600 border border-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 text-red-600 border border-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-sm text-zinc-800 uppercase tracking-tighter">Muhamad Rifqi Fadil Itsnain</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Teknik Komputer - FTUI 2026</p>
              </div>
            </div>

            <div className="w-full">
              <p className="text-sm text-zinc-800 mb-3 font-bold uppercase text-[10px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Nearby Outlet - Margonda
              </p>
              <div className="bg-gray-100 w-full h-32 rounded-xl border border-gray-100 overflow-hidden shadow-inner relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.232371900135!2d106.83002621537248!3d-6.364234064032768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec111f185dbb%3A0x1a87796d11626f2f!2sRicheese%20Factory%20Margonda!5e0!3m2!1sen!2sid!4v1682390884000!5m2!1sen!2sid" 
                  className="w-full h-full opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-[#fce029] py-4 text-[#5e2115] font-black text-center text-xs tracking-widest uppercase shadow-inner">
          © 2026 Richeese Factory Indonesia - FTUI Internship Project
        </div>
      </footer>

      
      <div className={`fixed bottom-8 right-8 max-w-sm bg-white border border-gray-100 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-700 z-50 flex items-start space-x-4 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="w-1 h-full absolute left-0 top-0 bottom-0 bg-yellow-400 rounded-l-2xl"></div>
        <div className="flex-1 pl-2">
          <h4 className="font-bold text-zinc-900 text-base">Hai, Rifqi! 👋</h4>
          <p className="text-sm text-zinc-500 mt-1 leading-relaxed">Klaim saus keju gratis kamu di Richeese App sekarang!</p>
        </div>
        <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-zinc-800 transition font-medium text-xl leading-none">&times;</button>
      </div>

      {/* Minimalist Modal */}
      {selectedPromo && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity" onClick={() => setSelectedPromo(null)}>
          <div className="bg-[#1a1a1a] border border-zinc-800/50 p-8 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedPromo(null)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
            >&times;</button>
            
            <div className="flex flex-col items-center mt-2">
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 border border-zinc-800/50">
                <img 
                  src={selectedPromo.image} 
                  alt={selectedPromo.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <span className={`${selectedPromo.labelBg} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                {selectedPromo.label}
              </span>
              <h2 className="text-2xl font-black mt-4 text-white uppercase text-center tracking-tight">{selectedPromo.title}</h2>
              <p className="text-zinc-400 text-sm mt-3 mb-10 text-center max-w-sm leading-relaxed">{selectedPromo.description}</p>
              
              <button className={`${selectedPromo.id === 2 ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-yellow-400 hover:bg-yellow-500 text-black'} text-xs font-bold py-4 px-12 rounded-xl transition uppercase tracking-widest w-full md:w-auto`}>
                {selectedPromo.buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
      
    </main>
  );
}