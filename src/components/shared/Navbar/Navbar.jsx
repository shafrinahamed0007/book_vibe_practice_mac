
import Link from "next/link";
import NavLink from "../../NavLink/NavLink";

const Navbar = () => {
  return (
    /* 🔮 মেইন কন্টেইনার: সম্পূর্ণ সার্ভার সাইড রেন্ডারড গ্লাস নেভবার */
    <div className="navbar sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 shadow-xl transition-all duration-300">
      
      <div className="navbar-start">
        {/* 📱 মোবাইল রেসপন্সিভ ড্রপডাউন */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-slate-300 hover:bg-white/10 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* মোবাইল মেনু গ্লাস ড্রপডাউন প্যানেল */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#070b12]/95 backdrop-blur-lg border border-white/10 rounded-2xl z-[1] mt-3 w-52 p-3 shadow-2xl space-y-2 text-slate-300"
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/books">All Books</NavLink>
          </ul>
        </div>
        
        {/* 💎 ব্র্যান্ড লোগো */}
        <Link href="/" className="btn btn-ghost text-xl font-black text-white tracking-tight hover:bg-transparent pl-0">
          Book <span className="text-[#8b5cf6]">Vibe</span>
        </Link>
      </div>

      {/* 💻 ডেক্সটপ মেনু লিংকস */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-slate-300">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/books">All Books</NavLink>
          <NavLink href="/listedbooks">Listed Books</NavLink>
        </ul>
      </div>

      {/* ⚡ অ্যাকশন বাটনস (ক্লিন নেক্সট লিংকস) */}
      <div className="navbar-end gap-3">
        {/* Sign In (গ্লাস বাটন) */}
        <Link 
          href="/signin" 
          className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-extrabold text-xs tracking-widest rounded-xl transition-all uppercase active:scale-[0.95]"
        >
          Sign In
        </Link>

        {/* Sign Up (হাইলাইটেড পার্পল নিওন বাটন) */}
        <Link 
          href="/signup" 
          className="px-4 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 transition-all uppercase active:scale-[0.95]"
        >
          Sign Up
        </Link>
      </div>

    </div>
  );
};

export default Navbar;