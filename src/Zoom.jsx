import { JitsiMeeting } from "@jitsi/react-sdk";

export default function Zoom() {
  return (
    // <div>
      <JitsiMeeting
        roomName={"joel room"}
        getIFrameRef={(node) => (node.style.width = "800px", node.style.height = "400px")}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        userInfo = {{
        displayName: 'Joel Vegas :)'
    }}
      />
    // </div>
  );
}
