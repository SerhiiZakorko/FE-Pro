import { useState } from "react"; 
function Switcher(){
    const [content, setContent] = useState('Главная')
    const contents = {
        main: "Это текст главной страницы",
        menu: "Меню сайта: 1)... 2)... 3)...",
        about: "О нас: Разработано на курсах ТельРан"
    }
    const changeHandler = (event) => {setContent(contents[event.target.value])}
    return(
        <>
        <h2>{content}</h2>
        <button value = 'main' onClick={changeHandler}>Главная</button>
        <button value = 'menu' onClick={changeHandler}>Меню</button>
        <button value = 'about' onClick={changeHandler}>О нас</button>
        </>
    )
}
export default Switcher