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
  
  return (
    <>
    <input name="inputQuiz1" defaultValue="Do you want to take quiz 1?" onClick={() => {
      setQuiz1(true);
    }}/>
    {quiz1 && <input name="onePlusOne" defaultValue="What is 1+1?" onChange={e => {
      setQuiz1Question1(e.target.value);
    }}/>}
    {quiz1Question1 == 2 && <p>That is correct.</p>}
    {quiz1Question1 == 2 && <input name="fourteenDividedByTwo" defaultValue="What is 14/2?" onChange={e => {
      setQuiz1Question2(e.target.value);
    }}/>}
    {quiz1Question2 == 7 && <p>That is correct.</p>}
    {quiz1Question2 == 7 && <input name="sixteenTimesFive" defaultValue="What is 16*5?" onChange={e => {
      setQuiz1Question3(e.target.value);
    }}/>}
    {quiz1Question3 == 80 && <p>That is correct.</p>}
    {quiz1Question3 == 80 && <input name="oneHundredNinetyEightMinusThirtySix" defaultValue="What is 198-36?" onChange={e => {
      setQuiz1Question4(e.target.value);
    }}/>}
    {quiz1Question4 == 162 && <p>That is correct.</p>}
    {quiz1Question4 == 162 && <input name="inputQuiz2" defaultValue="Do you want to take quiz 2?" onClick={e => {
      setQuiz2(true);
    }}/>}
    {quiz2 && <input name="sidesOfRectangle1" defaultValue="(true/false): A rectangle has three sides."/>}
    {quiz2 && <input type="checkbox" name="sidesOfRectangle2" defaultChecked={true} onChange={e => {
      setQuiz2Question1(e.target.checked);
    }}/>}
    {!quiz2Question1 && <p>That is correct.</p>}
    {!quiz2Question1 && <input name="digitsOfPi" defaultValue="(true/false): The first six digits of pi are 3.14159."/>}
    {!quiz2Question1 && <input type="checkbox" defaultChecked={false} onChange={e => {
      setQuiz2Question2(e.target.checked);
    }}/>}
    {quiz2Question2 && <p>That is correct.</p>}
    {quiz2Question2 && <input name="question3" defaultValue="(true/false): The square of an even number is even."/>}
    {quiz2Question2 && <input type="checkbox" defaultChecked={false} onChange={e => {
      setQuiz2Question3(e.target.checked);
    }}/>}
    {quiz2Question3 && <p>That is correct.</p>}
    {quiz2Question3 && <input name="question4" defaultValue="(true/false): The square of an odd number is odd."/>}
    {quiz2Question3 && <input type="checkbox" defaultChecked={false} onChange={e => {
      setQuiz2Question4(e.target.checked);
    }}/>}
    {quiz2Question4 && <p>That is correct.</p>}
    {quiz2Question4 && <input name="inputQuiz3" defaultValue="Do you want to take quiz 3?" onClick={e => {
      setQuiz3(true);
    }}/>}
    {quiz3 && <input name="capitalOfCanada" defaultValue="What is the Capital of Canada?" onChange={e => {
      setQuiz3Question1(e.target.value);
    }}/>}
    {quiz3Question1 === "Ottawa" && <p>That is correct.</p>}
    {quiz3Question1 === "Ottawa" && <input name="oceanToTheWest" defaultValue="Which ocean borders the west coast of Canada?" onChange={e => {
      setQuiz3Question2(e.target.value);
    }}/>}
    {quiz3Question2 === "Pacific" && <p>That is correct.</p>}
    {quiz3Question2 === "Pacific" && <input name="northStar" defaultValue="What is the name of the North Star?" onChange={e => {
      setQuiz3Question3(e.target.value);
    }}/>}
    {quiz3Question3 === "Polaris" && <p>That is correct.</p>}
    {quiz3Question3 === "Polaris" && <input name="whatLanguage" defaultValue="Which language are you programming in?" onChange={e => {
      setQuiz3Question4(e.target.value);
    }}/>}
    {quiz3Question4 === "JavaScript" && <p>That is correct.</p>}
    </>
  );
}
