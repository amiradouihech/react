import {useState} from 'react';
import React from 'react'

function Friends() {
    const [friendsList,setFriendsList]=useState(['adam','ahmed','ridtha']);
  return (
   <>
   <h1>
    this is your friends list
   </h1>
   {friendsList.map((friend)=>{
    return(<>
    <h2>{friend}</h2>
    <hr/>
    </>
    )
   }
)}

   </>
  )
}

export default Friends