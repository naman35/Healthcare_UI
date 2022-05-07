import React, { useState } from 'react';
import './quiz.css'
import axios from 'axios';
import {Avatar, Button, Grid, Paper, TextField} from "@material-ui/core";

export default function Quizfillup() {
    const [qid, setQid] = useState("");
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    axios.get('http://localhost:8084/api/GetBySection/1')
        .then(response => {
            setQid(response.data.qid);
            setQuestion1(response.data[0].content)
            setQuestion2(response.data[1].content)


            console.log("qid="+qid)

        });
    console.log("qid2="+question1)
    const questions = [
        {
            questionText: question1,

        },
        {
            questionText: question2

        },

    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='body1'>
            <div className='app1'>
                {showScore ? (
                    <div className='score-section'>Congratz!! You Completed this SubSection.
                        <Button href="/subsessionlist1" style={{backgroundColor:'#708f32'}} id="sec1sub1" type="button">Back to Subsection</Button>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            {questions[currentQuestion].questionText}

                            <TextField type='text'/>
                            <Button onClick={handleAnswerOptionClick} type='button'>Ok!Next Question</Button>
                        </div>

                    </>
                )}
            </div>
        </div>
    );
}