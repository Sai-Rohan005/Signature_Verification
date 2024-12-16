// /* eslint-disable no-irregular-whitespace */
// import {useState} from 'react';
// import '../css/about.css'


// function About() {
   
//  const [activeAccordion,setActiveAccordion]=useState(null);
  
//   const toggleAccordion=(index)=>{
//     setActiveAccordion(activeAccordion === index ? null : index);
//   }

    

//   return (
//     <section className='aboutsec'>
//     <div className="container">
//       <h2>About the Verification</h2>
//       <div className="container1">
//         <p> The goal is to create a system that can accurately​
//             authenticate signatures, potentially for applications like document verification,​
//             fraud detection and secure transactions.<br/><br />

//             A digital signature algorithm and public key are used to verify a digital signature on data. Digital signatures use a public key to encrypt a message and a private key to decrypt it
//         </p><br />

        
//         <button className="accordion" onClick={() => toggleAccordion(0)}>Benfits</button>
//         <div className={`panel ${activeAccordion === 0 ? 'active' : ''}`}>
//           <p><b>Accuracy and Reliability:</b> The deep learning model enhances the accuracy of signature verification, reducing false positives and negatives.​
//                     <br/><br/>
//                 <b>FRAUD PREVENTION AND SECURITY​</b>
//                     Fraud prevention is a proactive approach to stop fraudulent activities from happening. It involves a combination of strategies and tactics, including: 
//                     Protecting personal information: Use strong, unique passwords for online accounts, and enable two-factor authentication (MFA)
                    
//                       <br/><br/><b>DOCUMENT VERIFICATION</b>
//                       Identity document verification can be done using a number of techniques and processes, largely depending on the specific contents of the source document. For instance, if a photo needs to be verified to confirm the authenticity of an ID, an individual may be asked to take and upload a selfie. This selfie is then compared to the submitted photo using facial recognition technology, along with checks for selfie liveness and ID verification. Both trained professionals and automated systems can extract and analyze data from the document.
//                     </p>
//         </div>

//         <button className="accordion" onClick={() => toggleAccordion(1)}>Technologies Used</button>
//         <div className={`panel ${activeAccordion === 1 ? 'active' : ''}`}>
//           <p><br/>
//           (i) <b>Mongo DB</b><br/>
//           (ii) <b>Express js</b><br/>
//           (iii) <b>Node js</b><br/>
//           (iv) <b>React js</b><br/>
//           (v) <b>DeepLearning</b><br/>
//           </p>
//         </div>

//         <button className="accordion" onClick={() => toggleAccordion(2)}>Model</button>
//         <div className={`panel ${activeAccordion === 2 ? 'active' : ''}`}> <br/>
//           <p> We used deep learning frameworks (e.g., TensorFlow, PyTorch) to train a model for signature verification.
//         Preprocessing: Implement image preprocessing techniques to prepare signatures for model input.
//         Feature Extraction: Develop methods to extract relevant features from signatures for comparison.</p>
//         </div>

//         <button className="accordion" onClick={() => toggleAccordion(3)}>Challenges Considered</button>
//         <div className={`panel ${activeAccordion === 3 ? 'active' : ''}`}>
//           <p> 

//         <b>Data Privacy: </b>Ensured that user data and signature images are handled securely.<br/>
//         <b>Model Accuracy: </b>Achieved high accuracy and robustness in the deep learning model.<br/>
//         <strong>Scalability: </strong>Designed the system to handle a growing number of users and signature verifications.<br/>
//         <b>User Experience: </b>Created a seamless and intuitive UI for users.</p>
//         </div>

//         </div>
//     </div>
//   </section>
//   )
// }

// export default About

import { useState } from 'react';
import '../css/about.css'
import Nav1 from "./nav1";

function About() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  }

  return (
    <>
    <Nav1/>
    <section className='aboutsec'>
      <div className="content-container">
        <h2>About the Verification</h2>
        <div className="about-content">
          <p>
            The goal is to create a system that can accurately authenticate signatures, potentially for applications like document verification, fraud detection, and secure transactions.
            <br /><br />
            A digital signature algorithm and public key are used to verify a digital signature on data. Digital signatures use a public key to encrypt a message and a private key to decrypt it.
          </p>
          <br />

          <button className="accordion" onClick={() => toggleAccordion(0)}>Benefits</button>
          <div className={`panel ${activeAccordion === 0 ? 'active' : ''}`}>
            <p><b>Accuracy and Reliability:</b> The deep learning model enhances the accuracy of signature verification, reducing false positives and negatives.
              <br /><br />
              <b>FRAUD PREVENTION AND SECURITY​</b> Fraud prevention is a proactive approach to stop fraudulent activities from happening. It involves a combination of strategies and tactics, including:
              Protecting personal information: Use strong, unique passwords for online accounts, and enable two-factor authentication (MFA).
              <br /><br /><b>DOCUMENT VERIFICATION</b> Identity document verification can be done using a number of techniques and processes, largely depending on the specific contents of the source document.
            </p>
          </div>

          <button className="accordion" onClick={() => toggleAccordion(1)}>Technologies Used</button>
          <div className={`panel ${activeAccordion === 1 ? 'active' : ''}`}>
            <p>
              (i) <b>Mongo DB</b><br />
              (ii) <b>Express js</b><br />
              (iii) <b>Node js</b><br />
              (iv) <b>React js</b><br />
              (v) <b>DeepLearning</b><br />
            </p>
          </div>

          <button className="accordion" onClick={() => toggleAccordion(2)}>Model</button>
          <div className={`panel ${activeAccordion === 2 ? 'active' : ''}`}>
            <p>We used deep learning frameworks (e.g., TensorFlow, PyTorch) to train a model for signature verification.
              Preprocessing: Implement image preprocessing techniques to prepare signatures for model input.
              Feature Extraction: Develop methods to extract relevant features from signatures for comparison.
            </p>
          </div>

          <button className="accordion" onClick={() => toggleAccordion(3)}>Challenges Considered</button>
          <div className={`panel ${activeAccordion === 3 ? 'active' : ''}`}>
            <p>
              <b>Data Privacy: </b>Ensured that user data and signature images are handled securely.
              <br />
              <b>Model Accuracy: </b>Achieved high accuracy and robustness in the deep learning model.
              <br />
              <strong>Scalability: </strong>Designed the system to handle a growing number of users and signature verifications.
              <br />
              <b>User Experience: </b>Created a seamless and intuitive UI for users.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
