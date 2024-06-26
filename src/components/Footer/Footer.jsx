import React from "react";
import logo from "@/images/footerlogo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-y-6 px-20 py-16 bg-[#001c48] text-white">
      <div className=" flex flex-col gap-y-2">
        <div className="flex items-center gap-x-1">
        <Image src={logo} alt="logo" className="size-8"/>
        <p className="text-3xl">MetaLogic</p>
        </div>
        <p className="text-sm">Software Private Limited</p>
        <p className="text-sm">Saptakhel, Lalitpur (Head office)</p>
        <p className="text-sm">+ 977 9851353599</p>
        <p className="text-sm">info@metalogic.com.np</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Company</p>
        <a className="text-xs" href="">
          Feedback
        </a>
        <a className="text-xs" href="">
          patnership
        </a>
        <a className="text-xs" href="">
          Terms and Conditions
        </a>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Services</p>
        <a className="text-xs" href="">
          Custom Software Development
        </a>
        <a className="text-xs" href="">
          Web Development
        </a>
        <a className="text-xs" href="">
          Mobile App Development
        </a>
        <a className="text-xs" href="">
          Cloud Computing Services
        </a>
        <a className="text-xs" href="">
          Quality Assurance and Testing
        </a>
        <a className="text-xs" href="">
          UI/UX Designing
        </a>
        <a className="text-xs" href="">
          Maintenance and Support
        </a>
        <a className="text-xs" href="">
          UI/UX Designing
        </a>
        <a className="text-xs" href="">
          Dev Ops
        </a>
        <a className="text-xs" href="">
          Blockchain Solutions
        </a>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">Join</p>
        <a className="text-xs" href="">
          Careers at MetaLogic
        </a>
        <a className="text-xs" href="">
          Internships
        </a>
      </div>
      <div className="flex flex-col  gap-y-2">
        <p className="text-xl">Join us on Social Medias</p>
        <div>
          <a className="text-xs" href="">
            Careers at MetaLogic
          </a>
          <a className="text-xs" href="">
            Internships
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
