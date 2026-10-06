import "../Page1/P1_S5.scss"
import { Photo } from "../../Photo"
export default function P1_S5(){
    return(
        <>
            <section className="Sec5">
                <div className="Centr">
                    <h1>Our greatest chef</h1>
                    <div className="Mans">
                        <div className="kont">
                            <img src={Photo.ML}></img>
                            <h1>Betran Komar</h1>
                            <p>Head chef</p>
                        </div>
                        <div className="kont">
                            <img src={Photo.MM}></img>
                            <h1>Ferry Sauwi</h1>
                            <p>Chef</p>
                        </div>
                        <div className="kont">
                            <img src={Photo.MR}></img>
                            <h1>Iswan Dracho</h1>
                            <p>Chef</p>
                        </div>
                    </div>
                    <button className="knop">View All</button>
                </div>
            </section>
        </>
    )
}