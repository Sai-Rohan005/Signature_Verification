
import '../css/verification.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav2 from "./nav2";

function Verify() {
    let navigate = useNavigate();
    const [form_data, setForm_data] = useState({
        signature: null
    });
    let file_data;

    const handleChange = (e) => {
        file_data = e.target.files[0];
        setForm_data({
            ...form_data,
            signature: file_data
        });
    };

    const [responseMessage, setResponseMessage] = useState('');
    const [bool, setBool] = useState(false);
    const [verificationProgress, setVerificationProgress] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);

    const handleVerification = async (e) => {
        e.preventDefault();
        const form_details = new FormData();
        form_details.append('signature', form_data.signature);

        setProgressVisible(true); // Show progress bar
        let progress = 0;
        const progressInterval = setInterval(() => {
            if (progress < 100) {
                progress += 10; // Increment progress by 10
                setVerificationProgress(progress);
            }
        }, 200); // Update every 200ms

        try {
            const response = await axios.post('http://localhost:5051/verify', form_details, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                }
            });

            const resp = response.data;
            if (resp) {
                setTimeout(() => {
                    clearInterval(progressInterval); // Stop the progress bar once done

                    if (resp.status === 404) {
                        setResponseMessage(resp.message || "There was an error in uploading image");
                        setBool(false);
                    } else if (resp.status === 501) {
                        alert(resp.message);
                        navigate('/login');
                        setResponseMessage("Please login");
                        setBool(false);
                    } else {
                        if (resp.similarity > 0.9995) {
                            setResponseMessage("ORIGINAL SIGNATURE");
                            setBool(true);
                        } else {
                            setResponseMessage("FORGED SIGNATURE");
                            setBool(false);
                        }
                    }
                    setVerificationProgress(100); // Set progress to 100% after completion
                    setTimeout(() => setProgressVisible(false), 1000); // Hide progress bar after 1 second
                }, 2000);
            }
        } catch (error) {
            setResponseMessage("There was an error in the verification process");
            setBool(false);
            setVerificationProgress(100);
            setTimeout(() => setProgressVisible(false), 1000); // Hide progress bar after 1 second
        }
    };

    return (
      <>
      <Nav2/>
        <section className="verification-section">
            <div className="verification-container">
                <div className="verification-card">
                    <form onSubmit={handleVerification}>
                        <div className="upload-section">
                            <label htmlFor="file-input" className="upload-label">
                                <h1>Upload Image</h1>
                            </label>
                            <input
                                className="file-input"
                                id="file-input"
                                type="file"
                                name="signature"
                                onChange={handleChange}
                                accept="image/*"
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>

                    {/* Show progress bar if verification is in progress */}
                    {progressVisible && (
                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${verificationProgress}%`, backgroundColor: 'green' }}
                            ></div>
                        </div>
                    )}

                    <p className={`response-message ${bool ? 'success' : 'error'}`}>{responseMessage}</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Verify;
