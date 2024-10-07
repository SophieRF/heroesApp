import { IHeroes } from "../../../types/IHeroes";
import { useState, useEffect } from "react";
import { heroesData } from "../../../data/heroes";
import { useForm } from "../../../hooks/useForm";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from './Search.module.css';

export const Search = () => {
    const {values, handleChange} = useForm({
        search:"",
    });
    const {search} = values;

    const [heros, setHeros] = useState<IHeroes[]>([]);
    useEffect(()=> {
        const result = heroesData.filter((h)=> h.superhero.toLowerCase().trim().includes(search)
    );
    setHeros(result);
    }, [search]);

    return (
    <div className={styles.containerSearch}>
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>Ingrese Heroe</InputGroup.Text>
                <Form.Control onChange={handleChange} type="text" name="search" />
            </InputGroup>
        </div>
        <div className={styles.containerListHeros}>
            {heros.length > 0 ? (
                <>
                {heros.map((hero) => (
                    <div key={hero.id} style={{width: "80%"}}>
                        <CardHero hero={hero}/>
                    </div>
                ))}
                </>
            ) : (
                <div>
                    <h2>No coincide la búsqueda</h2>
                </div>
            )}
        </div>
    </div>
    );
};
