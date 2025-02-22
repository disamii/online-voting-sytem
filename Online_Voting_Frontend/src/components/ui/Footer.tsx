export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300 p-8 px-20 py-[1rem] text-white rounded-tr-[20%] text-2xl ">
    <div className="flex gap-3 justify-between items-center">
      <div>
        <img src="src/assets/footer-removebg-preview.png" alt="Footer Logo" width={300} />
      </div>
      <ul className=" grid grid-cols-3  text-lg">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </li>
      </ul>
    </div>
    <div className="text-center text-sm opacity-80">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
