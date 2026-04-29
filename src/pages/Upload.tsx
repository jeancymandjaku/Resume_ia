import { useState } from "react"
import Navbar from "../components/Navbar"
import FileUploader from "../components/FileUploader";
// import { usePuterStore } from "../lib/puter";
// import { useNavigate } from "react-router-dom";

const Upload = () => {
    // const {auth, isLoading,fs,ai,kv} = usePuterStore();
    // const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file,setFile] = useState<File | null>(null);   

    const handleFileSelect = (file: File | null) => {
        console.log("Selected file:", file);
        // You can perform further actions with the selected file here
        setFile(file);
    }

    // const handleAnalyse = async ({ companyName,jobTitle,jobDescription,file}) =>{
    //     setIsProcessing(true);
    //     setStatusText('Uploading the file...');
    //     const uploadedFile = await fs.upload([file]);

    //     if(!uploadedFile) return setStatusText('Error : Failed to upload file');

    //     setStatusText('Converting to image...');
    //     const imageFile = await convertPdfToImage(file);

    // }


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest('form');
    if(!form) return;
    const formData = new FormData(form);

    const companyName = formData.get('company-name') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDescription = formData.get('job-description') as string;

    console.log('message', {
        companyName,jobTitle,jobDescription
    })

    if(!file) return;

    // handleAnalyse({companyName,jobTitle,jobDescription,file});
}

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">   
          <Navbar />
          
          <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback from your dream job</h1>

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
                        <form id="upload-form" className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
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
                                {/* <div>
                                    Uploader
                                </div> */}
                                <FileUploader onFileSelect={handleFileSelect}/>

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