import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Landing from "./components/Landing";
import Check from "./components/Check";
import { useState } from "react";


const initialData = {
    title: "",
    fullName: "",
    dob: "",
    mno: ""
};
const App = () => {
    const [prediction, setPrediction] = useState({});
    const [user, setUser] = useState(initialData);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const clearData = () => {
        setPrediction({});
        setUser(initialData);
    }

    return (
        <>
            <Navbar />
            <Routes>
            
                <Route exact path="/" element={<Landing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/check" element={<Check />} />
                <Route path="/result" element={<Result />} />
                {/* <Route exact path="/" element={<Upload setPrediction={setPrediction} />} /> */}
                {/* <Route path="/result" element={<Result prediction={prediction} user={user} handleChange={handleChange} />} /> */}
                {/* <Route path="/download" element={<Download user={user} prediction={prediction} clearData={clearData} />} /> */}

            </Routes>

        </>
    );
}

export default App;
