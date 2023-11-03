"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./header.module.scss";

import Nav from "../nav/Nav";

const Header = () => {
    const pathName = usePathname();

    return (
        <header className={style.header}>
            <Link href="/" className={style.brand_logo}>
                <div className={style.img_wrapper}>
                    <img src="https://static-zmp3.zadn.vn/skins/common/logo600.png" alt="brand logo" />
                </div>
                <h3>Zing API</h3>
            </Link>
            <div className={style.navigation}>
                <ul className={style.navigation_wrapper}>
                    <li>
                        <Nav path={pathName} name="Home" href="/" />
                    </li>
                    <li>
                        <Nav path={pathName} name="API" href="/api" />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
