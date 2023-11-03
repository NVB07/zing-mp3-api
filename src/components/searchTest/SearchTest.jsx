"use client";
import { useState } from "react";
import ReactJson from "react-json-view";
import { BsSearch } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";

import reSearch from "@/services/reSearch";

import style from "./searchTest.module.scss";

const SearchTest = () => {
    const [keySearch, setKeySearch] = useState("");
    const [json, setJson] = useState({ NOTE: "Please enter search information in the box" });
    const [loading, setLoading] = useState(null);

    const enterKeyDown = (e) => {
        if (!loading && e.key === "Enter" && keySearch.trim() !== "") {
            responseData(keySearch);
        }
    };
    const responseData = async (search) => {
        try {
            setLoading(true);
            const result = await reSearch(search);
            if (result) {
                setJson(result);
                setLoading(false);
            }
        } catch (error) {
            return;
        }
    };
    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.wrapper_input}>
                    <input
                        className={style.input_search}
                        type="text"
                        placeholder="search song, playlist, ..."
                        onChange={(e) => {
                            setKeySearch(e.target.value);
                        }}
                        onKeyDown={enterKeyDown}
                    />
                    <button
                        className={style.button_search}
                        type="button"
                        onClick={async () => {
                            if (!loading && keySearch.trim() !== "") {
                                await responseData(keySearch);
                            }
                        }}
                    >
                        {loading ? <BiLoader className={style.loading} /> : <BsSearch />}
                    </button>
                </div>
                <div className={style.json_view}>
                    <ReactJson name={false} src={json} theme={"monokai"} collapsed={2} enableClipboard={false} quotesOnKeys={false} displayDataTypes={false} />
                </div>
            </div>
        </div>
    );
};

export default SearchTest;
