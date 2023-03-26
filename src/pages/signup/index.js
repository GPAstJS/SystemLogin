import React from "react";
import { db, userCollectionRef } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from '../../components/header/index'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    password: "",
    confirm: "",
  });
  // const [confirmPassword, setConfirmPassword] = useState("")
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((e) => ({ ...e.data(), id: e.id })));
    };
    getUsers();
  }, []);

  async function createAccount() {
    if (password.password === password.confirm) {
      const alreadyCreatedUser = users.find((e) => e.email === email);
      if (!alreadyCreatedUser) {
        await addDoc(userCollectionRef, {
          email,
          password: password.password,
        });
        navigate('/')
      } else alert("This email has been already registered!");
    } else alert("Password does not match!")

    setEmail("");
    setPassword({ password: "", confirm: "" });
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
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header/>
        <div className="signup-div" style={{
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center',
          width: '1440px',
          height: '600px'
        }}>
        <h1>Sign Up</h1>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{
            margin: "5px 0px 20px 0px",
            width: "20rem",
          }}
        />
        <TextField
          id="outlined-basic"
          value={password.password}
          onChange={(e) =>
            setPassword({ ...password, password: e.target.value })
          }
          label="Password"
          variant="outlined"
          style={{
            margin: "5px 0px 20px 0px",
            width: "20rem",
          }}
        />
        <TextField
          value={password.confirm}
          onChange={(e) =>
            setPassword({ ...password, confirm: e.target.value })
          }
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          style={{
            margin: "5px 0px 20px 0px",
            width: "20rem",
          }}
        />
        <Button
          variant="contained"
          onClick={() => createAccount()}
          style={{
            margin: "5px 0px 0px 0px",
            width: "20rem",
          }}
        >
          Sign Up
        </Button>

        <Link
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <p
            style={{
              color: "#000",
              margin: '5px 0px 0px 0px',
              TextDecoraton: "none",
              width: '320px',
              textAlign: "right"
            }}
          >
            Already registered?
            <a
              href=""
              style={{
                color: "#1565C0",
                textDecoration: "none",
              }}
            >
              Sign In
            </a>
          </p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
