import { bebidas, vinosArgentinos, vinosChilenos } from '../profile'

const styles = {
    container: {
        width:"400px",
        margin: "0 auto"
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

const Vino = ({ Vino }) => {
    return(
        <div style={styles.center}>
            <div className="bg-light"> 
                <h3 style={styles.inlineBlock}>{Vino.title}</h3>
                <span> S/. {Vino.precio}</span>
            </div>
            
        </div>
    )
}


export default function Vinos() {
    return (
        <div  className="bg-light" style={styles.container}>
            <div>
                <div style={styles.center} className="bg-dark">
                    <img src="/bebidaslicores.jpg" className="card-img-top" alt="" />
                    <h1 className="text-light">Bebidas y Licores</h1>
                </div>
                
                {
                    bebidas.map((bebida, i) => (
                        <Vino Vino={bebida} key={i}/>
                    ))  
                }

            </div>
            <div>
                <div style={styles.center} className="bg-dark">
                    <h1 className="text-light">Vinos Argentinos</h1>
                </div>
                
                {
                    vinosArgentinos.map((vinoArgentino, i) => (
                        <Vino Vino={vinoArgentino} key={i}/>
                    ))  
                }

            </div>
            <div>
                <div style={styles.center} className="bg-dark">
                    <h1 className="bg-dark text-light">Vinos Chilenos</h1>
                </div>
                
                {
                    vinosChilenos.map((vinoChileno, i) => (
                        <Vino Vino={vinoChileno} key={i}/>
                    ))  
                }

            </div>
        </div>
    )
}