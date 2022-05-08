import React, { useState } from "react";
import Footer from "components/footer";
import api from "utils/api";
import dayjs from "dayjs";

const Input = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const now = dayjs().format("YYYY-MM-DD");

  const data = {
    time: now,
    open: input,
    high: input,
    low: input,
    close: input,
    user_id: 1,
  };

  const handleSubmit = async () => {
    const res = await api.post("http://localhost:3000/api/post/create", data);
    // console.log(res);
    console.log(data);
  };

  return (
    <div className="app-container">
      <form>
        {isOpen ? (
          <div>아침 체중 입력하세요</div>
        ) : (
          <div>저녁 체중 입력하세요</div>
        )}
        <input
          type="number"
          placeholder="ex) 56.78"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            setIsOpen(!isOpen);
            handleSubmit();
          }}
        >
          제출
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Input;
