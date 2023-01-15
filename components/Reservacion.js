export default function Reservacion() {
    return (
        <div className="d-flex justify-content-center " style={{paddingTop:'15px'}}>
            
            <form action="/send-data-here" method="post" className="row g-3 col-md-offset-3" style={{ width:"38em", marginTop:"25px", marginBottom: "25px"}}>
                <div className="col-12">
                    <label  className="form-label">Nombre completo:</label>
                    <input type="text" className="form-control" id="fullname" name="fullname" />
                </div>
                <div className="col-6">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" />
                </div>
                <div className="col-6">
                    <label className="form-label">Telefono:</label>
                    <input type="text" className="form-control" id="phone" name="phone" />
                </div>
                <div className="col-4">
                    <label className="form-label">Fecha:</label>
                    <input type="date" className="form-control" id="date" name="date" />
                </div>
                <div className="col-4">
                    <label className="form-label">Hora:</label>
                    <input type="time" className="form-control" id="time" name="time" />
                </div>
                <div className="col-4">
                    <label className="form-label">Numero de personas:</label>
                    <input type="number" className="form-control" id="people" name="people" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mb-50">RESERVAR</button>
                </div>
            </form>
        </div>
    )
  }