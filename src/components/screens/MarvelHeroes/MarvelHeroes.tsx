import {useEffect, useState} from "react";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";

export const MarvelHeroes = () => {
    const [heros, setHeros] = useState<IHeroes[]>([]);
    
    const handleGetHeroesDc = () => {
        const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
        setHeros(result);
    }; 

    useEffect(() => {
        handleGetHeroesDc();
    }, []);

    return (
    <ListHeroes heroes={heros} title="Heroes Marvel"/>
    );
};
