import { ReactNode } from "react";

import style from "./style.module.css";
import Button from "../../atoms/button/Button";
import Link from "next/link";

interface HomeLinksCardProps {
  title?: string;
  text?: string;
  className?: string;
  children?: ReactNode;
  btnLink?: string;
}

function HomeLinksCard({ title, text, btnLink, className, children }: HomeLinksCardProps) {
  return (
    <div className={`${ style.card + className}`}>
      {title && <h2 className={style.title}>{title}</h2>}
      {text && <p className={style.text}>{text}</p>}
      <div className={style.btnContainer}>
      {btnLink && (
        <Link href={btnLink} className="justif">
        <Button className="small-btn blue-btn ">
          Conocé más
        </Button>
        </Link>
      )} 
      </div>
      {children}
    </div>
  );
}

export default HomeLinksCard;
