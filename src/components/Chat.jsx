import VideocamIcon from '@mui/icons-material/Videocam'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Messages from './Messages'
import Input from './Input'
function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <VideocamIcon />
          <PersonAddAlt1Icon />
          <MoreHorizIcon />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat