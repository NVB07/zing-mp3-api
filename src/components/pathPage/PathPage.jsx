"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import style from "./pathPage.module.scss";

const PathPage = () => {
    const pathName = usePathname().split("/").slice(1);

    const makeHref = (path) => {
        let newPath = [];
        let nomalPath = [];
        let curString = "";
        path.map((item) => {
            if (item === "") {
                nomalPath.push("");
            } else {
                nomalPath.push("/" + item);
            }
            curString += "/" + item;
            newPath.push(curString);
        });
        return { newPath, nomalPath };
    };
    const path = makeHref(pathName);

    return (
        <div className={style.path_page}>
            {path.newPath.map((item, index) => {
                return (
                    <span key={index}>
                        <Link href={item}>{path.nomalPath[index]}</Link>
                    </span>
                );
            })}
        </div>
    );
};

export default PathPage;
