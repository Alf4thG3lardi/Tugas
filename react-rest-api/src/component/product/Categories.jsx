import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const Categories = () => {
    const {Cats, getCats} = useContext(SkillContext);
    useEffect(() => {
        getCats();
    }, []);
    return ( 
        <div className="mt-12">
            <div className="relative overflow-x-auto">
                {
                    Cats.forEach(cat => {
                        <button> {cat} </button>
                    })
                }
            </div>
        </div>
    )
}