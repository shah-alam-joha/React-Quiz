import signupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Singup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={signupImage} alt="sign up image" />
        <SignupForm />

      </div>
    </>
  );
}
