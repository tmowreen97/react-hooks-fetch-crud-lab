import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questions, onSetQuestions }) {
  function handleDelete(questionID){
    fetch(`http://localhost:4000/questions/${questionID}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(()=> {
      const remainingQuestions = questions.filter((quest)=> quest.id !== questionID)
      onSetQuestions(remainingQuestions)
    })
  }

  function handleCorrectAnswer(questionId, questionCorrect){
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'correctIndex': questionCorrect
      })
    })
    .then(res=> res.json())
    .then()
  }

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((q)=> {
        return (<QuestionItem key={q.id} question={q} onDelete={handleDelete} onAnswerChange={handleCorrectAnswer}/>)
      })}</ul>
    </section>
  );
}

export default QuestionList;
 