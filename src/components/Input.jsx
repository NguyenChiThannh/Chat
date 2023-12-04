import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { Box } from '@mui/material'


function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something ...'/>
      <div className="send">
        <input type="file" id="file" style={{ display:'none' }}/>
        <label htmlFor="file">
          <Box
            sx={{ display:'flex', gap:1, justifyContent: 'center' }}
          >
            <AttachFileIcon/>
            <AddPhotoAlternateIcon/>
          </Box>
        </label>
        <SendIcon sx={{ fontSize:'22px' }}/>
      </div>
    </div>
  )
}

export default Input