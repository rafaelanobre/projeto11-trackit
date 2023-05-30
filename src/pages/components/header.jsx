import styled from "styled-components"
import profilepic from "../../assets/profilepic.png"

export default function Header(){
    return(
        <HeaderDiv>
            <h1>TrackIt</h1>
            <img src={profilepic}></img>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px 20px 10px 20px;
    align-items: center;
    background: #126BA5;
    display: flex;
    justify-content: space-between;

    h1{
        font-family: 'Playball', cursive;
        color: #ffffff;
        font-size: 39px;
    }

    img{
        width: 50px;
        border-radius: 30px;
    }
`;