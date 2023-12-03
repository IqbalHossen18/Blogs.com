import React, { useState } from 'react'

const Signup = () => {
    const [credintails, setcredintails] = useState({name:'', email:'', password:''});
    const {name , email, password} = credintails;
    const handlechange=(e)=>{
          setcredintails({...credintails, [e.target.name] : e.target.value})
    }
    const handlesubmit= async(e)=>{
        // const host = 'http://localhost:3000';
        const host = 'https://blogs-com-timu.vercel.app'
         e.preventDefault()
         try {
            let res = await fetch(`${host}/api/signup`,{
                method:'POST',
                headers:{
                    "Content-Type": 'application/json'
                },
                body:JSON.stringify({name, email, password})
            })
           if(res.ok){
            let json = await res.json()
            alert('user added')
           }
            
         } catch (error) {
            console.error(error.message)
         }
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <label htmlFor="name">Name:</label>
                <input value={name} onChange={handlechange} type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input value={email} onChange={handlechange} type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input value={password} onChange={handlechange} type="password" id="password" name="password" required />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Signup