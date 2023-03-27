import s from "../styles/components/Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <p>
        Next Shopify Template powered by{" "}
        <a target="_blank" rel="noreferrer" href="https://square43.com">
          Square43 Studio
        </a>
      </p>
    </footer>
  );
}

export default Footer;
