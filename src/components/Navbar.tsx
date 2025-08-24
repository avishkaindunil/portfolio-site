import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[70%] backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl shadow-lg px-8 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Avishka Indunil</h1>
      <ul className="flex space-x-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="hover:text-blue-600 hover:backdrop-brightness-110 transition-all duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
