import "../Page3/P3_S2.scss"
import { Photo } from "../../Photo"
export default function P3_S2(){
    return(
        <>
            <section className="Sec32">
                <div className="main">
                    <img src={Photo.chel}></img>
                    <div className="txt">
                        <h1><span>Owner</span> & Executive Chef</h1>
                        <p>Ismail Marzuki</p>
                        <div className="Turn">
                            <div className="coms"><p>“</p></div>
                         <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
                            <div className="coms2"><p>„</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}