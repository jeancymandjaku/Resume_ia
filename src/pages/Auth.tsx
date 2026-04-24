// import { useLocation, useNavigate } from "react-router-dom"

import { useEffect } from "react"
import { usePuterStore } from "../lib/puter";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
    const {isLoading,auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    const { init } = usePuterStore();
  
      useEffect(() => {
        init()
      },[init]);
    
    // useEffect(() =>{
    //     if(auth.isAuthenticated) navigate(next);

    // },[auth.isAuthenticated,next]);
    useEffect(() => {
    if (auth.isAuthenticated) {
        // Si 'next' existe, on y va, sinon on retourne à l'accueil '/'
        navigate(next || '/'); 
    }
}, [auth.isAuthenticated, next, navigate]);
    
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center - justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col items-center  gap-2 text-center">
                    <h1>Welcome</h1>
                    <h2>Log in To continue your job journey</h2>
                </div>
                <div>
                    {isLoading ? ( 
                        <button className="auth-button animate-pulse">
                        <p>Signing you in ...</p>
                    </button> ): (
                        <>
                            {
                              auth.isAuthenticated? (
                                     <button className="auth-button" onClick={auth.signOut}>
                        <p>Log Out.</p>
                    </button>
                              ) :(
                                 <button className="auth-button" onClick={auth.signIn}>
                        <p>Log In.</p>
                    </button>
                              )
                            }
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default Auth