import { Bell, BookOpen, Search } from "lucide-react";
import Link from "next/link";
// import {Br} from "lucide-react"

const NonDashboardNavbar = () => {
  return (
    <header className=" w-full bg-primary-blue py-6 shadow-2xs">
      <div className="sm:w-3/4 sm:mx-auto w-full mx-6 flex items-center justify-between gap-18 ">
        <Link href="/" className="text-2xl sm:text-xl font-bold">
          LEARN
        </Link>
        <div className="w-full flex items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <Link
              href={"/"}
              className="hidden lg:inline-block text-white/60 hover:text-white font-semibold "
            >
              Browse Course
            </Link>
            <Link
              href={"/"}
              className="hidden lg:inline-block text-white/60 hover:text-white font-semibold"
            >
              About us
            </Link>
            <div>
              <div className="hidden md:flex items-center justify-between py-2 px-6 shadow-accent bg-secondry-blue text-dirty-grey rounded-md">
                <BookOpen
                  className="text-white/60 hover:text-white mr-2"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="outline-none border-none bg-transparent text-white"
                />
              </div>
              <Link
                href="/search"
                className="md:hidden bg-secondry-blue text-white/50 py-2 px-6 rounded-md font-semibold hover:text-white"
              >
                Search
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <button className="relative cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-secondry-blue ">
              <span className=" absolute top-0 right-0 bg-blue-500 rounded-full w-2 h-2"></span>
              <Bell className="text-white/50 hover:text-white" size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NonDashboardNavbar;
