import { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Menu from "./components/menu";
import HabitCreation from "./components/habitcreation";
import Habit from "./components/habit";

export default function Habits(){
    const [habitCreationOn, setHabitCreationOn] = useState(false);
    const [myHabits, setmyHabits] = useState([]);

    return(
        <HabitsPage>
            <Header />
            <CreateHabit>
                <h2>Meus hábitos</h2>
                <p onClick={ ()=> setHabitCreationOn(true)} data-test="habit-create-btn">+</p>
            </CreateHabit>
            { habitCreationOn && <HabitCreation setHabitCreationOn={setHabitCreationOn} setmyHabits={setmyHabits} data-test="habit-create-container" />}
            { myHabits.length === 0 && <EmpyMessage>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </EmpyMessage>}
            <Habit />
            <Menu />
        </HabitsPage>
    )
}

const HabitsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    background-color: #F2F2F2;
    height: 100vh;
`

const CreateHabit = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 5px 10px;

    h2{
        font-size: 23px;
        color: #126BA5;
    }

    p{
        color: #FFFFFF;
        font-size: 27px;
        background-color: #52B6FF;
        padding: 0px 12px 0px 12px;
        border-radius: 3px;
        margin-right: 5px;
        cursor: pointer;
    }
`
const EmpyMessage = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    text-align: left;
`