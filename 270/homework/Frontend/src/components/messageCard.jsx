import { IoMdContact } from "react-icons/io";

function MessageCard(props) {
  return (
    <div className='grandpa-card'>
        <div ><IoMdContact className='faceIcon'/></div>
        <div className='parent-card'>
            <b>{props.username}</b>
            <div className='child-card'>
                {props.message}
            </div>
        </div>
    </div>
  )
}

export default MessageCard