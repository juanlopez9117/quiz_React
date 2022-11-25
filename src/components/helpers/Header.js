import sugar from '../../imagenes/sugar.png'
const Header = () => {
    return (
        <header className="header">
            <img className='logo' src={sugar}/>
            
            <button className='button_header'>Solicitar patrocinio</button>
            <button className='button_header'>Buscar benefactor</button>
            <button className='button_header'>Mis contribuciones</button>
            <button className='button_header'>Quejas y reclamos</button>
           
        </header>
    )
}
export default Header;