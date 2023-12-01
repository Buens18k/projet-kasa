import logoFooter from '../assets/logo_footer.png'
import style from '../styles/layouts/_footer.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
        <img src={logoFooter} alt="" />
        <h3 className={style.footer__title}>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}
