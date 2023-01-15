import { bruschettas, piqueos } from '../profile'

const styles = {
    container: {
        backgroundColor: "#eef",
        width:"500px",
        margin: "0 auto",
    },
    inlineBlock : {
        display: "inline-block",
        width: "400px"
    },
    center : {
        width:"500px",
        margin: "0 auto"
    }
    
}

const Plato = ({ plato }) => {
    return(
        <div style={styles.center}>
            <div> 
                <h3 style={styles.inlineBlock}>{plato.title}</h3>
                <span> S/. {plato.precio}</span>
                <div>
                    <p>{plato.descripcion}</p>
                </div>
            </div>
            
        </div>
    )
}


export default function Platos() {
    return (
        <div style={styles.container}>
            <div>
                <div style={styles.center}>
                    <img src="/platos.jpg" className="card-img-top" alt="" />
                    <h1 className="bg-dark text-light">Bruschettas</h1>
                </div>
                
                {
                    bruschettas.map((bruscheta, i) => (
                        <Plato plato={bruscheta} key={i}/>
                    ))  
                }

            </div>
            <div>
                <div style={styles.center} className="bg-dark" >
                    <h1 className="text-light">Piqueos</h1>
                </div>
                
                {
                    piqueos.map((piqueo, i) => (
                        <Plato plato={piqueo} key={i}/>
                    ))  
                }

            </div>
        </div>
    )
}