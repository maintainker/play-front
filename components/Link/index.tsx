"use client"; // 이 컴포넌트가 클라이언트에서만 렌더링되도록 지정

import React, { LinkHTMLAttributes } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  disabled?: boolean;
}

const CustomLink: React.FC<LinkProps> = ({
  children,
  href,
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      {...props}
    >
      {children} {/* 링크 텍스트 */}
    </Link>
  );
};

export default CustomLink;
