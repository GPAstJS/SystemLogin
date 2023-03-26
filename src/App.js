import { TextField, Button } from "@mui/material";
import { Link, redirect } from "react-router-dom";
import { db, userCollectionRef} from './firebase'
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from './components/header/index'
import './App.css'
export default function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((e) => ({ ...e.data(), id: e.id}  )));
      console.log(data.docs.map((e) => ({...e.data(), id: e.id})))
    };
    getUsers();
  }, []);

  const navigate = useNavigate()

  function login() {
    const usuarios = users.find( (e) => e.email === email && e.password === password )
    console.log('resultado: ', usuarios)

    if(usuarios) {
      sessionStorage.setItem('user', JSON.stringify({"email": email, "password": password}))
      navigate('/home')
    } else return alert("Email or password incorrect")
  }

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="content-box"
        style={{
          width: "1440px",
          height: "100vh",
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
        }}
      >
        <Header/>

        <div className="auth" style={{
          height: '600px',
          display: 'flex',
          alignItems: 'center',
        }}>


        <div
          className="user-auth"
          style={{
            display: "flex",
            textAlign: "center ",
            flexDirection: "column",
          }}
        >
          <h1 style={{
            padding: '20px'
          }}>Login</h1>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            style={{
              margin: "5px 0px 20px 0px",
              width: "20rem",
            }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{
              margin: "5px 0px 20px 0px",
            }}
          />
          <Button
            onClick={() => login()}
            variant="contained"
            style={{
              margin: "5px 0px 0px 0px",
            }}
          >
            Sign In
          </Button>
          <Link
            to={"/signup"}
            style={{
              textDecoration: "none",
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'end'

            }}
          >
            <p
              style={{
                color: "#000",
                marginRight: '5px'
              }}
            >
              Not a member?
            </p>
            <a href="/">Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
} 
