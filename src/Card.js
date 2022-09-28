import "./Card.css";
const Card = () => {
     const hallo = () =>{
        console.log("ik ben kaartje nummer 1");
     }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eeste kaart</h2>
            </header>
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, amet enim rerum perferendis officia et quas vitae minus, necessitatibus illo at nulla aspernatur similique consequatur! Neque natus unde aliquid adipisci!
            </section>
        </article>
    )
}
export default Card;