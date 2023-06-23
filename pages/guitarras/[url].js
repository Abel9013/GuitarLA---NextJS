
export default function Producto() {
  
  return (
    <div>[url]</div>
  )
}
export async function getServerSideProps (){
  const respuesta = await fetch(`${process.env.API_URL}/tienda-guitarras?filters[url]=beck&populate=imagen`)
  const { data } = await respuesta.json()
  console.log(data);
  return{
    props:{

    }
  }
}