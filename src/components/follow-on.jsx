import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.instagram.com/_ghay00r/">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ghayoor-hussain-app-developer-mern-stack-reactnative-flutter/">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
