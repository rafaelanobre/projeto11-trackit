import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { UserContext } from "../../constants/usercontext";
import { useContext } from "react";

export default function Menu(){
    const {completedHabits} = useContext(UserContext);
    
    return(
        <Menudiv data-test="menu">
            <Link to='/habitos' data-test="habit-link">
                <p>Hábitos</p>
            </Link>
            <Link to='/hoje' data-test="today-link">
                <ProgressDiv>
                    <CircularProgressbar
                        value={completedHabits}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </ProgressDiv>
            </Link>
            <Link to='/historico' data-test="history-link">
                <p>Histórico</p>
            </Link>
        </Menudiv>
    )
}

const Menudiv = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 5px 60px 5px 60px;
    z-index: 9;

    p{
        color: #52B6FF;
        font-size: 18px;
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
const ProgressDiv = styled.div`
    width: 90px;
    margin-top: -35px;
    cursor: pointer;
`;