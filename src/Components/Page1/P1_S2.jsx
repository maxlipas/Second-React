import "./P1_S2.scss"
import { Photo } from "../../Photo"
export default function P1_S2(){
    return(<>
    <section className="Sec2">
        <img src={Photo.sala} alt="" />
        <div className="r">
        <h2>Welcome to <span>delizioso</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
        <button>See our menu</button>
        </div>
    </section>
    </>)
}