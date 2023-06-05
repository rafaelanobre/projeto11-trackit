import React, {useState} from "react"
import logo from "../assets/Group8.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BASEURL } from "../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function Registration(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function registrar(e) {
        e.preventDefault();
        setLoading(true);
        axios.post(`${BASEURL}/auth/sign-up`, {email:email, name:name, image:image, password: password})
        .then(resp =>{
            setLoading(false);
            navigate(`/hoje`)})
        .catch(error =>{
            alert(error.response.data.message);
            setLoading(false);
            })
    }
    return(
        <>
        <Logo src={logo}></Logo>
        <FormsDiv onSubmit={registrar}>
            <input
                required
                id="email"
                type="email"
                placeholder="email"
                data-test="email-input"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />
            <input
                required
                id="password"
                type="password"
                placeholder="senha"
                data-test="password-input"
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />
            <input
                required
                id="nome"
                type="text"
                placeholder="nome"
                data-test="user-name-input"
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
            />
            <input
                required
                id="image"
                type="url"
                placeholder="foto"
                data-test="user-image-input"
                onChange={(e) => setImage(e.target.value)}
                disabled={loading}
            />
            <button type="submit" data-test="signup-btn">
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
                "Cadastrar"
            )}
            </button>
        </FormsDiv>
        <Link to='/' data-test="login-link">
            <LinkText>Já tem uma conta? Faça login!</LinkText>
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
        margin-top: 3px;
        width: 300px;
        height: 45px;
        background: #52B6FF;
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