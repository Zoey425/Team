import React from 'react';
import useForm from '../hooks/useForm';

export default function LoginForm() {
  const { values, handleChanges, resetForm } = useForm({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>사용자명 : </label>
        <input type="text" name="username" value={values.username} onChange={handleChanges} />
      </div>
      <div>
        <label>비밀번호 : </label>
        <input type="password" name="password" value={values.password} onChange={handleChanges} />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}
