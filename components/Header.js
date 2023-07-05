import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="py-7 border-b-2 border-[--text] fixed top-0 w-full bg-[--background] z-[10000]">
      <div className="wrapper">
        <div className="flex w-full h-full items-center justify-between">
          <Link href="/" className="logo ">
            <Image
              src="/images/logo.svg"
              alt="Shop logo"
              width={100}
              height={44}
            />
          </Link>
          <nav className="flex gap-6 items-end">
            <Link href="/products" className="pb-1">
              Shop
            </Link>
            <Link href="/cart" className="pb-1">
              Cart
            </Link>
            {/* <Link href="/cart">
              <Image
                src="/images/bag-icon.svg"
                alt="bag icon"
                width={27}
                height={35}
                className="bag-icon"
                data-cursor="pointer"
              />
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
