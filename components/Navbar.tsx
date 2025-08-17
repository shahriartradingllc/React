"use client"

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shahriyar Trading LLC</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  )
}
