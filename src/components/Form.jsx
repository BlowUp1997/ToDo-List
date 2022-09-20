import React from "react";

export default function Form({value, onChange, onSubmit}){

    return<div>
        <form onSubmit= {onSubmit} //입력하고 나서 텍스트가 입력 창에 계속 남아있는 것을 없애줌
      >
        <input 
            value1={value} 
            onChange={onChange} //빈칸(target)에 값(value) 채울 수 있게 해줌
            required // 입력란이 채워져 있어야만 제출이 가능하게 제한
        />
        <input type="submit" />
      </form>
    </div>
}
