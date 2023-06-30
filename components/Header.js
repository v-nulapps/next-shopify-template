import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="py-7 border-b-2 border-[--text]">
      <div className="wrapper">
        <div className="flex w-full h-full items-center justify-between">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.svg"
              alt="Shop logo"
              width={100}
              height={44}
            />
          </Link>
          <nav>
            <Link href="/products">Shop</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
