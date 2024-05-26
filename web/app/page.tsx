import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../public/LuckyChainLogo.jsx";
export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[100vh]">
        <Navbar className="absolute top-0 z-50 w-full flex items-center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/draw">
                Draw
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/about" aria-current="page">
                About
              </Link>
            </NavbarItem>
            {/* <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem> */}
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <h1 className="text-6xl font-bold absolute top-[30%] left-1/2 transform -translate-x-1/2">
          Connect everything. <br />
          Build anything.
        </h1>
        {/* <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2">Lucky Chain</h1> */}
        <iframe className="w-full h-full" src="/index.html">
        </iframe>

      </div>
      {/* <footer className="w-full h-24 flex items-center justify-center border-t">
        <p>Lucky Chain</p>
      </footer> */}
    </main>
  );
}
