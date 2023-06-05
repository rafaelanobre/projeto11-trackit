import React, { useState, useContext } from "react"
import logo from "../assets/Group8.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASEURL } from "../constants/urls";
import { UserContext } from "../constants/usercontext"
import { ThreeDots } from "react-loader-spinner"

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userInfo, setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function entrar(e){
        e.preventDefault();
        setLoading(true);
        axios.post(`${BASEURL}/auth/login`,{email: email,password: password} )
        .then(resp =>{
            setUserInfo(resp.data);
            setLoading(false);
            navigate(`/hoje`);
        })
        .catch(error =>{
            alert("Usuário ou senha inválida!")
            setLoading(false);
        })
    }
    return(
        <>
        <Logo src={logo}></Logo>
        <FormsDiv onSubmit={entrar}>
            <input
                required
                id='email'
                type="email"
                placeholder="email"
                data-test="email-input"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />
            <input
                required
                id='senha'
                type="password"
                placeholder="senha"
                data-test="password-input"
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />
            <button type="submit" data-test="login-btn">
            {loading ? (
                    <ThreeDots 
                    height="15" 
                    width="60" 
                    radius="9"
                    color="#FFFFFF" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            ) : (
                "Entrar"
            )}
            </button>
        </FormsDiv>
        <Link to='/cadastro' data-test="signup-link">
            <LinkText>Não tem uma conta? Cadastre-se!</LinkText>
        </Link>
        </>
    )
}

const Logo = styled.img`
    width: 180px;
`;
const FormsDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        margin: 3px;
        padding: 5px;
        width: 300px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        :focus{
            outline: none;
        }

        ::placeholder{
            font-size: 20px;
            color: #DBDBDB;
            margin-bottom: 2px;
        }
    }
    button{
        width: 300px;
        height: 45px;
        background: #52B6FF;
        margin-top: 3px;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        color: #FFFFFF;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        :focus{
            outline: none;
        }
    }
`;
const LinkText = styled.p`
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
        cursor: pointer;
`;