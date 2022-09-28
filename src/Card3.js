import "./Card.css";
const Card3 = () => {
    const hallo = () =>{
        console.log("ik ben kaartje nummer 3");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Derde kaart</h2>
            </header>
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, amet enim rerum perferendis officia et quas vitae minus, necessitatibus illo at nulla aspernatur similique consequatur! Neque natus unde aliquid adipisci!
            </section>
        </article>
    )
}
export default Card3;