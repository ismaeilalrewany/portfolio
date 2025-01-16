export const Nav = () => {
  return (
    <nav className="fixed right-4 top-[50%] translate-y-[-50%] z-index-1">
      <ul className="list-none">
        <li className="cursor-pointer mb-2 text-yellow-500">Hero</li>
        <li className="cursor-pointer mb-2 text-yellow-500">Skills</li>
        <li className="cursor-pointer mb-2 text-yellow-500">Projects</li>
        <li className="cursor-pointer mb-2 text-yellow-500">Footer</li>
      </ul>
    </nav>
  )
}