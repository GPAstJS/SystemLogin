import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

export default function Header() {

    const [auth, setAuth] = useState("Sign In")
    const navigate = useNavigate()

    function logout() {
        if(sessionStorage.getItem('user')) {
            sessionStorage.removeItem('user')
            navigate('/')
            setAuth('Logout')
        }   
    }


    return(
        <header className="header" style={{
            width: '1440px',
            background: '#1565C0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>

        <div className="header-container" style={{
            display: 'flex',
            flexDirection: 'row',
            height: '60px',
            width: '1440px',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div className="header-logo">
                <h1 style={{
                    color: "#fff",
                    fontSize: '25px'
                }}>LOGO HERE</h1>
            </div>

            <nav className="nav-bar" style={{
                width: '300px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <a href="/" className="nav-link" style={{
                    color: "#fff",
                    textDecoration: 'none',
                    outline: 'none',
                    fontSize: '20px',
                }}>Products</a>
                <a href="/" className="nav-link" style={{
                    color: "#fff",
                    textDecoration: 'none',
                    outline: 'none',
                    fontSize: '20px',
                }}>Solutions</a>
                <a href="/" className="nav-link" style={{
                    color: "#fff",
                    textDecoration: 'none',
                    outline: 'none',
                    fontSize: '20px',
                }}>Pricing</a>
            </nav>

            <div className="user-account" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '200px',
                marginRight: '10px'
            }}>
                <button className="user-signup" style={{
                    background: 'none',
                    border: 'none',
                    color: "#fff",
                    fontSize: '16px'
                }}>
                    {sessionStorage.getItem('user') ? "Settings" : "Start Free"}
                </button>
                <button onClick={sessionStorage.getItem('user') ? () => logout(): null} className="user-signin" style={{
                    background: "#fff",
                    border: 'none',
                    height: '40px',
                    width: '100px',
                    borderRadius: '5px',
                    fontSize: '16px'
                }}>
                    {sessionStorage.getItem('user') ? "Logout" : "Sign In"}
                </button>

            </div>
        </div>

        </header>
    )
}