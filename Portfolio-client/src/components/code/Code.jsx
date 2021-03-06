import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVisit } from '../../store/visit/Visit.actions'
import styles from '../../styles/Code.module.css';
import '../../styles/Animations/animations.css';
import Mati from '../../assets/img/mati.png'
import tecla from '../../assets/audio/button-click.mp3'

const Code = () => {
    var aux = [];
    var codes = ["432765","897654","532176"];
    const history = useHistory();

    const [numberCode, setNumberCode] = useState('');
    
    const handleChange = (e) => setNumberCode(numberCode.concat(e));

    const handleErase = () => setNumberCode(numberCode.substring(0,numberCode.length -1));
        
    const handleEnter = () => numberCode === "432765" || numberCode === "897654" || numberCode === "532176" ? history.push('/home') : alert("INTENTA DE NUEVO");
    
    const [hidden, setHidden] = useState(false)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: ''
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {   
        e.preventDefault()
        if(!input.name){
            setErrors({
                name: 'name is required!!'
            })
        }else{
           setInput({
            ...input,
            [e.target.name]: aux.push(input.name)
            }) 
            setHidden(true) 
            var storage = localStorage.getItem('name')
            if(storage){
                localStorage.clear()
                localStorage.setItem('name',input.name)
            }else{
               return localStorage.setItem('name',input.name)
            }
            
        }  
    }

    const validate = (input) => {
        let errors = {};
        if (!input.name) {
            errors.name = 'name is required!!';
        } 
        return errors;
    };
    const [codeRandom,setCodeRandom] = useState('')
    
    const code = () =>{ 
        var aleatorio = Math.random() * codes.length
        var aux = Math.floor(aleatorio)
        setCodeRandom(codes[aux])
    }

    // const [play, setPlay] = useState(false)
    // const [pause, setPause] = useState(true)	
    

    return (
        <div className={styles.container}>
            <div className={hidden ? styles.hiddenCode : styles.displayName}>
            <img className='expandOpen' src={Mati} alt='myphoto'/>
                <form onSubmit={handleSubmit} >
                    <h2 className='pullUp'>Please insert your name to continue</h2>
                    <input autoComplete='off' className={styles.inputName} name='name' type='text' value={input.name} onChange={handleInputChange}/>
                    {errors.name && errors.name === 'name is required!!' ? <p className='hatch'>{errors.name}</p> : <p></p>} 
                    <button type='submit' onClick={code}>Send</button>
                </form>
            </div>
            <div className={hidden ? styles.display : styles.hiddenCode}>
                <h2>your code is {codeRandom}</h2>
                <input disabled value={numberCode} className={styles.inputCode}/>
            </div>
            <div className={hidden ? styles.buttons : styles.hiddenCode}>
                <ul className='slideRight'>
                    <li onClick={()=>handleChange("1")}>1</li>
                    <li onClick={()=>handleChange("2")}>2</li>
                    <li onClick={()=>handleChange("3")}>3</li>   
                </ul>
                <ul className='slideRight'>
                    <li onClick={()=>handleChange("4")}>4</li>
                    <li onClick={()=>handleChange("5")}>5</li>
                    <li onClick={()=>handleChange("6")}>6</li>  
                </ul>
                <ul className='slideRight'>
                    <li onClick={()=>handleChange("7")}>7</li>
                    <li onClick={()=>handleChange("8")}>8</li>
                    <li onClick={()=>handleChange("9")}>9</li>  
                </ul>
                <ul className='slideRight'>
                    <li onClick={handleErase}>erase</li>
                    <li onClick={()=>handleChange("0")}>0</li>
                    <li onClick={()=>handleEnter()} >enter</li>   
                </ul>  
            </div>              
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        GET_VISIT: (payload) => dispatch(getVisit(payload))
    }
}

export default connect(mapDispatchToProps)(Code);