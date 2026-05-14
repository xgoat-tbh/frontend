export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 Go & Gain Classes. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors duration-200 cursor-pointer">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors duration-200 cursor-pointer">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
