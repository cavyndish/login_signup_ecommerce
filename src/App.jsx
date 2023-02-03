import React from "react";
import { useAuth } from "react-oidc-context";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { MainRoutes } from "./pages/MainRoutes";

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }
  //else {
  //  return <div>Nope</div>;
  // }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }


   if (auth.isAuthenticated) {
     return (
       <div className="App">
         <Navbar />
         <MainRoutes />
         Hello {auth.user?.profile.name}{" "}
         <button onClick={auth.removeUser}>Log out</button>
       </div>
     );
   }else{
    return (
      <div className="App">
        <Navbar />
        <MainRoutes />
        <button onClick={auth.signinPopup}>Log in</button>
      </div>
    );
   }
  }

export default App;
