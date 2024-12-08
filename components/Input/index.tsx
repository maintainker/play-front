import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./index.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: ReactNode; // children 추가
}

export default function Input({ label, children, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      {label && <label>{label}</label>}
      <input {...props} />
      {children && <div className={styles.childrenWrapper}>{children}</div>}
    </div>
  );
}
