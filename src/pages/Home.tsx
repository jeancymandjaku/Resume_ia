import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "../constants";
// import {puter} from '@heyputer/puter.js';

import { useEffect } from "react"
import { usePuterStore } from "../lib/puter";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { auth, isLoading } = usePuterStore(); // Ajoute isLoading ici
    const navigate = useNavigate();
  useEffect(() => {
        // ON NE REDIRIGE QUE SI :
        // 1. Le chargement est terminé (isLoading est false)
        // 2. L'utilisateur n'est TOUJOURS PAS authentifié
        if (!isLoading && !auth.isAuthenticated) {
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated, isLoading, navigate]);

    // Optionnel : Afficher un écran de chargement pendant la vérification
    if (isLoading) return <div>Vérification de la session...</div>;
  //  const { auth } = usePuterStore();
  //   const navigate = useNavigate();
    
  //   useEffect(() =>{
  //       if(!auth.isAuthenticated) navigate('/auth?next=/');
  //   },[auth.isAuthenticated]);
  // Example: Use AI to answer a question
// puter.ai.chat(`Why did the chicken cross the road?`).then(console.log);
// {window.puter.ai.chat()}

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
    e    </div>

        {resumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-4">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
