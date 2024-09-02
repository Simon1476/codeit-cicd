import Link from "next/link";
import { Button } from "@headlessui/react";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              Pocket
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <Link
                href="/features"
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              >
                <span className="relative z-10">Features</span>
              </Link>
              <Link
                href="/features"
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              >
                <span className="relative z-10">Reviews</span>
              </Link>
              <Link
                href="/features"
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              >
                <span className="relative z-10">Pricing</span>
              </Link>
              <Link
                href="/features"
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              >
                <span className="relative z-10">FAQs</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 data-[disabled]:bg-gray-500">
              Log in
            </Button>
            <Button className="rounded bg-gray-900 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 data-[disabled]:bg-gray-500">
              Download
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
