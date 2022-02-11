import logo from './logo.svg';
import './App.css';
import Allchats from './components/Allchats';
import Messagesarea from './components/Messagesarea';
import User from './components/User';
import { useState } from 'react';

function App() {
  const[chatpage , setChatpage] = useState(true)
  console.log(chatpage);
  if(chatpage){
    return (
      <div className='app '>
        <div className='allchats'>
          <div className=' userprofilearea'>
              <div className='d-flex justify-content-center align-items-center'>
                  <div className=' d-flex justify-content-center mx-3'>
                      <div className='profileimage'></div>
                  </div>
                  <h3 className=''>User</h3>
              </div>
              <div className='w-75 mx-auto'>
                  <input className='w-100 px-3 serchuser'/>
              </div>
          </div>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
            
        </div>
        <div className='messagesarea blank'><h3>Click on the profile to start chat</h3></div>
      </div>
    );
  }else{
    return (
      <div className='app'>
        <div className='allchats'>
          <div className=' userprofilearea'>
              <div className='d-flex justify-content-center align-items-center'>
                  <div className=' d-flex justify-content-center mx-3'>
                      <div className='profileimage'></div>
                  </div>
                  <h3 className=''>User</h3>
              </div>
              <div className='w-75 mx-auto'>
                  <input className='w-100 px-3 serchuser'/>
              </div>
          </div>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
          <button className='userbutton' onClick={()=>setChatpage(false)}><User /></button>
        </div>
        <div className='messagesarea index'>
          <div className=' userprofilearea d-flex align-items-center'>
          <button className='backbutton' onClick={()=>setChatpage(true)}><img  src='https://cdn-icons-png.flaticon.com/512/93/93634.png'/></button>
              <div className='d-flex justify-content-center align-items-center py-3 '>
                  <div className=' d-flex justify-content-center mx-3'>
                      <div className='profileimage'></div>
                  </div>
                  <h3 className=''>User</h3>
              </div>
          </div>
          <div className='messagesection'></div>
          <div className='mx-auto sentmessage d-flex' >
            <input className=' px-3 serchuser inputmesage'/>
            <div className='senddiv'>
              <button>Sent</button>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
// <button onclick={()=>setchatpage(false)}><User /></button>

export default App;
