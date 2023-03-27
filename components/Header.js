import Image from "next/image";
import Link from "next/link";
import s from "../styles/components/Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className="wrapper">
        <div className={s.headerWrap}>
          <Link href="/" className="logo">
            <Image
              src="/images/logo.svg"
              alt="Shop logo"
              width={283}
              height={64}
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
