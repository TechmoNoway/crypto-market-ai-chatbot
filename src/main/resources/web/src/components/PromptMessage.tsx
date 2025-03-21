import React from "react";

interface ResponseMessageProps {
  message: string;
}

const PromptMessage: React.FC<ResponseMessageProps> = ({
  message,
}) => {
  return <div className="px-3 py-4 rounded-md">{message}</div>;
};

export default PromptMessage;
