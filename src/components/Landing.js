import Graph from "../images/graph.png";
import Neural from "../images/neural.png";
import Book from "../images/book.png";

const Landing = () => {

    
    return (
        <div className="landing-container">
            <div className="content">
                <section className="header">
                    <h2>Emotion Recognition</h2>
                    <p>Emotion recognition has the potential to revolutionize many aspects of human interaction and communication, from helping people with autism better understand social cues to enabling more empathetic and responsive artificial intelligence.</p>
                </section>

                <section className="about">
                    <h2>Approach</h2>

                    <div className="flex">
                        <div className="card">
                            <div className="header">
                                <img src={Neural} alt="Model" />
                            </div>

                            <h4>Model Used</h4>
                            <p>CNN Model is used in recognizing the emotion. The trained model has three convolution layers followed by pooling layer. The output is passed to flattening layer then to dense layer which produces the result.</p>
                        </div>
                        <div className="card">
                            <div className="header">
                                <img src={Graph} alt="Model" />
                            </div>

                            <h4>Comparison</h4>
                            <p>Many emotion recognition model using facial expression for recognizing the emotions. But we have used EEG and ECG signal in the form of numerical data which produces better result. </p>
                        </div>
                        <div className="card">
                            <div className="header">
                                <img src={Book} alt="Model" />
                            </div>

                            <h4>Usage</h4>
                            <p>Navigate to Check page. Enter your details along with your EEG and ECG signal in the form of csv file. Click the recognize button. The result will be displayed in the result page which can be downloaded in pdf format.</p>
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