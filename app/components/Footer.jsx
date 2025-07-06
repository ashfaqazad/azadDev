import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-[0.5px] border-gray-800 rounded mt-auto">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">


          {/* Logo and Description */}
          {/* <div className="col-span-1 md:col-span-2">

            {/* <Link href="/" className="text-2xl font-bold">
              Logo
            </Link> */}
          {/* <Link href="/">
              <img
                src="/Images/logo3.svg"
                alt="Logo"
                className="h-50 w-auto align-middle"
                style={{ marginTop: "-50px" }}
              />
            </Link> */}

          {/* <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner in digital solutions. We help businesses grow and
              succeed in the digital age.
            </p>
          </div> */}




          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row ">

            {/* Logo Image */}
            <Link href="/" className="inline-block">
              <img
                src="/Images/logo3.svg"
                alt="Logo"
                className="h-50 w-auto"
              />
            </Link>

            {/* Text next to logo */}
            <p className="text-sm text-muted-foreground md:mt-20">
              Your trusted partner in digital solutions. We help businesses grow and succeed in the digital age.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>

              {/* Parent: Services */}
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Services
                </Link>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link href="/services/web" className="text-sm text-muted-foreground hover:text-foreground">
                      • Web Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/develop" className="text-sm text-muted-foreground hover:text-foreground">
                      • Web Development
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Quick Links
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/services/web", label: "Web Design" },
                { href: "/services/develop", label: "Web Development" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                123 Business Street
              </li>
              <li className="text-sm text-muted-foreground">
                City, State 12345
              </li>
              <li className="text-sm text-muted-foreground">
                contact@example.com
              </li>
              <li className="text-sm text-muted-foreground">
                (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full mt-8 pt-8 border-t border-gray-800 border-opacity-30">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} AzadDev All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}





