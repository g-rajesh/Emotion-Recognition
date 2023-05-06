import React, {useState} from "react";
import { enqueueSnackbar } from 'notistack';
import axios from "axios";
import { parse } from 'papaparse';
import { useNavigate } from 'react-router-dom';

const initialData = {
    name: "",
    dob: "",
    mno: ""
}

const Check = () => {
    const [formData, setFormData] = useState(initialData);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const getCSVData = (fileName) => {
        parse(fileName, {
            header: true,
            skipEmptyLines: true,
            complete: function(result) {
                const column = [];
                const values = [];
        
                result.data.map(d => {
                column.push(Object.keys(d));
                values.push(Object.values(d));
                })
        
                const csv = [];
                for(let i=0; i<values.length; i++) {
                const record = {};
                for(let j=0;j<values[i].length;j++) {
                    record[column[0][j]] = values[i][j]
                }
        
                csv.push(record);
                }
                setData(csv);
            }
        })
    }

    const handleChange = (e) => {
        if(e.target.name === "file") {
            // console.log(e.target.files[0].name)
            getCSVData(e.target.files[0]);
            
            return ;
        }
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const validateInput = (input) => {
        if(input.name === "") {
            enqueueSnackbar("Full Name is required!", {variant: "warning"});
            return false;
        }
        if(input.email === "") {
            enqueueSnackbar("Full Name is required!", {variant: "warning"});
            return false;
        }
        if(input.mno.length !== 10) {
            enqueueSnackbar("Mobile number is invalid!", {variant: "warning"});
            return false;
        }
        if(input.file === "") {
            enqueueSnackbar("File is required!", {variant: "warning"});
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        if(validateInput(formData)) {
            const url = "http://127.0.0.1:9090/user/predict";

            try {
                const response = await axios.post(url, { data: {...data[0]} });
                setLoading(false);
                setData([]);
                console.log(response)
                
                const form = {...formData, prediction: response.data};
                localStorage.setItem("form", JSON.stringify(form));

                navigate("/result")
            } catch(err) {
                console.log(err)
                enqueueSnackbar("Error occured! Try again later", {variant: "error"})
            }
        }

        setLoading(false);
    }

    return (
        <div className="check-container">
            <div className="content">
                <h2><span className="title">C</span>heck <span className="title">Y</span>our <span className="title">E</span>motion</h2>


                <form>
                    <div className="grid">
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" name="dob" id="dob" max="2023-05-06" value={formData.dob} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="mno">Mobile Number</label>
                        <input type="number" name="mno" id="mno" value={formData.mno} onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="file">Upload csv file</label>
                        <input type="file" name="file" id="file" accept="text/csv" onChange={handleChange} />
                    </div>

                    <button className={loading ? "disable": ""} onClick={handleSubmit}>
                        {loading ? "Recognizing..." : "Recognize"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Check;