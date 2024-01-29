import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import { ReactComponent as AppleIcon } from "../../../assets/icons/apple.svg";
import { ReactComponent as BaseIcon } from "../../../assets/icons/base2.svg";
import { ReactComponent as SocialMediaIcons } from "../../../assets/icons/socialMediaLogos.svg";
import { ReactComponent as SocialMediaIconsBottom } from "../../../assets/icons/footerMedia.svg";

import styles from "./SignInFormComponent.module.css";

const SignInFormComponent = ({ onLogin }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.brandContainer}>
          <div className={styles.baseIconContainer}>
            <BaseIcon />
          </div>
          <div className={styles.titleTexts}>Base</div>
        </div>
        <div className={styles.socialMediaContainer}>
          <SocialMediaIcons />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.headerTexts}>
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
        </div>
        <div className={styles.socialMediaLoginContainer}>
          <div className={styles.socialMediaLogin}>
            <GoogleIcon />
            <p>Sign in with Google</p>
          </div>
          <div className={styles.socialMediaLogin}>
            <AppleIcon />
            <p>Sign in with Apple</p>
          </div>
        </div>
        <div className={styles.loginFormContainer}>
          <form>
            <div className={styles.emailInputContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="email">Email address</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className={styles.passwordInputContainer}>
              <div className={styles.labelContainer}>
                <label htmlFor="password">Password</label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className={styles.forgotPasswordContainer}>
              <a href="#">Forgot Password?</a>
            </div>
            <div className={styles.buttonContainer}>
              <button type="button" onClick={onLogin}>
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className={styles.signUpContainer}>
          <p>Don’t have an account?</p>
          <a href="/">Register here</a>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <SocialMediaIconsBottom />
      </div>
    </div>
  );
};

export default SignInFormComponent;
