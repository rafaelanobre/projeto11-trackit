import React, { useState, useEffect } from 'react';
import DayJS from 'dayjs';
import 'dayjs/locale/pt-br';
import styled from "styled-components"
import Header from "./components/header";
import Menu from "./components/menu";
import MyHabit from "./components/myhabits";
import { UserContext } from "../constants/usercontext";
import { useContext } from "react";
import { BASEURL } from '../constants/urls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Today(){
    const date = DayJS().locale('pt-br').format('dddd, DD/MM');
    const capitalizedDate = date.charAt(0).toUpperCase() + date.slice(1);

    const { userInfo, completedHabits, setCompletedHabits, habitsCount, setHabitsCount, completedHabitsCount, setCompletedHabitsCount } = useContext(UserContext);

    const [todayHabits, setTodayHabits] = useState(undefined);
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization:`Bearer ${userInfo.token}`
        }
    }

    useEffect(() => {
        axios.get(`${BASEURL}/habits/today`, config)
        .then((resp) =>{
            console.log(resp.data);
            setTodayHabits(resp.data);
            setHabitsCount(resp.data.length);
        })
        .catch((error) =>{
            console.log(error.response.data.message);
            alert(error.response.data.message);
            navigate('/');
        })
    }, []);

    useEffect(() => {
        const percentage = (completedHabitsCount / habitsCount) * 100;
        setCompletedHabits(percentage);
    }, [completedHabitsCount]);



    if(todayHabits === undefined){
        return(
            <>Carregando...</>
        )
    }

    return(
        <TodayPage>
            <Header />
            <h2 data-test="today">{capitalizedDate}</h2>
            {(completedHabits === 0 || isNaN(completedHabits)) && <p data-test="today-counter">Nenhum hábito concluído ainda</p>}
            {completedHabits !== 0 && !isNaN(completedHabits) && <p className='completed' data-test="today-counter">{completedHabits.toFixed()}% dos hábitos concluídos</p>}
            {todayHabits.map(habit => (
                <MyHabit
                    key={habit.id}
                    id={habit.id}
                    name={habit.name}
                    done={habit.done}
                    currentSequence={habit.currentSequence}
                    highestSequence={habit.highestSequence}
                    setCompletedHabits={setCompletedHabits}
                    todayHabits={todayHabits}
                    completedHabitsCount={completedHabitsCount}
                    setCompletedHabitsCount={setCompletedHabitsCount}
                />
            ))}
            <Menu />
        </TodayPage>
    )
}

const TodayPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #F2F2F2;
    min-height: 100vh;
    padding: 70px 15px 5px 15px;
    padding-bottom: 140px;

    h2{
        font-size: 23px;
        color: #126BA5;
        margin: 0px;
        margin-top: 10px;
    }

    p{
        font-size: 18px;
        color: #bababa;
        text-align: left;
        margin: 0px;
        margin-top: 10px;

        &.completed{
            color: #8FC549;
        }
    }
`