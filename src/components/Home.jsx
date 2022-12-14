import React, {useState, } from "react";
import Logo from "../assets/logo.png";
// import signinImage from "../assets/Simage.png";
import {useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  // // toggle login and signUp
  const [showSignUp, setShowSignUp] = useState(true);
  const [showLogin, setShowLogin ] = useState(false);
  const [alert, setAlert ] = useState("hidden");
  
  // // signUp
  const [phone, setPhoneNumber] = useState(''); 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // //login
  const [lphone, setlphone] = useState("");
  const [lpassword, setLPassword] = useState("");

const toggleAlert = () =>{
   setAlert("block")
    setTimeout(() => {
      setAlert('hidden')
    }, 2000);
  }
  
  
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if(phone === "" || name === "" || password === ""){
      toggleAlert()
      setShowSignUp(true)
    }else{
      const user = {name, phone, password}
      const url = "localhost:5000/register"
      fetch(url, {
        method: "POST",
        crossDomain : true,
        headers: {
          "content-type" : "application/json",
          Accept : "application/json",
        },
        body : JSON.stringify(user)

      }).then((response) => (response).json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      // navigate('/dashboard')
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if(lphone === "" || lpassword === ""){
      toggleAlert()
      setShowLogin(true)
    }else{
      navigate('/dashboard')
    }
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
        <nav className="border-gray-200">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <div className="flex items-center justify-center w-full h-5 mt-16">
              <img className="w-32 mt-8" src={Logo} alt="" />
            </div>
          </div>
        </nav>
      </header>
      <section className="p-5 py-8 w-full">
          <div className="flex items-center justify-center space-x-5 w-full mt-20">
              <button className={`font-semibold text-3xl rounded-full p-3 shadow-xl bg-gray-100 justify-center flex flex-col  ${showSignUp ? 'border-b-4 border-green-600 text-green-600' : "text-green-700"}`} onClick={handleSignUp}><ion-icon name="person-add-outline"></ion-icon></button>
              <button className={`font-semibold text-3xl rounded-full p-3 shadow-xl bg-gray-100 justify-center flex flex-col ${showLogin ? 'border-b-4  border-green-600 text-green-600' : "text-green-700"}`} onClick={handleLogin}><ion-icon name="log-in-outline"></ion-icon></button>
          </div>
          {showSignUp ?
          <div className="max-w-[320px] mx-auto py-4">
              <form className="w-full flex flex-col py-4" 
                onSubmit={handleSignUpSubmit}>
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
                  type="phone"
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
                  <p className={`text-center text-lg text-red-500 duration-500 ${alert}`}>All inputs are required</p>

                  <button type="submit" className="bg-[#228e01] w-full text-white py-3 my-6 rounded font-bold">
                    Sign in
                  </button>

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
              <form className="w-full flex flex-col py-4"
              onSubmit={handleLoginSubmit}>
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
                <p className={`text-center text-lg text-red-500 duration-500 ${alert}`}>All inputs are required</p>

                  <button className="bg-[#228e01] w-full text-white py-3 my-6 rounded font-bold">
                    Login
                  </button>

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
