import React, {useCallback, useMemo, useRef, useState} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const {username, email} = inputs;
  const onChange = useCallback(e => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name] : value
      });
    }, [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : true
    }
  ]);
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    // setUsers([...users, user]); // spread 연산자를 이용한 추가 방법
    setUsers(users.concat(user)); // concat 햠수를 이용한 연산법 방

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
    }, [users, username, email]
  );

  const onRemove = useCallback(id => {
      setUsers(users.filter(user => user.id !== id));
    }, [users]
  );

  const onToggle = useCallback(id => {
    setUsers(
        users.map(user =>
            user.id === id ? {...user, active : !user.active} : user
        )
    );
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
      </>
  );
}

export default App;
