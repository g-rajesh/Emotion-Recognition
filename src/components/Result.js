import { enqueueSnackbar } from "notistack";
import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import MyDocument from './PDF';

import { PDFDownloadLink } from '@react-pdf/renderer';

const Result = () => {

    const data = JSON.parse(localStorage.getItem("form"));

    const today = new Date();
    const dateString = today.toLocaleDateString('en-IN');

    const myuser = {
        fullName: data?.name,
        dob: data?.dob,
        mno: data?.mno,
        date: dateString,
        prediction: data?.prediction?.prediction,
        percentage: data?.prediction?.percentage,
    }
    
    const navigate = useNavigate();

    useEffect(()=>{
        if(!data) {
            enqueueSnackbar("Please fill the form first!", {variant: "warning"});
            navigate("/check");
        }
    }, []);

    return (
        <div className="result-container">
            <div className="content">
                <h2><span>R</span>esult</h2>

                <div className="grid">
                    <div className="group">
                        <span className="first">{data.name}</span>
                        <span className="second">Full Name</span>
                    </div>
                    <div className="group">
                        <span className="first">{data.dob}</span>
                        <span className="second">Date of Birth</span>
                    </div>
                    <div className="group">
                        <span className="first">{data.mno}</span>
                        <span className="second">Mobile Number</span>
                    </div>
                    <div className="group">
                        <span className="first">{data.prediction.prediction}</span>
                        <span className="second">Prediction</span>
                    </div>
                    <div className="group">
                        <span className="first">{data.prediction.percentage} %</span>
                        <span className="second">Percentage</span>
                    </div>
                </div>

                <div className="button-group">
                    <PDFDownloadLink document={<MyDocument user={myuser} />} fileName='Report'>
                        <button className='dbtn'>Download Report</button>
                    </PDFDownloadLink>
                    <button onClick={() => navigate("/check")}>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default Result;


// import React, { useEffect, useState } from 'react'
// import { useNavigate, useNavigation } from 'react-router-dom';
// import Generate from './Generate';

// const Result = ({prediction, user, handleChange}) => {
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if(!prediction) {
//       navigate("/");
//     }
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();
    
//     navigate("/download");
//   }

//   return (
//     <div className={show ? "result-container opac" : "result-container"}>
//       {show && <Generate user={user} handleChange={handleChange} setShow={setShow} submitHandler={submitHandler} />}
//       <div className="result">
//         <p>Emotion recognized: <span style={{color: "#6990F2"}}>{prediction.prediction}</span></p>
//         <p>Want to download the result in pdf? <button onClick={()=>setShow(true)} className='result-btn'>Continue</button></p>
//       </div>
//     </div>
//   )
// }

// export default Result