import Head from 'next/head'
import Layout from '../components/Layout'
import Reservacion from '../components/Reservacion'
import Cartas from '../components/Cartas'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>L'ancora Page</title>
      </Head>
      <Layout>
        {/**primera section banner */}
        <div className=" bg-dark text-light text-center">
          <Slider />
          <p>Horario de Atención: Lunes a Domingo 12pm - 11pm </p>
          <p>Dirección: Av.Ramon Castilla s/n - El Molino (frente al colegio Santa María)</p>
        </div>
        <br/>
        {/**segunda section Nuestra carta*/}
        <div className="" id="cartas">
          <div className="items-center w-25 p-50-0 m-auto">
              <div className="overflow">
                <img src="/cubiertos.png" className="card-img-top" alt="" width="50px" height="150px"/>
              </div>
          </div>
          <h2 className="card-title text-center">Nuestra Carta</h2>
          <br />
          <Cartas />
        </div>
        <br/>
        {/**tercera section reservacion*/}
        <div className="md-25 col-12 bg-dark text-light my-25">
          <div className="text-center" id="reservacion" style={{paddingTop:'25px'}}>
            <h2 className="card-title">¡Gracias por tu visita!</h2>
            <h2 className="card-title">Reserva tu mesa con nosotros</h2>
          </div>
          <Reservacion />
        </div>
        <br/>
      </Layout>
    </div>
  )
}
