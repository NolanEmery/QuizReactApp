"use client"; //makes a client component
import { useState } from "react";
import { numberQuestionArray, booleanQuestionArray, stringQuestionArray } from "./questions.js";
import { Provider } from "@/components/ui/provider";
import { Checkbox, Tabs, Slider, Input } from "@chakra-ui/react";

export default function Home() {
  const [showQuiz1, setShowQuiz1] = useState(false);
  const [quiz1Question1Answer, setQuiz1Question1Answer] = useState(0);
  const [quiz1Question2Answer, setQuiz1Question2Answer] = useState(0);
  const [quiz1Question3Answer, setQuiz1Question3Answer] = useState(0);
  const [quiz1Question4Answer, setQuiz1Question4Answer] = useState(0);
  const [showQuiz2, setShowQuiz2] = useState(false);
  const [quiz2Question1Answer, setQuiz2Question1Answer] = useState("");
  const [quiz2Question2Answer, setQuiz2Question2Answer] = useState("");
  const [quiz2Question3Answer, setQuiz2Question3Answer] = useState("");
  const [quiz2Question4Answer, setQuiz2Question4Answer] = useState("");
  const [showQuiz3, setShowQuiz3] = useState(false);
  const [quiz3Question1Answer, setQuiz3Question1Answer] = useState("");
  const [quiz3Question2Answer, setQuiz3Question2Answer] = useState("");
  const [quiz3Question3Answer, setQuiz3Question3Answer] = useState("");
  const [quiz3Question4Answer, setQuiz3Question4Answer] = useState("");

  let temp1 = Math.floor(Math.random() * numberQuestionArray.length);
  // for testing purposes:
  // let temp1 = numberQuestionArray.length-1;
  const [randomQuestionAnswerPair1, setRandomQuestionAnswerPair1] = useState(
    numberQuestionArray[temp1]
  );
  let temp2 = Math.floor(Math.random() * numberQuestionArray.length);
  while (temp2 == temp1) {
    temp2 = Math.floor(Math.random() * numberQuestionArray.length);
  }
  const [randomQuestionAnswerPair2, setRandomQuestionAnswerPair2] = useState(
    numberQuestionArray[temp2]
  );
  let temp3 = Math.floor(Math.random() * numberQuestionArray.length);
  while (temp3 == temp2 || temp3 == temp1) {
    temp3 = Math.floor(Math.random() * numberQuestionArray.length);
  }
  const [randomQuestionAnswerPair3, setRandomQuestionAnswerPair3] = useState(
    numberQuestionArray[temp3]
  );
  let temp4 = Math.floor(Math.random() * numberQuestionArray.length);
  while (temp4 == temp3 || temp4 == temp2 || temp4 == temp1) {
    temp4 = Math.floor(Math.random() * numberQuestionArray.length);
  }
  const [randomQuestionAnswerPair4, setRandomQuestionAnswerPair4] = useState(
    numberQuestionArray[temp4]
  );
  let temp5 = Math.floor(Math.random() * booleanQuestionArray.length);
  // for testing purposes:
  // let temp5 = booleanQuestionArray.length-1;
  const [randomQuestionAnswerPair5, setRandomQuestionAnswerPair5] = useState(
    booleanQuestionArray[temp5]
  );
  let temp6 = Math.floor(Math.random() * booleanQuestionArray.length);
  while (temp6 == temp5) {
    temp6 = Math.floor(Math.random() * booleanQuestionArray.length);
  }
  const [randomQuestionAnswerPair6, setRandomQuestionAnswerPair6] = useState(
    booleanQuestionArray[temp6]
  );
  let temp7 = Math.floor(Math.random() * booleanQuestionArray.length);
  while (temp7 == temp6 || temp7 == temp5) {
    temp7 = Math.floor(Math.random() * booleanQuestionArray.length);
  }
  const [randomQuestionAnswerPair7, setRandomQuestionAnswerPair7] = useState(
    booleanQuestionArray[temp7]
  );
  let temp8 = Math.floor(Math.random() * booleanQuestionArray.length);
  while (temp8 == temp7 || temp8 == temp6 || temp8 == temp5) {
    temp8 = Math.floor(Math.random() * booleanQuestionArray.length);
  }
  const [randomQuestionAnswerPair8, setRandomQuestionAnswerPair8] = useState(
    booleanQuestionArray[temp8]
  );
  let temp9 = Math.floor(Math.random() * stringQuestionArray.length);
  // for testing purposes:
  // let temp9 = stringQuestionArray.length-1;
  const [randomQuestionAnswerPair9, setRandomQuestionAnswerPair9] = useState(
    stringQuestionArray[temp9]
  );
  let temp10 = Math.floor(Math.random() * stringQuestionArray.length);
  while (temp10 == temp9) {
    temp10 = Math.floor(Math.random() * stringQuestionArray.length);
  }
  const [randomQuestionAnswerPair10, setRandomQuestionAnswerPair10] = useState(
    stringQuestionArray[temp10]
  );
  let temp11 = Math.floor(Math.random() * stringQuestionArray.length);
  while (temp11 == temp10 || temp11 == temp9) {
    temp11 = Math.floor(Math.random() * stringQuestionArray.length);
  }
  const [randomQuestionAnswerPair11, setRandomQuestionAnswerPair11] = useState(
    stringQuestionArray[temp11]
  );
  let temp12 = Math.floor(Math.random() * stringQuestionArray.length);
  while (temp12 == temp11 || temp12 == temp10 || temp12 == temp9) {
    temp12 = Math.floor(Math.random() * stringQuestionArray.length);
  }
  const [randomQuestionAnswerPair12, setRandomQuestionAnswerPair12] = useState(
    stringQuestionArray[temp12]
  );

  //<form>
  //<p> this is the question
  //<input> this is where the user types their response
  //<button> to submit
  function quiz1Handler(formData) {
    const quiz1Response = formData.get("quiz1");
    setShowQuiz1(quiz1Response);
  }

  function quiz1Question1Handler(formData) {
    const quiz1Question1Response = formData.get("quiz1Question1");
    setQuiz1Question1Answer(quiz1Question1Response);
  }

  function quiz1Question2Handler(formData) {
    const quiz1Question2Response = formData.get("quiz1Question2");
    setQuiz1Question2Answer(quiz1Question2Response);
  }

  function quiz1Question3Handler(formData) {
    const quiz1Question3Response = formData.get("quiz1Question3");
    setQuiz1Question3Answer(quiz1Question3Response);
  }

  function quiz1Question4Handler(formData) {
    const quiz1Question4Response = formData.get("quiz1Question4");
    setQuiz1Question4Answer(quiz1Question4Response);
  }

  function quiz2Handler(formData) {
    const quiz2Response = formData.get("quiz2");
    setShowQuiz2(quiz2Response);
  }

  function quiz2Question1Handler(formData) {
    const quiz2Question1Response = formData.get("quiz2Question1"); // transform a boolean to a string
    if (quiz2Question1Response) {
      setQuiz2Question1Answer("true");
    } else {
      setQuiz2Question1Answer("false");
    }
  }

  function quiz2Question2Handler(formData) {
    const quiz2Question2Response = formData.get("quiz2Question2");
    if (quiz2Question2Response) {
      setQuiz2Question2Answer("true");
    } else {
      setQuiz2Question2Answer("false");
    }
  }

  function quiz2Question3Handler(formData) {
    const quiz2Question3Response = formData.get("quiz2Question3");
    if (quiz2Question3Response) {
      setQuiz2Question3Answer("true");
    } else {
      setQuiz2Question3Answer("false");
    }
  }

  function quiz2Question4Handler(formData) {
    const quiz2Question4Response = formData.get("quiz2Question4");
    if (quiz2Question4Response) {
      setQuiz2Question4Answer("true");
    } else {
      setQuiz2Question4Answer("false");
    }
  }

  function quiz3Handler(formData) {
    const quiz3Response = formData.get("quiz3");
    setShowQuiz3(quiz3Response);
  }

  function quiz3Question1Handler(formData) {
    const quiz3Question1Response = formData.get("quiz3Question1");
    setQuiz3Question1Answer(quiz3Question1Response);
  }

  function quiz3Question2Handler(formData) {
    const quiz3Question2Response = formData.get("quiz3Question2");
    setQuiz3Question2Answer(quiz3Question2Response);
  }

  function quiz3Question3Handler(formData) {
    const quiz3Question3Response = formData.get("quiz3Question3");
    setQuiz3Question3Answer(quiz3Question3Response);
  }

  function quiz3Question4Handler(formData) {
    const quiz3Question4Response = formData.get("quiz3Question4");
    setQuiz3Question4Answer(quiz3Question4Response);
  }

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Tabs.Root fitted>
            <Tabs.List>
              <Tabs.Trigger
                value="quiz1"
                onClick={() => {
                  setQuiz2Question1Answer("");
                  setQuiz2Question2Answer("");
                  setQuiz2Question3Answer("");
                  setQuiz2Question4Answer("");
                  setQuiz3Question1Answer("");
                  setQuiz3Question2Answer("");
                  setQuiz3Question3Answer("");
                  setQuiz3Question4Answer("");
                }}
              >
                Quiz 1
              </Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger
                value="quiz2"
                onClick={() => {
                  setQuiz1Question1Answer(0);
                  setQuiz1Question2Answer(0);
                  setQuiz1Question3Answer(0);
                  setQuiz1Question4Answer(0);
                  setQuiz3Question1Answer("");
                  setQuiz3Question2Answer("");
                  setQuiz3Question3Answer("");
                  setQuiz3Question4Answer("");
                }}
              >
                Quiz 2
              </Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger
                value="quiz3"
                onClick={() => {
                  setQuiz1Question1Answer(0);
                  setQuiz1Question2Answer(0);
                  setQuiz1Question3Answer(0);
                  setQuiz1Question4Answer(0);
                  setQuiz2Question1Answer("");
                  setQuiz2Question2Answer("");
                  setQuiz2Question3Answer("");
                  setQuiz2Question4Answer("");
                }}
              >
                Quiz 3
              </Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Content value="quiz1">
              <>
                <form action={quiz1Question1Handler}>
                  <input
                    value={randomQuestionAnswerPair1.question}
                    onChange={() => {}}
                    className="question"
                    id="quiz1"
                  ></input>
                  <Slider.Root name="quiz1Question1" width="250px" max={200}>
                    <Slider.ValueText />
                    <Slider.Control>
                      <Slider.Track>
                        <Slider.Range />
                      </Slider.Track>
                      <Slider.Thumbs />
                    </Slider.Control>
                  </Slider.Root>
                  <button>Submit</button>
                </form>
                {quiz1Question1Answer == randomQuestionAnswerPair1.answer && (
                  <p>That is correct.</p>
                )}
                {quiz1Question1Answer == randomQuestionAnswerPair1.answer && (
                  <form action={quiz1Question2Handler}>
                    <input
                      value={randomQuestionAnswerPair2.question}
                      onChange={() => {}}
                      className="question"
                      id="quiz1"
                    ></input>
                    <Slider.Root name="quiz1Question2" width="250px" max={200}>
                      <Slider.ValueText />
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                      </Slider.Control>
                    </Slider.Root>
                    <button>Submit</button>
                  </form>
                )}
                {quiz1Question2Answer == randomQuestionAnswerPair2.answer && (
                  <p>That is correct.</p>
                )}
                {quiz1Question2Answer == randomQuestionAnswerPair2.answer && (
                  <form action={quiz1Question3Handler}>
                    <input
                      value={randomQuestionAnswerPair3.question}
                      onChange={() => {}}
                      className="question"
                      id="quiz1"
                    ></input>
                    <Slider.Root name="quiz1Question3" width="250px" max={200}>
                      <Slider.ValueText />
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                      </Slider.Control>
                    </Slider.Root>
                    <button>Submit</button>
                  </form>
                )}
                {quiz1Question3Answer == randomQuestionAnswerPair3.answer && (
                  <p>That is correct.</p>
                )}
                {quiz1Question3Answer == randomQuestionAnswerPair3.answer && (
                  <form action={quiz1Question4Handler}>
                    <input
                      value={randomQuestionAnswerPair4.question}
                      onChange={() => {}}
                      className="question"
                      id="quiz1"
                    ></input>
                    <Slider.Root name="quiz1Question4" width="250px" max={200}>
                      <Slider.ValueText />
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                      </Slider.Control>
                    </Slider.Root>
                    <button>Submit</button>
                  </form>
                )}
                {quiz1Question4Answer == randomQuestionAnswerPair4.answer && (
                  <p>That is correct.</p>
                )}
              </>
            </Tabs.Content>
            <Tabs.Content value="quiz2">
              <>
                <form action={quiz2Question1Handler}>
                  <input
                    value={randomQuestionAnswerPair5.question}
                    onChange={() => {}}
                    className="question"
                  ></input>
                  <label>T</label>
                  <Checkbox.Root name="quiz2Question1" variant="subtle">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label />
                  </Checkbox.Root>
                  <button>Submit</button>
                </form>
                {quiz2Question1Answer == randomQuestionAnswerPair5.answer && (
                  <p>That is correct.</p>
                )}
                {quiz2Question1Answer == randomQuestionAnswerPair5.answer && (
                  <form action={quiz2Question2Handler}>
                    <input
                      value={randomQuestionAnswerPair6.question}
                      onChange={() => {}}
                      className="question"
                    ></input>
                    <label>T</label>
                    <Checkbox.Root name="quiz2Question2" variant="subtle">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                    <button>Submit</button>
                  </form>
                )}
                {quiz2Question2Answer == randomQuestionAnswerPair6.answer && (
                  <p>That is correct.</p>
                )}
                {quiz2Question2Answer == randomQuestionAnswerPair6.answer && (
                  <form action={quiz2Question3Handler}>
                    <input
                      value={randomQuestionAnswerPair7.question}
                      onChange={() => {}}
                      className="question"
                    ></input>
                    <label>T</label>
                    <Checkbox.Root name="quiz2Question3" variant="subtle">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                    <button>Submit</button>
                  </form>
                )}
                {quiz2Question3Answer == randomQuestionAnswerPair7.answer && (
                  <p>That is correct.</p>
                )}
                {quiz2Question3Answer == randomQuestionAnswerPair7.answer && (
                  <form action={quiz2Question4Handler}>
                    <input
                      value={randomQuestionAnswerPair8.question}
                      onChange={() => {}}
                      className="question"
                    ></input>
                    <label>T</label>
                    <Checkbox.Root name="quiz2Question4" variant="subtle">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                    <button>Submit</button>
                  </form>
                )}
                {quiz2Question4Answer == randomQuestionAnswerPair8.answer && (
                  <p>That is correct.</p>
                )}
              </>
            </Tabs.Content>
            <Tabs.Content value="quiz3">
              <>
                <form action={quiz3Question1Handler}>
                  <input
                    value={randomQuestionAnswerPair9.question}
                    onChange={() => {}}
                    className="question"
                  ></input>
                  <input name="quiz3Question1" className="answer"></input>
                  <button>Submit</button>
                </form>
                {quiz3Question1Answer == randomQuestionAnswerPair9.answer && (
                  <p>That is correct.</p>
                )}
                {quiz3Question1Answer == randomQuestionAnswerPair9.answer && (
                  <form action={quiz3Question2Handler}>
                    <input
                      value={randomQuestionAnswerPair10.question}
                      onChange={() => {}}
                      className="question"
                    ></input>
                    <input name="quiz3Question2" className="answer"></input>
                    <button>Submit</button>
                  </form>
                )}
                {quiz3Question2Answer == randomQuestionAnswerPair10.answer && (
                  <p>That is correct.</p>
                )}
                {quiz3Question2Answer == randomQuestionAnswerPair10.answer && (
                  <form action={quiz3Question3Handler}>
                    <input
                      value={randomQuestionAnswerPair11.question}
                      onChange={() => {}}
                      className="question"
                    ></input>
                    <input name="quiz3Question3" className="answer"></input>
                    <button>Submit</button>
                  </form>
                )}
                {quiz3Question3Answer == randomQuestionAnswerPair11.answer && (
                  <p>That is correct.</p>
                )}
                {quiz3Question3Answer == randomQuestionAnswerPair11.answer && (
                  <form action={quiz3Question4Handler}>
                    <input
                      value={randomQuestionAnswerPair12.question}
                      onChange={() => {}}
                      className="question"
                    ></input>
                    <input name="quiz3Question4" className="answer"></input>
                    <button>Submit</button>
                  </form>
                )}
                {quiz3Question4Answer == randomQuestionAnswerPair12.answer && (
                  <p>That is correct.</p>
                )}
              </>
            </Tabs.Content>
          </Tabs.Root>
        </Provider>
      </body>
    </html>
  );
}
