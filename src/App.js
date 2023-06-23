import React, { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const colors = ["red", "yellow", "green"];
  const numbers = [1, 2, 3, 4, 5];
  const [time, setTime] = useState(0);
  const [time0, setTime0] = useState(null);
  const [time1, setTime1] = useState(null);
  const [time2, setTime2] = useState(null);
  const [time3, setTime3] = useState(null);
  const [time4, setTime4] = useState(null);
  const [time5, setTime5] = useState(null);
  const [time6, setTime6] = useState(null);
  const [timeChoice1, setTimeChoice1] = useState(0);
  const [timeChoice2, setTimeChoice2] = useState(0);
  const [timeChoice3, setTimeChoice3] = useState(0);
  const [timeChoice4, setTimeChoice4] = useState(0);
  const [timeChoice5, setTimeChoice5] = useState(0);
  const [timeChoice6, setTimeChoice6] = useState(0);
  const [start, setStart] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [randomColors1, setRandomColors1] = useState("");
  const [randomColors2, setRandomColors2] = useState("");
  const [randomColors3, setRandomColors3] = useState("");
  const [randomNumbers1, setRandomNumbers1] = useState("");
  const [randomNumbers2, setRandomNumbers2] = useState("");
  const [randomNumbers3, setRandomNumbers3] = useState("");
  const [boxColor1, setBoxColor1] = useState("red");
  const [boxColor2, setBoxColor2] = useState("red");
  const [boxColor3, setBoxColor3] = useState("red");
  const [border1, setBroder1] = useState("none");
  const [border2, setBroder2] = useState("none");
  const [border3, setBroder3] = useState("none");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60); // คำนวณนาที
    const seconds = timeInSeconds % 60; // คำนวณวินาทีที่เหลือ
    return `${minutes}:${seconds.toString().padStart(2, "0")}`; // รูปแบบการแสดงผลเป็น "นาที:วินาที"
  };

  const formattedTime = formatTime(time);

  const handleStart = () => {
    const number1Index = Math.floor(Math.random() * numbers.length);
    const number1 = numbers[number1Index];
    numbers.splice(number1Index, 1);
    const number2Index = Math.floor(Math.random() * numbers.length);
    const number2 = numbers[number2Index];
    numbers.splice(number2Index, 1);
    const number3Index = Math.floor(Math.random() * numbers.length);
    const number3 = numbers[number3Index];
    let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    let randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    while (
      randomColor1 === randomColor2 ||
      randomColor1 === randomColor3 ||
      randomColor2 === randomColor3
    ) {
      randomColor1 = colors[Math.floor(Math.random() * colors.length)];
      randomColor2 = colors[Math.floor(Math.random() * colors.length)];
      randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    }
    setTime0(new Date());
    setBoxColor1("blue");
    setBroder1("solid");
    setRandomNumbers1(number1);
    setRandomNumbers2(number2);
    setRandomNumbers3(number3);
    setRandomColors1(randomColor1);
    setRandomColors2(randomColor2);
    setRandomColors3(randomColor3);
    setStart(1);
    setIsRunning(true);
  };

  const handleSelectionNumbers = (selectedNumber, nextStart) => {
    if (
      boxColor1 !== "green" &&
      boxColor1 !== "red" &&
      selectedNumber === randomNumbers1
    ) {
      setBoxColor1("green");
      setBoxColor2("blue");
      return Swal.fire({
        position: "top",
        icon: "success",
        title: "เลือกตัวเลขถัดไปได้เลย",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      boxColor2 !== "green" &&
      boxColor2 !== "red" &&
      selectedNumber === randomNumbers2
    ) {
      setBoxColor2("green");
      setBoxColor3("blue");
      return Swal.fire({
        position: "top",
        icon: "success",
        title: "เลือกตัวเลขถัดไปได้เลย",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      boxColor3 !== "green" &&
      boxColor3 !== "red" &&
      selectedNumber === randomNumbers3
    ) {
      setBoxColor3("green");
      Swal.fire({
        position: "top",
        icon: "success",
        title: "เยี่ยม ทำข้อถัดไปกันเถอะ",
        showConfirmButton: false,
        timer: 1500,
      });
      const number1Index = Math.floor(Math.random() * numbers.length);
      const number1 = numbers[number1Index];
      numbers.splice(number1Index, 1);
      const number2Index = Math.floor(Math.random() * numbers.length);
      const number2 = numbers[number2Index];
      numbers.splice(number2Index, 1);
      const number3Index = Math.floor(Math.random() * numbers.length);
      const number3 = numbers[number3Index];
      setRandomNumbers1(number1);
      setRandomNumbers2(number2);
      setRandomNumbers3(number3);
      setStart(nextStart);
      if (!time1) {
        const currentTime = new Date();
        setTime1(currentTime);
        // คำนวณผลต่างเวลาเมื่อมีค่า time0 และ time1
        if (time0) {
          const difference = Math.floor(
            (currentTime.getTime() - time0.getTime()) / 1000
          );
          const minutes = Math.floor(difference / 60);
          const seconds = difference % 60;
          const formattedTime = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeChoice1(formattedTime);
        }
      } else if (!time2) {
        const currentTime = new Date();
        setTime2(currentTime);
        // คำนวณผลต่างเวลาเมื่อมีค่า time1 และ time2
        if (time1) {
          const difference = Math.floor(
            (currentTime.getTime() - time1.getTime()) / 1000
          );
          const minutes = Math.floor(difference / 60);
          const seconds = difference % 60;
          const formattedTime = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeChoice2(formattedTime);
        }
      } else if (!time3) {
        const currentTime = new Date();
        setTime3(currentTime);
        // คำนวณผลต่างเวลาเมื่อมีค่า time2 และ time3
        if (time2) {
          const difference = Math.floor(
            (currentTime.getTime() - time2.getTime()) / 1000
          );
          const minutes = Math.floor(difference / 60);
          const seconds = difference % 60;
          const formattedTime = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeChoice3(formattedTime);
        }
      }

      setBoxColor2("red");
      setBoxColor3("red");
      return setBoxColor1("blue");
    } else {
      return Swal.fire({
        position: "top",
        icon: "error",
        title: "คำตอบไม่ถูกต้อง โปรดตรวจสอบอีกครั้ง",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleSelectionColors = (selectedColors, nextStart) => {
    if (
      border1 !== "none" &&
      border1 === "solid" &&
      randomColors1 === selectedColors
    ) {
      setBroder1("none");
      setBroder2("solid");
      return Swal.fire({
        position: "top",
        icon: "success",
        title: "เลือกสีถัดไปกันเถอะ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      border2 !== "none" &&
      border2 === "solid" &&
      randomColors2 === selectedColors
    ) {
      setBroder2("none");
      setBroder3("solid");
      return Swal.fire({
        position: "top",
        icon: "success",
        title: "เลือกสีถัดไปกันเถอะ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      border3 !== "none" &&
      border3 === "solid" &&
      randomColors3 === selectedColors
    ) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "คำตอบถูกต้อง ทำข้อต่อไปกันเถอะ",
        showConfirmButton: false,
        timer: 1500,
      });
      let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
      let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
      let randomColor3 = colors[Math.floor(Math.random() * colors.length)];
      while (
        randomColor1 === randomColor2 ||
        randomColor1 === randomColor3 ||
        randomColor2 === randomColor3
      ) {
        randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        randomColor3 = colors[Math.floor(Math.random() * colors.length)];
      }
      setRandomColors1(randomColor1);
      setRandomColors2(randomColor2);
      setRandomColors3(randomColor3);
      setStart(nextStart);
      setBroder3("none");
      if (!time4) {
        const currentTime = new Date();
        setTime4(currentTime);
        // คำนวณผลต่างเวลาเมื่อมีค่า time4 และ time3
        if (time3) {
          const difference = Math.floor(
            (currentTime.getTime() - time3.getTime()) / 1000
          );
          const minutes = Math.floor(difference / 60);
          const seconds = difference % 60;
          const formattedTime = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeChoice4(formattedTime);
        }
      } else if (!time5) {
        const currentTime = new Date();
        setTime5(currentTime);
        // คำนวณผลต่างเวลาเมื่อมีค่า time4 และ time3
        if (time4) {
          const difference = Math.floor(
            (currentTime.getTime() - time4.getTime()) / 1000
          );
          const minutes = Math.floor(difference / 60);
          const seconds = difference % 60;
          const formattedTime = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeChoice5(formattedTime);
        }
      } else if (!time6) {
        const currentTime = new Date();
        setTime6(currentTime);
        // คำนวณผลต่างเวลาเมื่อมีค่า time4 และ time3
        if (time5) {
          const difference = Math.floor(
            (currentTime.getTime() - time5.getTime()) / 1000
          );
          const minutes = Math.floor(difference / 60);
          const seconds = difference % 60;
          const formattedTime = `${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          setTimeChoice6(formattedTime);
        }
      }
      if (nextStart === 7) {
        setIsRunning(false);
        setStart(nextStart);
        return Swal.fire({
          position: "top",
          icon: "success",
          title: "ทำแบบทดสอบเสร็จสิ้น กรุณากรอกข้อมูล",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      return setBroder1("solid");
    } else {
      return Swal.fire({
        position: "top",
        icon: "error",
        title: "คำตอบไม่ถูกต้อง โปรดตรวจสอบคำตอบอีกครั้ง",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container">
      {start === 0 ? (
        <div>
          <h1 className="title">แบบทดสอบสำหรับผู้สูงวัย</h1>

          <button className="start-button" onClick={handleStart}>
            คลิกเพื่อเริ่มทำแบบทดสอบ
          </button>
        </div>
      ) : start === 1 ? (
        <div>
          <div className="number-block" style={{ backgroundColor: boxColor1 }}>
            {randomNumbers1}
          </div>
          <div className="number-block" style={{ backgroundColor: boxColor2 }}>
            {randomNumbers2}
          </div>
          <div className="number-block" style={{ backgroundColor: boxColor3 }}>
            {randomNumbers3}
          </div>
          <div className="text-randomNumber">
            1. โปรดเลือกตัวเลขในตัวเลือกให้ตรงกับตัวเลขข้างบน
          </div>
          <div className="box-randomNumber">
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(1, 2)}
            >
              1
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(2, 2)}
            >
              2
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(3, 2)}
            >
              3
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(4, 2)}
            >
              4
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(5, 2)}
            >
              5
            </div>
          </div>
          <div className="box-time">
            <h2>จับเวลา</h2>
            <h4>เวลา: {formattedTime} นาที</h4>
          </div>
        </div>
      ) : start === 2 ? (
        <div>
          <div className="number-block" style={{ backgroundColor: boxColor1 }}>
            {randomNumbers1}
          </div>
          <div className="number-block" style={{ backgroundColor: boxColor2 }}>
            {randomNumbers2}
          </div>
          <div className="number-block" style={{ backgroundColor: boxColor3 }}>
            {randomNumbers3}
          </div>
          <div className="text-randomNumber">
            2. โปรดเลือกตัวเลขในตัวเลือกให้ตรงกับตัวเลขข้างบน
          </div>
          <div className="box-randomNumber">
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(1, 3)}
            >
              1
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(2, 3)}
            >
              2
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(3, 3)}
            >
              3
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(4, 3)}
            >
              4
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(5, 3)}
            >
              5
            </div>
          </div>
          <div className="box-time">
            <h2>จับเวลา</h2>
            <h4>เวลา: {formattedTime} นาที</h4>
          </div>
        </div>
      ) : start === 3 ? (
        <div>
          <div className="number-block" style={{ backgroundColor: boxColor1 }}>
            {randomNumbers1}
          </div>
          <div className="number-block" style={{ backgroundColor: boxColor2 }}>
            {randomNumbers2}
          </div>
          <div className="number-block" style={{ backgroundColor: boxColor3 }}>
            {randomNumbers3}
          </div>
          <div className="text-randomNumber">
            3. โปรดเลือกตัวเลขในตัวเลือกให้ตรงกับตัวเลขข้างบน
          </div>
          <div className="box-randomNumber">
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(1, 4)}
            >
              1
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(2, 4)}
            >
              2
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(3, 4)}
            >
              3
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(4, 4)}
            >
              4
            </div>
            <div
              className="box-numbers"
              onClick={() => handleSelectionNumbers(5, 4)}
            >
              5
            </div>
          </div>
          <div className="box-time">
            <h2>จับเวลา</h2>
            <h4>เวลา: {formattedTime} นาที</h4>
          </div>
        </div>
      ) : start === 4 ? (
        <div>
          <div
            className="number-block"
            style={{
              backgroundColor: randomColors1,
              border: border1,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>

          <div
            className="number-block"
            style={{
              backgroundColor: randomColors2,
              border: border2,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>
          <div
            className="number-block"
            style={{
              backgroundColor: randomColors3,
              border: border3,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>
          <div className="text-randomNumber">
            4. โปรดเลือกสีในตัวเลือกให้ตรงกับชื่อสีข้างบน
          </div>
          <div className="box-randomNumber">
            <div
              className="box-colorsRed"
              onClick={() => handleSelectionColors("red", 5)}
            >
              ㅤ
            </div>
            <div
              className="box-colorsYellow"
              onClick={() => handleSelectionColors("yellow", 5)}
            >
              ㅤ
            </div>
            <div
              className="box-colorsGreen"
              onClick={() => handleSelectionColors("green", 5)}
            >
              ㅤ
            </div>
          </div>
          <div className="box-time">
            <h2>จับเวลา</h2>
            <h4>เวลา: {formattedTime} นาที</h4>
          </div>
        </div>
      ) : start === 5 ? (
        <div>
          <div
            className="number-block"
            style={{
              backgroundColor: randomColors1,
              border: border1,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>

          <div
            className="number-block"
            style={{
              backgroundColor: randomColors2,
              border: border2,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>
          <div
            className="number-block"
            style={{
              backgroundColor: randomColors3,
              border: border3,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>
          <div className="text-randomNumber">
            5. โปรดเลือกสีในตัวเลือกให้ตรงกับชื่อสีข้างบน
          </div>
          <div className="box-randomNumber">
            <div
              className="box-colorsRed"
              onClick={() => handleSelectionColors("red", 6)}
            >
              ㅤ
            </div>
            <div
              className="box-colorsYellow"
              onClick={() => handleSelectionColors("yellow", 6)}
            >
              ㅤ
            </div>
            <div
              className="box-colorsGreen"
              onClick={() => handleSelectionColors("green", 6)}
            >
              ㅤ
            </div>
          </div>
          <div className="box-time">
            <h2>จับเวลา</h2>
            <h4>เวลา: {formattedTime} นาที</h4>
          </div>
        </div>
      ) : start === 6 ? (
        <div>
          <div
            className="number-block"
            style={{
              backgroundColor: randomColors1,
              border: border1,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>

          <div
            className="number-block"
            style={{
              backgroundColor: randomColors2,
              border: border2,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>
          <div
            className="number-block"
            style={{
              backgroundColor: randomColors3,
              border: border3,
              borderColor: "white",
            }}
          >
            ㅤ
          </div>
          <div className="text-randomNumber">
            6. โปรดเลือกสีในตัวเลือกให้ตรงกับชื่อสีข้างบน
          </div>
          <div className="box-randomNumber">
            <div
              className="box-colorsRed"
              onClick={() => handleSelectionColors("red", 7)}
            >
              ㅤ
            </div>
            <div
              className="box-colorsYellow"
              onClick={() => handleSelectionColors("yellow", 7)}
            >
              ㅤ
            </div>
            <div
              className="box-colorsGreen"
              onClick={() => handleSelectionColors("green", 7)}
            >
              ㅤ
            </div>
          </div>
          <div className="box-time">
            <h2>จับเวลา</h2>
            <h4>เวลา: {formattedTime} นาที</h4>
          </div>
        </div>
      ) : (
        <div className="box-form">
          <h1 className="text-randomNumber">กรอกข้อมูลผู้ทำแบบทดสอบ</h1>
          <form action="" className="box-form">
            <label htmlFor="" className="text-data">
              ชื่อ-นามสกุล
            </label>
            <input type="text" />
            <label htmlFor="" className="text-data">
              รหัสคนไข้
            </label>
            <input type="text" maxLength={10} />
            <label
              htmlFor=""
              className="text-data"
              style={{ flexDirection: "column" }}
            >
              <div>ข้อ 1 : {timeChoice1} นาที</div>
              <div>ข้อ 2 : {timeChoice2} นาที</div>
              <div>ข้อ 3 : {timeChoice3} นาที</div>
              <div>ข้อ 4 : {timeChoice4} นาที</div>
              <div>ข้อ 5 : {timeChoice5} นาที</div>
              <div style={{marginBottom:10}}>ข้อ 6 : {timeChoice6} นาที</div>
              เวลาทั้งหมดในการทำ: {formattedTime} นาที
            </label>
            <button className="save-button">บันทึก</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
