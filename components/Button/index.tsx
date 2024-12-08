"use client";

import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import styles from "./index.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

const LoadingButton = ({
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${isLoading ? styles.loading : ""}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className={styles.spinner}></div> // 로딩 스피너
      ) : (
        children // 원래 버튼 텍스트
      )}
    </button>
  );
};

export default LoadingButton;
