import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {
  // console.log(guitarras);
  return (
    <>
      <Layout title={"Tienda virtual"} description='Tienda virtual, venta de guitarras, accesorios, instrumentos, GuitarLA, tienda de música'>
      
      <main className='contenedor '>
        <h1 className='heading'>Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarras?.map( guitarra => (
            <Guitarra 
            key={guitarra.id}
            guitarra={ guitarra.attributes }
            />
            ) )}
        </div>
      </main>

      </Layout>
    </>
  )
}
export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/tienda-guitarras?populate=imagen`)
  // const respuesta = await fetch(`http://localhost:1337/api/tienda-guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}
// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/tienda-guitarras?populate=imagen`)
//   // const respuesta = await fetch(`http://localhost:1337/api/tienda-guitarras?populate=imagen`)
//   const { data: guitarras } = await respuesta.json()
//   return {
//     props: {
//       guitarras
//     }
//   }
// }