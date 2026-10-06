import "../Page1/P1_S4.scss"
import { Photo } from "../../Photo"
export default function P1_S4(){
    return(
        <>
            <section className="Sec4">
                <div className="centr">
                    <img src={Photo.left}></img>
                    <div className="right">
                        <h1>Let's reserve <span>a table</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <button className="But">Reservation</button>
                    </div>
                </div>
            </section>
        </>
    )
}