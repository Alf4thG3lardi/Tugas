import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const ProductIndex = () => {
    const { cartProduk, products, getProducts, Cats, getCats, deleteProduct} = useContext(SkillContext);
    useEffect(() => {
        getCats();
        getProducts();
    }, []);
    return ( 
        // console.log(products)
        <div className="mt-12">
        <div className="flex justify-end m-2 p-2">
            <Link to="/product/create" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                New
            </Link>
        </div>        
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => {
                        return (
                            <tr key={prod.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                {prod.title}
                            </td>
                            <td className="px-6 py-4">
                                {prod.description}
                            </td>
                            <td className="px-6 py-4">
                                {prod.price}
                            </td>
                            <td className="px-6 py-4" >
                                {Cats.map((cat) => {
                                    if (cat.id === prod.category) {
                                        return cat.categories;
                                    }
                                })}
                            </td>
                            <td className="px-6 py-4 space-x-2">
                                <Link to={`/product/${prod.id}/edit`} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">Edit</Link>
                                <button onClick={() => deleteProduct(prod.id)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">
                                    Delete
                                </button>
                                <button onClick={() => cartProduk(prod.id)} className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-black rounded-md">
                                    Cart
                                </button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    </div>
    )
}