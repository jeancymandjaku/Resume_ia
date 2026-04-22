import { useState } from "react"
import Navbar from "../components/Navbar"
// import FileUploader from "../components/FileUploader";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    
//   }

//   const handleSubmit  : (e: FormEvent<HTMLFormElement>) => void = (e: FormEvent<HTMLFormElement>) => {
    
//   }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">   
          <Navbar />
          
          <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback froyour dream job</h1>

                    {
                        isProcessing ? (
                            <>
                                <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" alt="resume" className="w-full"/>
                            </>
                        )
                     : (
                        <h2>Drop your resume for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        <form id="upload-form" className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" id="company-name" placeholder="Company Name"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="jpb-title">Job Title</label>
                                <input type="text" name="jpb-title" id="job-title" placeholder="Job Title"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={5} name="job-description" id="job-title" placeholder="Job Title"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="upload">Upload Resume</label>
                                <div>
                                    Uploader
                                </div>
                                {/* <FileUploader /> */}

                                <button className="primary-button" type="submit">Analyse Resume</button>
                            </div>
                        </form>
                    )}
                </div>

          </section>
    </main >
  )
}

export default Upload