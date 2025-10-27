import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondry-blue w-full flex flex-col gap-2 justify-center items-center py-4 bottom-0 text-xs mt-10">
      <p className="text-white/50">
        <span className="font-semibold">&copy; 2025 KHALED</span> ,
        All rights reserved.
      </p>
      <div className="flex gap-4 items-center">
        {["Privacy Policy", "Terms of Service", "Contact Us", "About Us"].map(
          (item) => (
            <span
              key={item}
              className="text-dirty-grey hover:text-white/50 cursor-pointer"
            >
              {item}
            </span>
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
