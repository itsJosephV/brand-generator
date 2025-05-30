import { useAuth } from "../../hooks/use-auth";

export default function Login() {
  const { login } = useAuth();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log({ email, password });

    if (!email || !password) {
      console.log("Missing fields");
      return;
    }

    login({
      email,
      password,
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
