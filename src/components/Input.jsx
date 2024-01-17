function Input({ type, placeholder, ...props }) {
  return (
    <input
      className={`input-bg focus:input-focus color-secondary   w-full  cursor-pointer rounded-lg border-none p-4 outline-none ${type === "email" ? "mb-5" : "mb-2"}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
