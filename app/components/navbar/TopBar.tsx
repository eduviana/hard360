import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const TopBar = () => {
  return (
    <div className="w-full bg-black text-textDark">
      <div className="custom-container flex items-center justify-end py-2">
        <div className="flex items-start gap-8 text-white">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
