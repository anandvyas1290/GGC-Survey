import React from "react";

import { socialMedias } from "../../db/dummy";

export default function SocialMedias() {
    return (
        <div className="grid grid-cols-4 justify-center items-center sm:justify-normal gap-3 sm:!pt-3 !pt-0 p-1 !backdrop-blur">
            {socialMedias?.map((item, i) => (
                <figure
                    className="bg-white rounded "
                    key={i}
                    onClick={() =>
                        window.open(
                            item?.link,
                            "_blank",
                            "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                        )
                    }
                >
                    <img
                        src={item?.icon}
                        alt={item?.name}
                        className={`w-10 lg:w-5 p-1 cursor-pointer opacity-50 hover:opacity-100 hover:text-primary`}
                    />
                </figure>
            ))}
        </div>
    );
}
