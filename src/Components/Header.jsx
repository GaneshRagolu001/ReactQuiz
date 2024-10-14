import image from '../assets/quiz-logo.png';
export default function Header(){
    return <header> 
        <img src={image} alt="logo" />
        <h1>REACT QUIZ</h1>
    </header>
}