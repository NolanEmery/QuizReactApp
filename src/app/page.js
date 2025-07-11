'use client'; //makes a client component
import { useState } from 'react';
import { Suspense } from 'react';

export default function Home() {
  const [quiz1, setQuiz1] = useState(false);
  const [quiz1Question1, setQuiz1Question1] = useState(0);
  const [quiz1Question2, setQuiz1Question2] = useState(0);
  const [quiz1Question3, setQuiz1Question3] = useState(0);
  const [quiz1Question4, setQuiz1Question4] = useState(0);
  const [quiz2, setQuiz2] = useState(false);
  const [quiz2Question1, setQuiz2Question1] = useState(true);
  const [quiz2Question2, setQuiz2Question2] = useState(false);
  const [quiz2Question3, setQuiz2Question3] = useState(false);
  const [quiz2Question4, setQuiz2Question4] = useState(false);
  const [quiz3, setQuiz3] = useState(false);
  const [quiz3Question1, setQuiz3Question1] = useState("");
  const [quiz3Question2, setQuiz3Question2] = useState("");
  const [quiz3Question3, setQuiz3Question3] = useState("");
  const [quiz3Question4, setQuiz3Question4] = useState("");
  
  //<form>
  //<p> this is the question
  //<input> this is where the user types their response
  //<button> to submit
  function quiz1Handler(formData) {
    const quiz1Response = formData.get("quiz1");
    setQuiz1(quiz1Response);
  }

  function quiz1Question1Handler(formData) {
    const quiz1Question1Response = formData.get("quiz1Question1");
    setQuiz1Question1(quiz1Question1Response);
  }

  function quiz1Question2Handler(formData) {
    const quiz1Question2Response = formData.get("quiz1Question2");
    setQuiz1Question2(quiz1Question2Response);
  }

  function quiz1Question3Handler(formData) {
    const quiz1Question3Response = formData.get("quiz1Question3");
    setQuiz1Question3(quiz1Question3Response);
  }

  function quiz1Question4Handler(formData) {
    const quiz1Question4Response = formData.get("quiz1Question4");
    setQuiz1Question4(quiz1Question4Response);
  }

  function quiz2Handler(formData) {
    const quiz2Response = formData.get("quiz2");
    setQuiz2(quiz2Response);
  }

  function quiz2Question1Handler(formData) {
    const quiz2Question1Response = formData.get("quiz2Question1");
    setQuiz2Question1(quiz2Question1Response);
  }

  function quiz2Question2Handler(formData) {
    const quiz2Question2Response = formData.get("quiz2Question2");
    setQuiz2Question2(quiz2Question2Response);
  }

  function quiz2Question3Handler(formData) {
    const quiz2Question3Response = formData.get("quiz2Question3");
    setQuiz2Question3(quiz2Question3Response);
  }

  function quiz2Question4Handler(formData) {
    const quiz2Question4Response = formData.get("quiz2Question4");
    setQuiz2Question4(quiz2Question4Response);
  }

  function quiz3Handler(formData) {
    const quiz3Response = formData.get("quiz3");
    setQuiz3(quiz3Response);
  }

  function quiz3Question1Handler(formData) {
    const quiz3Question1Response = formData.get("quiz3Question1");
    setQuiz3Question1(quiz3Question1Response);
  }

  function quiz3Question2Handler(formData) {
    const quiz3Question2Response = formData.get("quiz3Question2");
    setQuiz3Question2(quiz3Question2Response);
  }

  function quiz3Question3Handler(formData) {
    const quiz3Question3Response = formData.get("quiz3Question3");
    setQuiz3Question3(quiz3Question3Response);
  }

  function quiz3Question4Handler(formData) {
    const quiz3Question4Response = formData.get("quiz3Question4");
    setQuiz3Question4(quiz3Question4Response);
  }

  return (
    <>
    <form action={quiz1Handler}>
    <p>
      Do you want to take quiz 1?
    </p>
    <input type="checkbox" name="quiz1">
    </input>
    <button>
      Submit
    </button>
    </form>
    {quiz1 && <form action={quiz1Question1Handler}><p>What is 1+1?</p><input name="quiz1Question1"></input><button>Submit</button></form>}
    {quiz1Question1 == 2 && <p>That is correct.</p>}
    {quiz1Question1 == 2 && <form action={quiz1Question2Handler}><p>What is 14/2?</p><input name="quiz1Question2"></input><button>Submit</button></form>}
    {quiz1Question2 == 7 && <p>That is correct.</p>}
    {quiz1Question2 == 7 && <form action={quiz1Question3Handler}><p>What is 16*5?</p><input name="quiz1Question3"></input><button>Submit</button></form>}
    {quiz1Question3 == 80 && <p>That is correct.</p>}
    {quiz1Question3 == 80 && <form action={quiz1Question4Handler}><p>What is 198-36?</p><input name="quiz1Question4"></input><button>Submit</button></form>}
    {quiz1Question4 == 162 && <p>That is correct.</p>}
    {quiz1Question4 == 162 && <form action={quiz2Handler}><p>Do you want to take quiz 2?</p><input type="checkbox" name="quiz2"></input><button>Submit</button></form>}
    {quiz2 && <form action={quiz2Question1Handler}><p>T/F: A rectangle has three sides.</p><input type="checkbox" name="quiz2Question1"></input><button>Submit</button></form>}
    {!quiz2Question1 && <p>That is correct.</p>}
    {!quiz2Question1 && <form action={quiz2Question2Handler}><p>T/F: The first six digits of pi are 3.14159.</p><input type="checkbox" name="quiz2Question2"></input><button>Submit</button></form>}
    {quiz2Question2 && <p>That is correct.</p>}
    {quiz2Question2 && <form action={quiz2Question3Handler}><p>T/F: The square of an even number is even.</p><input type="checkbox" name="quiz2Question3"></input><button>Submit</button></form>}
    {quiz2Question3 && <p>That is correct.</p>}
    {quiz2Question3 && <form action={quiz2Question4Handler}><p>T/F: The square of an odd number is odd.</p><input type="checkbox" name="quiz2Question4"></input><button>Submit</button></form>}
    {quiz2Question4 && <p>That is correct.</p>}
    {quiz2Question4 && <form action={quiz3Handler}><p>Do you want to take quiz 3?</p><input type="checkbox" name="quiz3"></input><button>Submit</button></form>}
    {/* {quiz2Question4 && <input name="inputQuiz3" defaultValue="Do you want to take quiz 3?" onClick={e => {
      setQuiz3(true);
    }}/>} */}
    {quiz3 && <form action={quiz3Question1Handler}><p>What is the Capital of Canada?</p><input name="quiz3Question1"></input><button>Submit</button></form>}
    {quiz3Question1 == "Ottawa" && <p>That is correct.</p>}
    {quiz3Question1 == "Ottawa" && <form action={quiz3Question2Handler}><p>Which ocean borders the west coast of Canada?</p><input name="quiz3Question2"></input><button>Submit</button></form>}
    {quiz3Question2 == "Pacific" && <p>That is correct.</p>}
    {quiz3Question2 == "Pacific" && <form action={quiz3Question3Handler}><p>What is the name of the North Star?</p><input name="quiz3Question3"></input><button>Submit</button></form>}
    {quiz3Question3 == "Polaris" && <p>That is correct.</p>}
    {quiz3Question3 == "Polaris" && <form action={quiz3Question4Handler}><p>What language is the web written in?</p><input name="quiz3Question4"></input><button>Submit</button></form>}
    {quiz3Question4 == "JavaScript" && <p>That is correct.</p>}
    </>
  );
}
