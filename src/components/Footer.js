const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="#privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms-of-service" className="hover:text-gray-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
