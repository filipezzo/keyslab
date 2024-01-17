function Label({ children, id }) {
  return (
    <label htmlFor={id} className="color-secondary mb-2 mr-auto">
      {children}
    </label>
  );
}

export default Label;
