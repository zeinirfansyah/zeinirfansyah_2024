export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-antiFlashWhite">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col justify-center items-center gap-2 text-center py-3 ">
          <div id="footer-title">
            <h1 className="text-xl font-semibold">
              <span className="text-blueMunsell">Zein</span> Irfansyah.
            </h1>
          </div>
          <ul id="footer-contact" className="flex flex-col gap-2">
            <li className="text-[#B0B0B0]">
              <a
                href="mailto:mail@zeinirfansyah.me"
                target="_blank"
                className="hover:text-[#00C0E6] transition-all duration-500"
              >
                mail@zeinirfansyah.me
              </a>
            </li>
            <li className="text-[#B0B0B0]">
              © 2024 All rights reserved - Updated at 10 May 2024
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
