import Lists from "./components/Lists";
import {useState} from "react";
import Form from "./components/Form";
import styles from "./App.module.css";
import "./index.css";

function App() {
  //국룰 : useState -> 변수선언 -> useEffect -> 함수선언
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const onChange =(event)=>{setValue(event.target.value)}
  const onSubmit = (event)=> {
    event.preventDefault(); //새로고침 했을 때 데이터가 날라가는 것을 막아줌. 이걸 안할거면 local 저장이든 서버든 저장소가 필요함
    setTodo([...todo,  {value: value, id:Date.now(), completed:false}])
    setValue("");}

  const onRemove = (targetId) => {
    const deletedTodo = todo.filter((todo)=> {return todo.id !== targetId})
    setTodo(deletedTodo)
  }


  return (
    <div>
     <div className={styles.header_box}>
      <img className={styles.todoImg}
           src={"/to-do-list.png"}
           alt="headImg"/>
        <Lists
        todo = {todo}
        onRemove = {onRemove}
        onChange = {onChange}
        setTodo = {setTodo}
        />
        <Form 
        setTodo={setTodo} 
        setValue={setValue} 
        todo={todo} 
        value = {value}
        onChange = {onChange}
        onSubmit = {onSubmit}/>
     </div>
    </div>
  );
}

export default App;
