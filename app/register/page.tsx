"use client";

import { Button, Input, Link } from "@/components";
import styles from "./page.module.scss";
import { FormEvent, useCallback, useRef, useState } from "react";

interface FormValues {
  email: HTMLInputElement | null;
  password: HTMLInputElement | null;
  passwordCheck: HTMLInputElement | null;
}

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const formValueRef = useRef<FormValues>({
    email: null,
    password: null,
    passwordCheck: null,
  });
  const handleClick = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setIsLoading(true);
    console.log("버튼 클릭 - 로딩 시작");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("버튼 클릭 - 로딩 끝");
    setIsLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PLAY-UP</h1>
      <form className={styles["login-form"]} onSubmit={handleClick}>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" type="password" />
        <Input placeholder="비밀번호" type="password" />
        <Input placeholder="비밀번호" type="password" />
        <Input placeholder="비밀번호" type="password" />
        <Button isLoading={isLoading} type="submit">
          로그인
        </Button>
      </form>
      <div>
        <Link href="/login">돌아가기</Link>
      </div>
    </div>
  );
}
