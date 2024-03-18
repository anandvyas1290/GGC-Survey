import React from "react";

import SocialMedias from "./SocialMedias";

export default function StatusBar(props) {
    return (
        <div className="hidden sm:block">
            <div className="px-0 pt-3 pb-2 sm:px-4">
                <div className="flex items-center justify-between max-w-full">
                    <SocialMedias />
                </div>
            </div>
        </div>
    );
}
