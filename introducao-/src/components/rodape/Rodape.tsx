import './Rodape.css'
function Rodape(){
    const Ano = new Date().getFullYear();

    return(
        <footer className='rodape'>© {Ano} — Senac São Paulo</footer>
    );
}

export default Rodape;