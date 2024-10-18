const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-slate-900 text-neutral-100 p-4">
      <div className="pb-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-3xl font-bold tracking-wide">AwesomeCss</div>
        <nav>
          <ul className="flex flex-wrap space-x-6 text-sm tracking-wide">
            <li>
              <a
                href="https://github.com/harshit2608/awesome-css"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 hover:underline transition duration-200 ease-in-out"
              >
                Source Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/harshit2608"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 hover:underline transition duration-200 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="https://harshit2608.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 hover:underline transition duration-200 ease-in-out"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-slate-300 hover:underline transition duration-200 ease-in-out"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-400 py-2" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-2 md:space-y-0">
        <a
          href="https://github.com/harshit2608/awesome-css/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover:underline hover:text-slate-300 transition duration-200 ease-in-out"
        >
          License
        </a>
        <div>&copy; 2024 Awesome Css. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
