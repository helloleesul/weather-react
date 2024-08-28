import { Link } from "react-router-dom";

import { NAVIGATION } from "@/constants/navigation.ts";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-3">
        {NAVIGATION.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className="inline-block text-white bg-opacity-30 bg-white py-2 px-4 rounded-lg backdrop-blur font-medium"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
