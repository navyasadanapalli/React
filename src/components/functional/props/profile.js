import React from "react";
import TextComponent from "./textcomponent";

function Profile() {
    return (
        <div>
            <TextComponent title="hello">
                <div>
                    <h3>hello world</h3>
                    <h5>hello user</h5>
                </div>
            </TextComponent>
        </div>
    );
}

export default Profile;
