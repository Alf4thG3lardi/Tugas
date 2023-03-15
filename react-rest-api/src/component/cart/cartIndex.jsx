import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const CartIndex = () => {
    const { checkout, inc, dec, formValues4, formValues5, Counter} = useContext(SkillContext);
    useEffect(() => {
        
    }, []);
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            idbarang
                        </th>
                        <th scope="col" className="px-6 py-3">
                            barang
                        </th>
                        <th scope="col" className="px-6 py-3">
                            jumlah
                        </th>
                        <th scope="col" className="px-6 py-3">
                            harga
                        </th>
                        <th scope="col" className="px-6 py-3">
                            idpelanggan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            pelanggan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            alamat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">{formValues5.idbarang}</td>
                        <td className="px-6 py-4">{formValues5.barang}</td>
                        <td className="px-6 py-4">
                            <button onClick={() => dec()} className="px-4 py-2 text-black rounded-md">
                                -
                            </button>
                            {Counter}
                            <button onClick={() => inc()} className="px-4 py-2 text-black rounded-md">
                                +
                            </button>
                            </td>
                        <td className="px-6 py-4">{ Counter * formValues5.harga}</td>
                        <td className="px-6 py-4">{formValues4.idpelanggan}</td>
                        <td className="px-6 py-4">{formValues4.pelanggan}</td>
                        <td className="px-6 py-4">{formValues4.alamat}</td>

                    </tr>
                </tbody>
            </table>
            <button onClick={checkout} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-whitebg-green-500 hover:bg-green-700 text-white rounded-md">
                Checkout
            </button>
        </div>
    );

}