'use client'; //makes a client component
import { useState } from 'react';
import { Suspense } from 'react';

export default function Home() {
  const numberQuestionArray = [
    {
      question: "What is 7+5?",
      answer: 12
    },
    {
      question: "What is 14/2?",
      answer: 7
    },
    {
      question: "What is 12*5?",
      answer: 60
    },
    {
      question: "What is 198-36?",
      answer: 162
    },
    {
      question: "What is 121/11?",
      answer: 11
    },
    {
      question: "What is 12*12?",
      answer: 144
    },
    {
      question: "What is 76+80?",
      answer: 156
    },
    {
      question: "What is 15-6?",
      answer: 9
    },
    { 
      question: "What is 8+8?",
      answer: 16
    },
    {
      question: "What is 19-2?",
      answer: 17
    },
    {
      question: "What is 4*6?",
      answer: 24
    },
    {
      question: "What is 72/8?",
      answer: 9
    }];
  const booleanQuestionArray = [
    {
      question: "T/F: A rectangle has three sides.",
      answer: "false"
    },
    {
      question: "T/F: The first six digits of pi are 3.14159.",
      answer: "true"
    },
    {
      question: "T/F: The product of two even numbers is even.",
      answer: "true"
    },
    {
      question: "T/F: The product of two odd numbers is odd.",
      answer: "true"
    },
    {
      question: "T/F: The sum of two even numbers is even.",
      answer: "true"
    },
    {
      question: "T/F: The sides of a triangle are always the same length.",
      answer: "false"
    },
    {
      question: "T/F: All angles in a triangle are always the same.",
      answer: "false"
    },
    {
      question: "T/F: All sides in a rectangle are always the same length.",
      answer: "false"
    },
    {
      question: "T/F: A triangle has four sides.",
      answer: "false"
    },
    {
      question: "T/F: A rhombus has four sides.",
      answer: "true"
    },
    {
      question: "T/F: A trapezoid has five sides.",
      answer: "false"
    },
    {
      question: "T/F: A rectangular prism has six surfaces.",
      answer: "true"
    }];
  const stringQuestionArray = [
    {
      question: "What is the capital of Canada?",
      answer: "Ottawa"
    },
    {
      question: "Which ocean borders the west coast of Canada?",
      answer: "Pacific"
    },
    {
      question: "What is the name of the North Star?",
      answer: "Polaris"
    },
    {
      question: "What is the capital of the U.S.A.?",
      answer: "Washington, D.C."
    },
    {
      question: "In which constellation lies the Big Dipper?",
      answer: "Ursa Major"
    },
    {
      question: "What is the shape of Earth?",
      answer: "Sphere"
    },
    {
      question: "What is the lowest layer of the atmosphere?",
      answer: "Troposphere"
    },
    {
      question: "What is the most abundant element in the air?",
      answer: "Nitrogen"
    },
    {
      question: "What is the southernmost continent?",
      answer: "Antarctica"
    },
    {
      question: "What is the capital of Russia?",
      answer: "Moscow"
    },
    {
      question: "Which particle orbits the nucleus of the atom?",
      answer: "Electron"
    },
    {
      question: "What is the brightest star in the sky?",
      answer: "Sirius"
    }];
  const [quiz1, setQuiz1] = useState(false);
  const [quiz1Question1, setQuiz1Question1] = useState(0);
  const [quiz1Question2, setQuiz1Question2] = useState(0);
  const [quiz1Question3, setQuiz1Question3] = useState(0);
  const [quiz1Question4, setQuiz1Question4] = useState(0);
  const [quiz2, setQuiz2] = useState(false);
  const [quiz2Question1, setQuiz2Question1] = useState("");
  const [quiz2Question2, setQuiz2Question2] = useState("");
  const [quiz2Question3, setQuiz2Question3] = useState("");
  const [quiz2Question4, setQuiz2Question4] = useState("");
  const [quiz3, setQuiz3] = useState(false);
  const [quiz3Question1, setQuiz3Question1] = useState("");
  const [quiz3Question2, setQuiz3Question2] = useState("");
  const [quiz3Question3, setQuiz3Question3] = useState("");
  const [quiz3Question4, setQuiz3Question4] = useState("");

  const [temp1, setTemp1] = useState(Math.floor(Math.random()*numberQuestionArray.length));
  const [randomQuestionAnswerPair1, setRandomQuestionAnswerPair1] = useState(numberQuestionArray[temp1]);
  const [temp2, setTemp2] = useState(Math.floor(Math.random()*numberQuestionArray.length));
  const [randomQuestionAnswerPair2, setRandomQuestionAnswerPair2] = useState(numberQuestionArray[temp2]);
  const [temp3, setTemp3] = useState(Math.floor(Math.random()*numberQuestionArray.length));
  const [randomQuestionAnswerPair3, setRandomQuestionAnswerPair3] = useState(numberQuestionArray[temp3]);
  const [temp4, setTemp4] = useState(Math.floor(Math.random()*numberQuestionArray.length));
  const [randomQuestionAnswerPair4, setRandomQuestionAnswerPair4] = useState(numberQuestionArray[temp4]);
  const [temp5, setTemp5] = useState(Math.floor(Math.random()*booleanQuestionArray.length));
  const [randomQuestionAnswerPair5, setRandomQuestionAnswerPair5] = useState(booleanQuestionArray[temp5]);
  const [temp6, setTemp6] = useState(Math.floor(Math.random()*booleanQuestionArray.length));
  const [randomQuestionAnswerPair6, setRandomQuestionAnswerPair6] = useState(booleanQuestionArray[temp6]);
  const [temp7, setTemp7] = useState(Math.floor(Math.random()*booleanQuestionArray.length));
  const [randomQuestionAnswerPair7, setRandomQuestionAnswerPair7] = useState(booleanQuestionArray[temp7]);
  const [temp8, setTemp8] = useState(Math.floor(Math.random()*booleanQuestionArray.length));
  const [randomQuestionAnswerPair8, setRandomQuestionAnswerPair8] = useState(booleanQuestionArray[temp8]);
  const [temp9, setTemp9] = useState(Math.floor(Math.random()*stringQuestionArray.length));
  const [randomQuestionAnswerPair9, setRandomQuestionAnswerPair9] = useState(stringQuestionArray[temp9]);
  const [temp10, setTemp10] = useState(Math.floor(Math.random()*stringQuestionArray.length));
  const [randomQuestionAnswerPair10, setRandomQuestionAnswerPair10] = useState(stringQuestionArray[temp10]);
  const [temp11, setTemp11] = useState(Math.floor(Math.random()*stringQuestionArray.length));
  const [randomQuestionAnswerPair11, setRandomQuestionAnswerPair11] = useState(stringQuestionArray[temp11]);
  const [temp12, setTemp12] = useState(Math.floor(Math.random()*stringQuestionArray.length));
  const [randomQuestionAnswerPair12, setRandomQuestionAnswerPair12] = useState(stringQuestionArray[temp12]);

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
    const quiz2Question1Response = formData.get("quiz2Question1"); // transform a boolean to a string
    if (quiz2Question1Response) {
      setQuiz2Question1("true");
    } else {
      setQuiz2Question1("false");
    }
  }

  function quiz2Question2Handler(formData) {
    const quiz2Question2Response = formData.get("quiz2Question2");
    if (quiz2Question2Response) {
      setQuiz2Question2("true");
    } else {
      setQuiz2Question2("false");
    }
  }

  function quiz2Question3Handler(formData) {
    const quiz2Question3Response = formData.get("quiz2Question3");
    if (quiz2Question3Response) {
      setQuiz2Question3("true");
    } else {
      setQuiz2Question3("false");
    }
  }

  function quiz2Question4Handler(formData) {
    const quiz2Question4Response = formData.get("quiz2Question4");
    if (quiz2Question4Response) {
      setQuiz2Question4("true");
    } else {
      setQuiz2Question4("false");
    }
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
    <label>Yes</label>
    <input type="checkbox" name="quiz1">
    </input>
    <button type="submit">
      Submit
    </button>
    </form>
    {/* For testing purposes: */}
    {/* <form action={quiz1Question1Handler}><input value={randomQuestionAnswerPair1.question} onChange={() => {}} className="question"></input><input name="quiz1Question1" className="answer"></input><button>Submit</button></form>
    {quiz1Question1 == randomQuestionAnswerPair1.answer && <p>That is correct.</p>} */}
    {/* <form action={quiz2Question1Handler}><input value={randomQuestionAnswerPair5.question} onChange={() => {}} className="question"></input><input type="checkbox" name="quiz2Question1" className="answer"></input><button>Submit</button></form>
    {quiz2Question1 == randomQuestionAnswerPair5.answer && <p>That is correct.</p>} */}
    {/* <form action={quiz3Question1Handler}><input value={randomQuestionAnswerPair9.question} onChange={() => {}} className="question"></input><input name="quiz3Question1" className="answer"></input><button>Submit</button></form>
    {quiz3Question1 == randomQuestionAnswerPair9.answer && <p>That is correct.</p>} */}
    {quiz1 && <form action={quiz1Question1Handler}><input value={randomQuestionAnswerPair1.question} onChange={() => {}} className="question"></input><input name="quiz1Question1" className="answer"></input><button>Submit</button></form>}
    {quiz1Question1 == randomQuestionAnswerPair1.answer && <p>That is correct.</p>}
    {quiz1Question1 == randomQuestionAnswerPair1.answer && <form action={quiz1Question2Handler}><input value={randomQuestionAnswerPair2.question} onChange={() => {}} className="question"></input><input name="quiz1Question2" className="answer"></input><button>Submit</button></form>}
    {quiz1Question2 == randomQuestionAnswerPair2.answer && <p>That is correct.</p>}
    {quiz1Question2 == randomQuestionAnswerPair2.answer && <form action={quiz1Question3Handler}><input value={randomQuestionAnswerPair3.question} onChange={() => {}} className="question"></input><input name="quiz1Question3" className="answer"></input><button>Submit</button></form>}
    {quiz1Question3 == randomQuestionAnswerPair3.answer && <p>That is correct.</p>}
    {quiz1Question3 == randomQuestionAnswerPair3.answer && <form action={quiz1Question4Handler}><input value={randomQuestionAnswerPair4.question} onChange={() => {}} className="question"></input><input name="quiz1Question4" className="answer"></input><button>Submit</button></form>}
    {quiz1Question4 == randomQuestionAnswerPair4.answer && <p>That is correct.</p>}
    {quiz1Question4 == randomQuestionAnswerPair4.answer && <form action={quiz2Handler}><p>Do you want to take quiz 2?</p><label>Yes</label><input type="checkbox" name="quiz2"></input><button>Submit</button></form>}
    {quiz2 && <form action={quiz2Question1Handler}><input value={randomQuestionAnswerPair5.question} onChange={() => {}} className="question"></input><label>T</label><input type="checkbox" name="quiz2Question1" className="answer"></input><button>Submit</button></form>}
    {quiz2Question1 == randomQuestionAnswerPair5.answer && <p>That is correct.</p>}
    {quiz2Question1 == randomQuestionAnswerPair5.answer && <form action={quiz2Question2Handler}><input value={randomQuestionAnswerPair6.question} onChange={() => {}} className="question"></input><label>T</label><input type="checkbox" name="quiz2Question2" className="answer"></input><button>Submit</button></form>}
    {quiz2Question2 == randomQuestionAnswerPair6.answer && <p>That is correct.</p>}
    {quiz2Question2 == randomQuestionAnswerPair6.answer && <form action={quiz2Question3Handler}><input value={randomQuestionAnswerPair7.question} onChange={() => {}} className="question"></input><label>T</label><input type="checkbox" name="quiz2Question3" className="answer"></input><button>Submit</button></form>}
    {quiz2Question3 == randomQuestionAnswerPair7.answer && <p>That is correct.</p>}
    {quiz2Question3 == randomQuestionAnswerPair7.answer && <form action={quiz2Question4Handler}><input value={randomQuestionAnswerPair8.question} onChange={() => {}} className="question"></input><label>T</label><input type="checkbox" name="quiz2Question4" className="answer"></input><button>Submit</button></form>}
    {quiz2Question4 == randomQuestionAnswerPair8.answer && <p>That is correct.</p>}
    {quiz2Question4 == randomQuestionAnswerPair8.answer && <form action={quiz3Handler}><p>Do you want to take quiz 3?</p><label>Yes</label><input type="checkbox" name="quiz3"></input><button>Submit</button></form>}
    {quiz3 && <form action={quiz3Question1Handler}><input value={randomQuestionAnswerPair9.question} onChange={() => {}} className="question"></input><input name="quiz3Question1" className="answer"></input><button>Submit</button></form>}
    {quiz3Question1 == randomQuestionAnswerPair9.answer && <p>That is correct.</p>}
    {quiz3Question1 == randomQuestionAnswerPair9.answer && <form action={quiz3Question2Handler}><input value={randomQuestionAnswerPair10.question} onChange={() => {}} className="question"></input><input name="quiz3Question2" className="answer"></input><button>Submit</button></form>}
    {quiz3Question2 == randomQuestionAnswerPair10.answer && <p>That is correct.</p>}
    {quiz3Question2 == randomQuestionAnswerPair10.answer && <form action={quiz3Question3Handler}><input value={randomQuestionAnswerPair11.question} onChange={() => {}} className="question"></input><input name="quiz3Question3" className="answer"></input><button>Submit</button></form>}
    {quiz3Question3 == randomQuestionAnswerPair11.answer && <p>That is correct.</p>}
    {quiz3Question3 == randomQuestionAnswerPair11.answer && <form action={quiz3Question4Handler}><input value={randomQuestionAnswerPair12.question} onChange={() => {}} className="question"></input><input name="quiz3Question4" className="answer"></input><button>Submit</button></form>}
    {quiz3Question4 == randomQuestionAnswerPair12.answer && <p>That is correct.</p>}
    </>
  );
}
