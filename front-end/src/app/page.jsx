import { Loading } from "./components/Loading";
import SignInPage from "./sign-in/page";

export default function Home() {
  return (
    <div>
      <SignInPage />
      <Loading />
    </div>
  );
}
