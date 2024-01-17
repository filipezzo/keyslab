function Button({ children, ...props }) {
  return (
    <button
      className="btn-bg btn-text-color my-5 w-full rounded-full p-4 font-semibold transition-all hover:scale-105"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
