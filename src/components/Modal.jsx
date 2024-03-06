export default function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">{children}</div>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

