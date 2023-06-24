import React, { useState } from "react";

function Login (){

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginSubmit, setLoginSubmit] = useState('');

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginSubmit = (e) => {
   
    e.preventDefault();
    const form = document.querySelector("form");
    if(userName === 'admin' && password === 'admin'){
      setLoginSubmit(`로그인성공!! ${userName}님 반갑습니다.`);
      form.style.display = "none";
    }
  };

  return (
  <>
    <form onSubmit={handleLoginSubmit}>
      ID :  <input type="text" value={userName} placeholder="아이디" name="userName" id="password" onChange={handleUserName}/>
      PW : <input type="password" name="password" placeholder="비밀번호" id="password" value={password} onChange={handlePassword}/>
      <button type="submit">LOGIN</button>
    </form>

    <h1>{loginSubmit}</h1>
  </>
  );
}

export default Login; 