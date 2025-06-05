import styles from './Home.module.css'
import imageFigure from '/image-1.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'



function Home() {
    return (
        <>
            <Header />

            <Container>
            <section className={styles.home} >
                <div className={styles.apresentacao}>
                    <p>
                        Olá, somos <br />
                        <span>João V e Davi</span> <br />
                        Devs Full Stack
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais sobre nós!
                    </Link>
                </div>
            </section>
            </Container>

            <Footer />
        </>
    )
}

export default Home