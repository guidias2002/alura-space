import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

import Cabecalho from "components/Cabecalho";
import Menu from "components/Menu";
import Populares from "components/Populares";
import Galeria from "components/Galeria";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeira mais completa do espaço</h1>
                        <img src={banner} alt="Banner" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares/>
                </div>
            </main>
        </>
    )
}