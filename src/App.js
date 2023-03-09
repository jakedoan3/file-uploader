import './App.css';
import DragDropFiles from './components/DragDropFiles'; 
import UploadAudio from './components/UploadAudio';


//TO-DO
  //merge drag and drop into upload component
  //authentication+signup/login components

const App = () => {
  return(
    <div className='container'>
      {/* <DragDropFiles /> */}
      <UploadAudio />
    </div>
  )
}

export default App;
