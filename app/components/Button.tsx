const baseStyles = "p-4 bg-red-400 rounded-md text-white"

export default function Button({className = "", children}) {
  return (
    <button className={`${baseStyles} ${className}`}>
      {children}
    </button>    
  );
}


