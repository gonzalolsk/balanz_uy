import HomeLinksCard from "../../molecules/homeLinksCard/HomeLinksCard";
import style from './style.module.css'
export default function HomeLinksSection(){
    return(
        <section className={`w-100 d-flex justify-content-between bg-primary-color ${style.homeLinksSection}`}>
            <HomeLinksCard 
                title="Balanz Uruguay S.A" 
                text="Gestor de portfolios regulado 
                        y supervisado por la 
                        Superintendencia de Servicios
                        Financieros del Banco Central 
                        de Uruguay" 
                btnLink="#"
                className=""
            />

            <HomeLinksCard 
                title="Balanz Uruguay Agente de Valores S.A" 
                text="Intermediario de valores regulado 
                        y supervisado por la 
                        Superintendencia de Servicios
                        Financieros del Banco Central 
                        de Uruguay." 
                btnLink="#"
                className="" 
            />
        </section>
    )
}