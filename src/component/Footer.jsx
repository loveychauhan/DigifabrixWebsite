import { Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/digifabrixLogo.png"
                className="h-6 w-6 text-blue-600"
              />
              <span className="text-xl font-bold text-[rgb(0,86,169)]">
                Digifabrix
              </span>
            </div>
            <p className="text-slate-500 text-[12px] leading-relaxed">
              DigiFabrix is a digital manufacturing platform that helps
              factories implement shopfloor digitization, OEE monitoring, and
              Industry 4.0 automation. Our platform provides real-time
              production monitoring, manufacturing execution systems (MES),
              workforce intelligence with DOJO 2.0, product traceability, and
              digital checksheets to improve productivity and operational
              efficiency.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/solutions/OEE" className="hover:text-blue-600">
                  OEE Monitoring
                </Link>
              </li>
              <li>
                <Link href="/solutions/MES" className="hover:text-blue-600">
                  MES (Manufacturing Execution System)
                </Link>
              </li>
              <li>
                <Link to="/solutions/EMS" className="hover:text-blue-600">
                  Environment Monitoring & Controlling
                </Link>
              </li>
              <li>
                <Link to="/solutions/dojo" className="hover:text-blue-600">
                  DOJO 2.0
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start justify-center gap-2">
                <MapPin className="h-4  w-4 mt-1 text-blue-600" />
                <span>
                  Shiv Nagar Part 2, Gali No. 1, Rewari, Haryana 123401
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-1 text-blue-600" />
                <span> sales@digifabrix.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Digifabrix Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
