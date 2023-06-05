import React from 'react';
import styled from 'styled-components';
import checkhabit from '../../assets/checkhabit.svg';
import completedhabit from '../../assets/completedhabit.svg';
import axios from 'axios';
import { BASEURL } from '../../constants/urls';
import { useContext } from 'react';
import { UserContext } from '../../constants/usercontext';

export default function MyHabit({id,name,done,currentSequence,highestSequence,setCompletedHabits,todayHabits}){
    const { userInfo } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    const handleToggleHabit = () => {
        if (done) {
            axios.post(`${BASEURL}/habits/${id}/uncheck`, null, config)
            .then(() => {
                setCompletedHabits((prevCompletedHabits) => ((prevCompletedHabits - 1) / prevCompletedHabits) * 100);
            })
            .catch((error) => {
                console.log(error.response.data.message);
                alert(error.response.data.message);
            });
        } else {
            axios.post(`${BASEURL}/habits/${id}/check`, null, config)
            .then(() => {
                setCompletedHabits((prevCompletedHabits) => ((prevCompletedHabits + 1) / prevCompletedHabits) * 100);
            })
            .catch((error) => {
                console.log(error.response.data.message);
                alert(error.response.data.message);
            });
        }
    };

    return(
        <Habit data-test="today-habit-container">
            <h3 data-test="today-habit-name">{name}</h3>
            <p
                data-test="today-habit-sequence"
                className={done === true ? 'record' : ''}
            >
                Sequência atual: {currentSequence} dias
            </p>
            <p
                data-test="today-habit-record"
                className={currentSequence === highestSequence && currentSequence > 0 ? 'record' : ''}
            >
                Seu recorde: {highestSequence} dias
            </p>
            <img
                src={done ? completedhabit : checkhabit}
                alt="complete habit"
                onClick={handleToggleHabit}
                data-test="today-habit-check-btn"
            />
        </Habit>
    )
}

const Habit = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 20px 0px 20px 0px;
    position: relative;

    h3{
        margin: 0px;
        font-size: 20px;
        color: #666666;
        margin-bottom: 7px;
    }
    p{
        font-size: 13px;
        color: #666666;
        margin: 0px;

        &.record{
            color: #8FC549;
        }
    }

    img{
        position: absolute;
        right: 15px;
        top: 20px;
        cursor: pointer;
    }
`;