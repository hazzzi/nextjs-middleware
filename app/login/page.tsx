'use client';
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div>
      <p>this is login</p>
      <button type="button" onClick={() => {
        router.replace("/home");
      }}>
        Login
        </button>
    </div>
  );
}

export default LoginPage;