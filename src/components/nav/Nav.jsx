import Link from "next/link";
import style from "./nav.module.scss";
const Nav = ({ name, href = "/", path = "/" }) => {
    return (
        <div className={`${style.link_item} ${path.split("/")[1] === href.split("/")[1] ? `${style.active}` : ""}`}>
            <Link href={href} className={style.nav_link}>
                {name}
            </Link>
        </div>
    );
};

export default Nav;
