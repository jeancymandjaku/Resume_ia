// import { useLocation, useNavigate } from "react-router-dom"

import { useEffect } from "react"

const Auth = () => {
    // const {isLoading,auth} = usePuterStore();
    // const location = useLocation();
    // const next = location.search.split('next=')[1];
    // const naviagte = useNavigate();
    
    // useEffect(() =>{
    //     if(auth.isAuthenticated) navigate(next);

    // },[auth.isAuthenticated,next]);
    
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center - justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col items-center  gap-2 text-center">
                    <h1>Welcome</h1>
                    <h2>Log in To continue your job journey</h2>
                </div>
                <div>
                    {/* <button className="auth-buton animate-pulse">
                        <p>Signing you in ...</p>
                    </button>

                    <button className="auth-button" onClick={Auth.signOut}>
                        <p>Log Out</p>
                    </button>

                    <button  className="auth-button" onClick={Auth.signIn}>
                        <p>Login</p>
                    </button> */}
                </div>
            </section>
        </div>
    </main>
  )
}

export default Auth