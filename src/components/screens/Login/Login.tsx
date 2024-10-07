import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { setLogin } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {values, handleChange} = useForm({
        user:"",
        password:"",
    });
    const {user, password} = values;
    const dispatch = useAppDispatch();
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await fetch("/user.json");
        const userData = await response.json();
        const userFound = userData.users.find(
            (u: {username:string; password:string}) =>
            u.username === user && u.password === password
        );
        if(userFound){
            dispatch(setLogin(user));
            navigate('/');
        } else{
            alert("Usuario o contraseña no encontrado");
        }
    };
    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>
                    <span 
                    style={{fontSize: "10vh"}}
                    className="material-symbols-outlined">
                    person
                    </span>
                <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                        onChange={handleChange} 
                        name="user"
                        value={user}
                        type="text" 
                        placeholder="Usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type={showPass ? "text" : "password"} 
                        placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Check // prettier-ignore
                    type="switch"
                    onChange={()=> {
                        setShowPass(!showPass);
                    }}
                    id="custom-switch"
                    label="Mostrar contraseña"
                    />
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button type="submit" variant="primary">Ingresar</Button>{' '}
                    </div>
                </Form>
            </div>
        </div>
)};