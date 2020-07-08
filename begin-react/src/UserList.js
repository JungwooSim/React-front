import React, {useEffect} from "react";

function User({user, onRemove, onToggle}) {
    /*
    deps 에 특정 값을 넣게 되면, 컴포넌트가 처음 마운트 될 때 호출 되고, 지정한 값이 바뀔 때에도 호출 된다.
    특정 값이 있다면 언마운트시에도 호출되고 값이 바뀌기 직전에도 호출 된다.
     */
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        console.log(user);
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
            console.log(user);
        };
    }, [user]) // useEffect 안에서 사용하는 상태나, props가 있다면, useEffect 의 deps 에 넣어주어야 한다.(규칙)

    return (
        <div>
            <b
                style={{
                    cursor: 'point',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map((user,index) => (
                <User
                    user={user}
                    key={index}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default UserList;
