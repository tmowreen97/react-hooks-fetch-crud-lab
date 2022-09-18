import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  useEffect(()=> {
    fetch('http://localhost:4000/questions')
    .then (res => res.json())
    .then (data => setQuestions(...questions, data))
  },[])
  
  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestions={handleNewQuestion} /> : <QuestionList questions = {questions} onSetQuestions ={setQuestions}/>}
    </main>
  );
}

export default App;
