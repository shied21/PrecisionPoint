import React from "react";
import { FaFacebook, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";
import { PhoneIcon } from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer w-full overflow-hidden">
      {/* Contact Information Section */}
      <div className="footer-top w-full">
        <div className="footer-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.7rem] lg:gap-20 ">
            {/* Question/Contact Column + Address */}
            <div className="text-center md:text-left">
              <h2 className="footer-title text-2xl md:text-3xl">
                Have a <span className="footer-highlight">Question?</span>
              </h2>
              <p className="footer-text text-sm md:text-base mb-4">
                Contact us whenever you have any questions.
                <br />
                We are ready to answer them!
              </p>
              <h3 className="footer-highlight text-lg font-semibold mb-2">
                Address
              </h3>
              <a
                href="https://www.google.com/maps/place/Precision+Point,+Inc."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-address text-sm md:text-base block text-center md:text-left"
              >
                W70, Mandaue North Central, Castilles Compound, ML Quezon St.,
                Cabancalan, Mandaue City, Cebu, Philippines 6014
              </a>
            </div>

            {/* Contact Details Column */}
            <div className="text-center md:text-left">
              <h3 className="footer-highlight text-lg font-semibold mb-2">
                Email
              </h3>
              <a
                href="mailto:info@precisionpoint.ph"
                className="footer-link text-sm md:text-base block mb-4"
              >
                info@precisionpoint.ph
              </a>
              <h3 className="footer-highlight text-lg font-semibold mb-2 flex items-center justify-center md:justify-start">
                Phone <PhoneIcon className="ml-1 h-4 w-4" />
              </h3>
              <div className="space-y-1">
                <a
                  href="tel:+639228589800"
                  className="footer-link text-sm md:text-base"
                >
                  0922 - 858 - 9800
                </a>
                <a
                  href="tel:+6332238034"
                  className="footer-link text-sm md:text-base"
                >
                  +63 32 - 238 - 0034
                </a>
              </div>
            </div>

            {/* Follow Us Column Only */}
            <div className="text-center md:text-left">
              <h3 className="footer-highlight text-lg font-semibold mb-2">
                Follow us
              </h3>
              <div className="flex flex-col space-y-2 mb-4">
                {[
                  {
                    icon: <FaFacebookMessenger />,
                    name: "/PrecisionPointInc",
                    href: "https://www.facebook.com/messages/t/205141166298206",
                    class: "",
                  },
                  {
                    icon: <FaFacebook />,
                    name: "/PrecisionPointInc",
                    href: "https://www.facebook.com/PrecisionPointIncorporated",
                    class: "facebook",
                  },
                  {
                    icon: <FaLinkedin />,
                    name: "/PrecisionPointInc",
                    href: "https://www.linkedin.com/login",
                    class: "linkedin",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center md:justify-start"
                  >
                    <div className={`social-icon ${social.class}`}>
                      {social.icon}
                    </div>
                    <span className="text-sm text-white">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom w-full">
        <div className="footer-container max-w-7xl mx-auto px-4">
          <div className="footer-bottom-text text-xs md:text-sm">
            Powered by{" "}
            <a
              href="https://mytsoftdevsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MYT SoftDev Solutions, Inc.
            </a>
          </div>
          <div className="footer-bottom-text text-xs md:text-sm">
            Precision Point, Inc. All Rights Reserved {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
