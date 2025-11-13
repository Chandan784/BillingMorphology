export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {/* Logo / About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Morphology Healthcare Solution Pvt. Ltd.
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering healthcare professionals and organizations with
              structured billing, audit-ready governance, and ethical financial
              solutions for a transparent healthcare ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-400 transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:text-blue-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@billingmorphology.com"
                  className="hover:text-blue-400 transition"
                >
                  info@billingmorphology.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+919989211109"
                  className="hover:text-blue-400 transition"
                >
                  +91 99892 11109
                </a>
              </li>
              <li className="leading-relaxed">
                3rd Floor, Rent A Desk - Infantry Road, <br />
                4, Union Street, Infantry Rd, <br />
                Area: Shivaji Nagar, Bengaluru, <br />
                Karnataka, India – 560001 <br />
                Landmark: Opp. Cauveri Central Emporium
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">
              Morphology Healthcare Solution Pvt. Ltd.
            </span>{" "}
            | All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Designed & Developed by{" "}
            <a
              href="https://applute.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Applute Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
