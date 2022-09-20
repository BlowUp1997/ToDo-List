import React from "react";
import List from "./List";

export default function Lists({todo, onRemove, onChange, setTodo}){
    //useEffect(()=>{
    //    console.log(todo);}, [todo]); //뒤에 배열은 의존성 배열로 useEffect는 의존성 배열에 수정이 가해지면 람다 함수안에 내용을 실행    
    return (
    <div>
        {todo.map((item) => ( //map함수를 쓰면 key(고유값)를 지정해줘야 함. 이걸 안해주면 todo안에 값들의 상태가 전체가 다 바뀌었다고 컴퓨터가 생각함
        <List 
            todo = {todo}
            key={item.id} 
            value={item.value}
            id = {item.id}
            completed = {item.completed}
            onRemove = {onRemove}
            onChange = {onChange}
            setTodo = {setTodo}
        />
      ))}
    </div>
    );
}