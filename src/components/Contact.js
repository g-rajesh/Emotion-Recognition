import React, {useState} from "react";

const initialData = {
    name: "",
    email: "",
    message: ""
}

const Contact = () => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact-container">
            <div className="content">
                <h2><span className="title">C</span>ontact <span className="title">U</span>s.</h2>

                <form>
                    <div className="grid">
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea rows="5" name="message" id="message"></textarea>
                    </div>

                    <button onClick={submitHandler}>Send Now</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;