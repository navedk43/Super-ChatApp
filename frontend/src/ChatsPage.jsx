import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
             <PrettyChatWindow
                 projectId='039ecc58-aa5d-4e81-ab73-96952f465d07'
                 username={props.user.username}
                 secret={props.user.secret}
                 style={{ height: '100%' }}
             />
        </div>
    )
}


// 
export default ChatsPage




/* code for React chat Engine Advanced */
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
//const ChatsPage = (props) => {
    //     const chatprops = useMultiChatLogic(
    //         '039ecc58-aa5d-4e81-ab73-96952f465d07', 
    //         props.user.username, 
    //         props.user.secret
    //     );
    //     return (
    //         <div style={{ height: '100vh' }}>
    //             <MultiChatSocket {...chatprops} />
    //             <MultiChatWindow {...chatprops} style={{ height: '100%' }} />
    //         </div>
    //     )
    // }
    