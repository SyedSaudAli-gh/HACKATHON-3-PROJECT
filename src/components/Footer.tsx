import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-auto flex flex-col justify-center py-10 px-5 ">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Address Section */}
        <div className="w-full md:w-[285px] text-[#9F9F9F] text-center md:text-left">
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </div>

        {/* Links Section */}
        <div className="w-full md:w-[140px] flex flex-col items-center md:items-start gap-5 poppins font-medium">
          <h4 className="text-[#9F9F9F] text-[18px]">Links</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href={"/"} className="hover:bg-slate-100 rounded-full ">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"} className="hover:bg-slate-100 rounded-full ">
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="hover:bg-slate-100 rounded-full ">
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:bg-slate-100 rounded-full ">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full md:w-[140px] flex flex-col items-center md:items-start gap-5 poppins font-medium">
          <h4 className="text-[#9F9F9F] text-[18px]">Help</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href={"/"} className="hover:bg-slate-100 rounded-full ">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:bg-slate-100 rounded-full ">
                Return
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:bg-slate-100 rounded-full ">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-[286px] flex flex-col items-center md:items-start gap-5 poppins font-medium">
          <h4 className="text-[#9F9F9F] text-[18px]">Newsletter</h4>
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="text-[14px] text-[#9F9F9F] w-full p-2 border-b-2 border-[#D9D9D9] focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <button className="text-[14px] py-2 px-4 bg-[#FAF4F4] hover:bg-[#F3F3F3] border-b-2 border-[#D9D9D9] hover:border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Separator */}
      <hr className="w-full max-w-[1240px] mx-auto border-[1px] border-[#D9D9D9] my-10" />

      {/* Footer Text */}
      <p className="text-center text-[#9F9F9F] poppins text-[14px]">
        2022 Meubel House. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
