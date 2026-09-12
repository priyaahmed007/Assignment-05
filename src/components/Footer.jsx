import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="bg-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1080px] px-5 py-12 lg:px-0">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Logo + Description */}
          <div className="lg:col-span-2">

            {/* Complete Logo Image */}
            <img
              src={logo}
              alt="Dev Stack"
              className="h-9 w-auto object-contain"
            />

            <p className="mt-4 max-w-[360px] text-xs leading-5 text-gray-400">
              Crafted for developers, tech enthusiasts, and dreamers
              building modern web applications.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5 text-xs text-gray-500">

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-gray-800"
              >
                
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-gray-800"
              >
               
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-gray-800"
              >
                
                LinkedIn
              </a>

            </div>
          </div>


          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-gray-800">
              Product
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Projects
                </a>
              </li>

            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-gray-800">
              Company
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Careers
                </a>
              </li>

            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-gray-800">
              Legal
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-gray-700">
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom Border */}
        <div className="mt-10 border-t border-gray-100 pt-5">

          <div className="flex flex-col items-center justify-between gap-3 text-[10px] text-gray-400 sm:flex-row">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-gray-700"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-gray-700"
              >
                Terms
              </a>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;