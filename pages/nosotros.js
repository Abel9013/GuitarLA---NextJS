import Image from "next/image"
import Layout from '../components/layout'
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <>
      <Layout title={"Nosotros"} description='Sobre nosotros, GuitarLA, tienda de música'>
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={styles.contenido}  >
          <Image src="/../public/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros, guitarLA"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada ullamcorper elit non fermentum. Mauris fermentum dolor at ultricies congue. In posuere, purus consectetur aliquam aliquet, odio felis vestibulum est, et euismod turpis augue ut magna. Vivamus sollicitudin non libero et sollicitudin. Duis magna metus, hendrerit nec urna eu, mollis maximus ipsum.
            </p>
            <p>
              Suspendisse at mattis turpis. Vivamus massa sapien, faucibus at fermentum nec, finibus ac orci. Maecenas rhoncus arcu ut metus dictum mattis ut non nulla.
              Morbi convallis eget nulla nec auctor. Donec a augue et ligula dapibus pellentesque. Suspendisse potenti. Duis cursus venenatis tortor, eget tincidunt massa tincidunt quis.
            </p>
          </div>
        </div>
      </main>

      </Layout>
    </>
  )
}
