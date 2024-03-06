export default function Button({ type, classNames, onClick, children }) {
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
