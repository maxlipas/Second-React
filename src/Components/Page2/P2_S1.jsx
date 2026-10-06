import { useState, useEffect } from "react";
import "../Page2/P2_S1.scss";
import { Photo } from "../../Photo";

const items = [
    { id: 1, title: "Spaghetti", category: ["Dinner"], image: "spag" },
    { id: 2, title: "Gnocchi", category: ["Lunch"], image: "kar" },
    { id: 3, title: "Rovioli", category: ["Lunch"], image: "pel" },
    { id: 4, title: "Penne Alla Vodka", category: ["Dinner", "Drink"], image: "mak" },
    { id: 5, title: "Risoto", category: ["Dessert", "Drink", "Lunch"], image: "ris" },
    { id: 6, title: "Splitza Signature", category: ["Dessert", "Drink"], image: "piz" },
];

export default function P1_S3() {
    const [activeTab, setActiveTab] = useState("all");
    const [visibleItems, setVisibleItems] = useState(items);

    useEffect(() => {
        if (activeTab === "all") {
            setVisibleItems(items);
        } else {
            setVisibleItems(
                items.filter((item) => {
                    const cats = Array.isArray(item.category)
                        ? item.category
                        : [item.category];
                    return cats.includes(activeTab);
                })
            );
        }
    }, [activeTab]);

    return (
        <section className="Sec3">
            <div className="Menu">
                <h1>Menu</h1>
                <div className="nav">
                    <button onClick={() => setActiveTab("all")} className="knop">All category</button>
                    <button onClick={() => setActiveTab("Dinner")} className="knop">Dinner</button>
                    <button onClick={() => setActiveTab("Lunch")} className="knop">Lunch</button>
                    <button onClick={() => setActiveTab("Dessert")} className="knop">Dessert</button>
                    <button onClick={() => setActiveTab("Drink")} className="knop">Drink</button>
                </div>

                <div className="list">
                    {visibleItems.map((i) => (
                        <div className="kont" key={i.id}>
                            <img src={Photo[i.image]} alt={i.title} />
                            <h1>{i.title}</h1>
                            <img src={Photo.rait} alt="rating" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Egestas consequat mi eget auctor aliquam, diam.
                            </p>
                            <div className="bott">
                                <h1>$12.05</h1>
                                <button className="knop">Order now</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sepiya">
                    <div className="str">
                        <p>❮</p>
                    </div>
                    <div className="cifra">
                        <p>1</p>
                    </div>
                    <div className="cifra">
                        <p>2</p>
                    </div>
                    <div className="cifra">
                        <p>3</p>
                    </div>
                    <div className="toch">
                        <p>. . .</p>
                    </div>
                    <div className="str">
                        <p>❯</p>
                    </div>
                </div>
            </div>
        </section>
    );
}