import { Map } from './Map'
import { FaXTwitter, FaFacebookF, FaInstagram, FaSquareYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#faf0e5] py-10">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-8 max-w-6xl mx-auto px-6 items-start">
        {/* Map thumbnail */}
        <div className="w-full md:w-[300px] h-[200px] md:h-[150px] rounded-lg overflow-hidden">
          <Map />
        </div>

        {/* Bakery Location + Hours */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-[#3d2b1f] mb-1">
              Bakery Location
            </h3>
            <p className="text-[#5c4535] text-sm">
              1235 Ellenburg Street,<br />
              Lawmore, NY 19265
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-[#3d2b1f] mb-1">
              Hours
            </h3>
            <p className="text-[#5c4535] text-sm">10:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2 md:text-right">
          <h3 className="font-display text-lg font-bold text-[#3d2b1f]">
            Social Media
          </h3>
          <div className="flex gap-4 md:justify-end text-[#3d2b1f]">
            <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
              <FaXTwitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-70 transition-opacity">
              <FaSquareYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-[#e8d5c4] my-6 max-w-6xl mx-auto" />

      <div className="text-center">
        <p className="text-[#3d2b1f] text-xs">
          
        </p>
      </div>
    </footer>
  )
}