import Graph from "../images/graph.png";
import Neural from "../images/neural.png";
import Book from "../images/book.png";

const Landing = () => {

    
    return (
        <div className="landing-container">
            <div className="content">
                <section className="header">
                    <h2>Emotion Recognition</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum iste architecto ipsum officia sed laborum similique error laudantium, id rerum numquam pariatur suscipit earum esse, molestias libero, fugit eum?</p>
                </section>

                <section className="about">
                    <h2>Approach</h2>

                    <div className="flex">
                        <div className="card">
                            <div className="header">
                                <img src={Neural} alt="Model" />
                            </div>

                            <h4>Model Used</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum aut earum beatae, sequi quod numquam nobis iure facilis ipsam. Amet, provident ratione. Aliquam obcaecati ducimus natus incidunt quos vero.</p>
                        </div>
                        <div className="card">
                            <div className="header">
                                <img src={Graph} alt="Model" />
                            </div>

                            <h4>Comparison</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum aut earum beatae, sequi quod numquam nobis iure facilis ipsam. Amet, provident ratione. Aliquam obcaecati ducimus natus incidunt quos vero.</p>
                        </div>
                        <div className="card">
                            <div className="header">
                                <img src={Book} alt="Model" />
                            </div>

                            <h4>Usage</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum aut earum beatae, sequi quod numquam nobis iure facilis ipsam. Amet, provident ratione. Aliquam obcaecati ducimus natus incidunt quos vero.</p>
                        </div>
                    </div>
                </section>

                <section className="emojis">
                    <p className="e e1">
                        <span>😊</span>
                    </p>
                    <p className="e e2">
                        <span>😢</span>
                    </p>
                    <p className="e e3">
                        <span>😠</span>
                    </p>
                    <p className="e e4">
                        <span>🤔</span>
                    </p>
                    <p className="e e5">
                        <span>😞</span>
                    </p>
                    <p className="e e6">
                        <span>😌</span>
                    </p>
                    <p className="e e7">
                        <span>😐</span>
                    </p>
                    <p className="e e8">
                        <span>🥲</span>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Landing