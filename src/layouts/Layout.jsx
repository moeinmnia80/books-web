import style from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.header__title}>Monet</h1>
        <p className={style.header__text}>
          <a className={style.header__link} href="https://botostart.ir">
            Botostart
          </a>{" "}
          | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={style.footer}>
        <h4>Develpoed By Moein With ❤️</h4>
      </footer>
    </>
  );
}
export default Layout;
