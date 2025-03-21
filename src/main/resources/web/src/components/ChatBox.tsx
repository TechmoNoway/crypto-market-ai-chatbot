"use client";
import { useState } from "react";
import PromptMessage from "./PromptMessage";
import ResponseMessage from "./ResponseMessage";
import axios from "axios";

const ChatBox = () => {
  const [response, setResponse] = useState<
    { message: string; role: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleFetchCoinDetails = async (prompt: string) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4242/ai/chat",
        { prompt }
      );
      console.log(data);

      const response = { message: data.message, role: "model" };
      const userPrompt = { message: prompt, role: "user" };
      setResponse((prev) => [...prev, response]);
      console.log("Success", data);
    } catch (error) {
      console.log("Error: ", error);
    }
    setLoading(false);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      const prompt = (e.target as HTMLInputElement).value;
      const data = {
        message: prompt,
        role: "user",
      };
      setResponse((prev) => [...prev, data]);
      handleFetchCoinDetails(prompt);
      setInputValue("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="chatbox blur-background large-shadow z-50 bg-[#000518] bg-opacity-70 w-[90vw] md:w-[70vw] lg:w-[30vw] pb-6 h-[85vh] shadow-2xl shadow-purple">
      <div className="h-[10%] pl-3 border-b border-gray-700 flex gap-x-4 items-center">
        <img
          className="rounded-full w-12 h-12"
          src="https://i.ibb.co/mhJM5g0/cat-ocean-eyes-xh-1920x1080.jpg"
          alt="cat-ocean-eyes-xh-1920x1080"
        />

        <div>
          <h1 className="text-lg font-semibold">Tars AI</h1>
          <p className="text-sm text-gray-400">
            Real Time Crypto Market Data
          </p>
        </div>
      </div>

      <div className="h-[77%]">
        {response.length ? (
          <div className="flex flex-col py-5 px-5 overflow-y-auto h-full custom-scrollbar">
            {response.map((item, index) =>
              item.role == "user" ? (
                <div key={index} className="self-end">
                  <PromptMessage message={item.message} />
                </div>
              ) : (
                <div key={index} className="self-start">
                  <ResponseMessage message={item.message} />
                </div>
              )
            )}
            {loading && <p>Thinking for the answer...</p>}
          </div>
        ) : (
          <div className="p-10 gap-5 h-full flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">
              Welcome to Tars the Crypto Chat Bot
            </p>
            <p className="text-gray-500">inquire about market data</p>
          </div>
        )}
      </div>

      <div className="h-[7%] px-5">
        <input
          type="text"
          className="h-full rounded-full border-gray-700 border bg-transparent px-5 w-full outline-none"
          placeholder="give your prompt"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ChatBox;
