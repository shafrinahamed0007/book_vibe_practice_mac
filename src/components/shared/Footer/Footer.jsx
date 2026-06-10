const Footer = () => {
  return (
    
    <footer className="footer sm:footer-horizontal footer-center bg-white/5 backdrop-blur-md border-t border-white/10 text-slate-300 rounded-t-3xl p-6 mt-12 shadow-2xl relative z-10">
      <aside className="w-full text-center">
      
        <p className="text-[11px] font-medium tracking-wider text-slate-500 uppercase">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="text-slate-400 font-bold hover:text-purple-400 transition-colors cursor-pointer">
            Shafrin Ahamed Industries Ltd
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;