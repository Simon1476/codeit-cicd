"use client";

const Button = () => {
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error("Sentry Frontend Error");
      }}
      className="h-[500px] w-[500px] bg-blue-500"
    >
      ButtonButtonButtonButtonButtonButtonButtonButtonButton
    </button>
  );
};

export default Button;
