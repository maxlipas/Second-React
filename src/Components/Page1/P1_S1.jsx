import "./P1_S1.scss"
import { Photo } from "../../Photo"
export default function P1_S1(){
    return(<>
    <section className="Sec1">
        <div className="l">
            <div className="pp">
        <p className="p1">Restauran</p>
        </div>
        <h1>Italian Cuisine</h1>
        <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
        <div className="nut">
            <button className="b1">Order now</button>
            <button className="b2">Reservation</button>
        </div>
        </div>
        <img src={Photo.loza} alt="" />

    </section>

    
    
    
    </>)
}