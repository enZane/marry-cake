const basicStylesInput =
  "bg-gray-200 rounded-2xl text-lg border-red text-white";

export default function Input({ className = "", placeholder = "" }) {
  console.log(placeholder);
  return (
    <input
      className={`${className} ${basicStylesInput}`}
      placeholder={placeholder}
    ></input>
  );
}
