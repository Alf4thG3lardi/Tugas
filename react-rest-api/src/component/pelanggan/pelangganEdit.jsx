import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const PelangganEdit = () => {
    const { updatePelanggan, getPelanggan, formValues3, onChange3, errors, setErrors} = useContext(SkillContext);
    let {id} = useParams();
    useEffect(() => {
        getPelanggan(id);
        setErrors({})
    }, []);
    return (
    <div className="mt-12"> 
        <form onSubmit={updatePelanggan} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <div className="space-y-6">
                <div className="mb-4">
                    <label htmlFor="pelanggan" className="block md-2 text-sm font-medium">Pelanggan</label>
                    <input name="pelanggan" value={formValues3["pelanggan"]} onChange={onChange3} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
                    {errors.pelanggan && <span className="text-sm text-red-400">{errors.pelanggan[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="alamat" className="block md-2 text-sm font-medium">Alamat</label>
                    <input name="alamat" value={formValues3["alamat"]} onChange={onChange3} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
                    {errors.alamat && <span className="text-sm text-red-400">{errors.alamat[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="telp" className="block md-2 text-sm font-medium">Telp</label>
                    <input name="telp" value={formValues3["telp"]} onChange={onChange3} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
                    {errors.telp && <span className="text-sm text-red-400">{errors.telp[0]}</span>}
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