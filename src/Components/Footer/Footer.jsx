
import { Photo } from "../../Photo"
import "./Footer.scss"
export default function App(){
    return(
        <>
            <footer>
                <div className="centr">
                    <div className="first">
                        <img className="logo" src={Photo.logo1}></img>
                        <p>Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
                        <div className="sots">
                            <img src={Photo.twit}></img>
                            <img src={Photo.inst}></img>
                            <img src={Photo.face}></img>
                        </div>
                    </div>
                    <div className="second">
                        <h1>Page</h1>
                        <p>Home</p>
                        <p>Menu</p>
                        <p>Order online</p>
                        <p>Catering</p>
                        <p>Reservation</p>
                    </div>
                    <div className="third">
                        <h1>Information</h1>
                        <p>About us</p>
                        <p>Testimonial</p>
                        <p>Event</p>
                    </div>
                    <div className="fourth">
                        <h1>Get in touch</h1>
                        <p>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                        <p>delizioso@gmail.com</p>
                        <p>+123 4567 8901</p>
                    </div>
                </div>
                <div className="end">
                    <p>Copyright @ 2022 Delizioso</p>
                </div>
            </footer>
        </>
    )
}