"use client";

import { Button, Input, Link } from "@/components";
import styles from "./page.module.scss";
import { useCallback } from "react";

export default function Login() {
  const handleClick = useCallback(async () => {
    console.log("버튼 클릭 - 로딩 시작");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("버튼 클릭 - 로딩 끝");
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PLAY-UP</h1>
      <form className={styles["login-form"]}>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" type="password" />
        <Button onClick={handleClick}>로그인</Button>
      </form>
      <div>
        아이디가 없으시다면 <Link href="/register">회원가입</Link>
      </div>
    </div>
  );
}
