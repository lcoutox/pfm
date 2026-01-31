import type { HTMLAttributes, ReactNode } from "react";
import "./Card.css";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  children: ReactNode;
};

export function Card({ title, children, className = "", ...rest }: CardProps) {
  return (
    <div className={`pfm-card ${className}`.trim()} {...rest}>
      {title !== undefined && (
        <h3 className="pfm-card__title">{title}</h3>
      )}
      <div className="pfm-card__body">{children}</div>
    </div>
  );
}
