import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        // process.env.CHATAPELLA_APP_CHATENGINE_PROJECT_ID,
        "b3d9ce9e-8380-4412-8e0e-24aa04632083",
        props.user.username,
        props.user.secret);
    return (
        <div className="background" style={{ height: "400px" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
        </div>)
};
export default ChatsPage;