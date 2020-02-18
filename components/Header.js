import Link from 'next/link';
import { useRouter } from "next/router";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  const router = useRouter();
  
  const activeClassName = "text-blue-500";
  const LinkClassName = "text-black text-xl hover:text-blue-500";

  const getClassNames = (route) => {
    if (router.pathname === route) return `${LinkClassName} ${activeClassName}`;
    return LinkClassName;
  }

  return (
    <div>
      <Link href="/">
        <a className={getClassNames("/")} style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a className={getClassNames("/about")} style={linkStyle}>About</a>
      </Link>
    </div>
  )
};

export default Header;