import React, {useState, } from "react";
// import loginImage from "../assets/Limage.png";
// import signinImage from "../assets/Simage.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  // // toggle login and signUp
  const [showSignUp, setShowSignUp] = useState(true);
  const [showLogin, setShowLogin ] = useState(false);
  
  // // signUp
  const [phone, setPhoneNumber] = useState(''); 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // //login
  const [lphone, setlphone] = useState("");
  const [lpassword, setLPassword] = useState("");


  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("error");
  };

  const handleSignUp = () =>{
    setShowSignUp(true)
    setShowLogin(false)
    console.log("signUp");
  }
  const handleLogin = () =>{
    setShowSignUp(false)
    setShowLogin(true)
    console.log("login");
  }

  return (
    <div className="font-serif">
      <header className="w-full">
        <nav className="border-gray-200 py-2.5">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <div className="flex items-center justify-center w-full h-5 mt-3">
              <h1 className="text-2xl text-green-700 font-semibold mt-2">Shara</h1>
            </div>
          </div>
        </nav>
      </header>
      <section className="p-5 py-8 w-full">
          <div className="flex items-center justify-center space-x-5 w-full mt-20">
              <button className={`font-semibold text-2xl  ${showSignUp ? 'border-b-4 border-green-600 text-green-600' : "text-green-500"}`} onClick={handleSignUp}> SIGN IN</button>
              <button className={`text-2xl font-semibold ${showLogin ? 'border-b-4  border-green-600 text-green-600' : "text-green-500"}`} onClick={handleLogin}> LOGIN</button>
          </div>
          {showSignUp ?
          <div className="max-w-[320px] mx-auto py-4">
              <form className="w-full flex flex-col py-4" 
                onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  value={name}
                  placeholder="Name"
                  autoComplete="text"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="number"
                  placeholder="Phone Number"
                  autoComplete="phone"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <Link to="/dashboard">
                  <button className="bg-green-600 w-full text-white py-3 my-6 rounded font-bold">
                    Sign in
                  </button>
                </Link>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Forget Password</p>
                </div>
                <p className="py-4 text-gray-600">
                    Already on Shara?
                    <span className="text-green-700">Login</span>
                </p>
              </form>
            </div> : ""}
          {showLogin ?
          <div className="max-w-[320px] mx-auto py-4">
              <form className="w-full flex flex-col py-4">
                <input
                  onChange={(e) => setlphone(e.target.value)}
                 className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="phone"
                  value={lphone}
                  placeholder="Phone"
                  autoComplete="Phone"
                />
                <input
                  value={lpassword}
                  onChange={(e) => setLPassword(e.target.value)}              
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <Link to="/dashboard">
                  <button className="bg-green-600 w-full text-white py-3 my-6 rounded font-bold">
                    Login
                  </button>
                </Link>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Forget Password</p>
                </div>
                <p className="py-4 text-gray-600">
                    New to Shara? 
                    <span className="text-green-700">Sign up</span> 
                </p>
              </form>
            </div> : ""}
      </section>
    </div>
  );
};

export default Home;
