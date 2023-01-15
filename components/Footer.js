// <Image src="..." className="card-img-top" alt="..."/>
export default function Footer() {
    return (
      <div>
        <footer className=" bg-dark text-light text-center">
          <div className="card-body" style={{paddingTop:'25px'}}>
            <h5 className="card-title">Av.Ramón Castilla s/n - El Molino (frente al colegio Santa María)</h5>
            <p className="card-text">Atención:</p>
            <p className="card-text">Lunes - Sabados 12pm-10pm</p>
            <p className="card-text">Domingos 12pm-8pm</p>
            <p className="card-text">
              <small className="text-muted">
                Copyright 2023 Todos los derechos reservados by L'Ancora Diseñado por CDN
              </small>
            </p>
          </div>
        </footer>
      </div>
    )
  }