import Link from "next/link";
import style from './navigation.module.css';
import Logo from '@/public/images/logo.svg'
import Image from "next/image";



export default function Navigation({ }) {
  return (
    <header className={`header py-4 fixed-top ${style.header}` }>
      <div className="container">
        <div className="d-flex justify-content-between">

          <Link href={'/'} className="mx-2">
            <Image src={Logo.src} alt="Balanz" width="144" height="28" className={style.logo} />
          </Link>
          <Link href={'#'} className={style.aboutUsLink}>
            <span className="text-white fw-bold ">Sobre Nosotros</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

