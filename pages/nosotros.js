import Link from 'next/link'
import Layout from '../components/layout'
Layout
export default function Nosotros() {
  return (
    <>
      <Layout title={"Nosotros"} description='Sobre nosotros, GuitarLA, tienda de música'>
      <div>Desde nosotros.js</div>
      <Link href="/">Ir a Inicio</Link>
      </Layout>
    </>
  )
}
