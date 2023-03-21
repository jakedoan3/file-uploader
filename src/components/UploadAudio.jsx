import React, { useState, useEffect } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid'
// import DragDropFiles from './DragDropFiles'

const UploadAudio = () => {
    const [audioUpload, setAudioUpload] = useState(null)
    const [audioList, setAudioList] = useState([])
    
    const audioListRef = ref(storage, 'audio/')
    const upload = () => {
        if (audioUpload == null) return;
        const audioRef = ref(storage, `audio/${audioUpload.name + v4() }`)
        uploadBytes(audioRef, audioUpload).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                setAudioList((prev)=>[...prev, url])
            })
            
        })
    }

    useEffect(()=>{
        listAll(audioListRef).then((res)=> {
            res.items.forEach((item) =>{
                getDownloadURL(item).then((url)=>{
                    setAudioList((prev)=> [...prev, url])
                })
            })
        })
    }, [audioListRef])

    

  return (
    <div className='upload'>
        <input 
        type='file'
        // title=''
        onChange={(e) => {setAudioUpload(e.target.files[0])}}
        />
        {/* <DragDropFiles /> */}
        <button onClick={upload}>Upload Audio</button>
        
        {audioList.map((url)=>{
            //reformat for audio later
            return <img src={url} alt="content"/>
        })}
    </div>
  )
}

export default UploadAudio