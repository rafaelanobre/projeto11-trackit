import styled from "styled-components"
import checkhabit from "../../assets/checkhabit.svg"

export default function MyHabit({id,name,done,currentSequence,highestSequence,setCompletedHabits}){
    return(
        <Habit data-test="today-habit-container">
            <h3 data-test="today-habit-name">{name}</h3>
            <p data-test="today-habit-sequence">Sequência atual: {currentSequence} dias</p>
            <p data-test="today-habit-record">Seu recorde: {highestSequence} dias</p>
            <img src={checkhabit} alt="complete habit" data-test="today-habit-check-btn" />
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
    }

    img{
        position: absolute;
        right: 15px;
        top: 20px;
        cursor: pointer;
    }
`;