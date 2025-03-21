import React from "react";

interface ResponseMessageProps {
  message: string;
}

const ResponseMessage: React.FC<ResponseMessageProps> = ({
  message,
}) => {
  return (
    <div className="px-3 py-4 bg-opacity-70 bg-gray-900 rounded-md">
      {message}
    </div>
  );
};

export default ResponseMessage;
