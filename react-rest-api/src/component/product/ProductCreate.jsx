import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";

export const ProductCreate = () => {
    const { getCats, Cats, formValues2, onChange2, storeProduct, errors, setErrors} = useContext(SkillContext);
    useEffect(() => {
        getCats();
        setErrors({});
    }, []);
    return (
    <div className="mt-12"> 
        <form onSubmit={storeProduct} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <div className="space-y-6">
                <div className="mb-4">
                    <label htmlFor="title" className="block md-2 text-sm font-medium">Title</label>
                    <input name="title" value={formValues2["title"]} onChange={onChange2} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
                    {errors.title && <span className="text-sm text-red-400">{errors.title[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block md-2 text-sm font-medium">Description</label>
                    <input name="description" value={formValues2["description"]} onChange={onChange2} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
                    {errors.description && <span className="text-sm text-red-400">{errors.description[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block md-2 text-sm font-medium">Category</label>
                    <select name="category" id="" onChange={onChange2}>
                        {Cats.map(cat => {
                            return <option key={cat.id} value={cat.id}>{cat.categories}</option>
                        })}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block md-2 text-sm font-medium">Price</label>
                    <input name="price" value={formValues2["price"]} onChange={onChange2} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
                    {errors.price && <span className="text-sm text-red-400">{errors.price[0]}</span>}
                </div>
                <div className="mb-4">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                        Store
                    </button>
                </div> 
            </div>
        </form>
    </div>);
}