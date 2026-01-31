import type { ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="pfm-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pfm-modal-title"
      onClick={onClose}
    >
      <div
        className="pfm-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="pfm-modal__header">
          <h2 id="pfm-modal-title" className="pfm-modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="pfm-modal__close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </header>
        <div className="pfm-modal__body">{children}</div>
      </div>
    </div>
  );
}
