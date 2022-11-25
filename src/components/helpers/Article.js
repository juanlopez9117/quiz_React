import Aside from "./Aside";

const Article = () =>{
    return(
        <article className="article">
            <section        >
                <form className="form">
                    <label for="">nombres</label>
                    <input placeholder="" type="text"/>
                    <label for="">apellido</label>
                    <input placeholder="" type="text"/>
                    <label for="">direccion</label>
                    <input placeholder="" type="text"/>
                    <label for="">correo</label>
                    <input placeholder="" type="text"/>
                    <label for="">telefono</label>
                    <input placeholder="" type="text"/>
                    <label for="">edad</label>
                    <input placeholder="" type="text"/>   
                    <button>enviar datos</button>
                </form>
            </section>
            <section>
                <Aside/>
            </section>
        </article>
    )
}
export default Article;