import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
    name: "",
    slug: "" 
}

const initialForm2 = {
    title: "",
    description: "",
    category: "",
    price: ""
}

const initialForm3 = {
    pelanggan: "",
    alamat: "",
    telp: "",
}

const initialForm4 = {
    idpelanggan: "",
    pelanggan: "",
    alamat: "",
}

const initialForm5 = {
    idbarang: "",
    harga: "",
    barang: "",
}

export const SkillProvider = ({children}) => {
    const [formValues, setFormValues] = useState(initialForm)
    const [formValues2, setFormValues2] = useState(initialForm2)
    const [formValues3, setFormValues3] = useState(initialForm3)
    const [formValues4, setFormValues4] = useState(initialForm4)
    const [formValues5, setFormValues5] = useState(initialForm5)
    
    // const [formCat, setformCat] = useState(initialCat);

    const [Cats, setCats] = useState([]);
    const [Counter, setCounter] = useState(1);

    // const [Cat, setCat] = useState([]);
    const [pelanggans, setpelanggans] = useState([]);
    const [pelanggan, setpelanggan] = useState([]);

    const [products, setproducts] = useState([]);
    const [product, setproduct] = useState([]);

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }
    
    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    }


    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id );
        const apiSkill = response.data.data;
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.Skillname,
            slug: apiSkill.url, 
        })
    }

    const storeSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.post("skills", formValues)
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const updateSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.put("skills/" + skill.id, formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const deleteSkill = async (id) => {
        if (!window.confirm("u sure?")) {
            return;
        }
        await axios.delete("skills/" + id);
        getSkills();
    }

// Product Section

    const getProducts = async () => {
        const apiProducts = await axios.get("product");
        setproducts(apiProducts.data)
    }
    const onChange2 = (e) => {
        const {name, value} = e.target;
        setFormValues2({...formValues2, [name]: value});
    }
    const getCats = async () => {
        const apiCat = await axios.get("categories");
        setCats(apiCat.data)
    }
    const storeProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("product", formValues2)
            setFormValues2(initialForm2);
            navigate("/product");
        } catch(e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const getProduct = async (id) => {
        const response = await axios.get("product/" + id);
        const apiProduct = response.data[0];
        setproduct(apiProduct);
        setFormValues2({
            title: apiProduct.title,
            description: apiProduct.description,
            price: apiProduct.price,
            category: apiProduct.category
        })
    }
    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.put("product/" + product.id, formValues2);
            setFormValues2(initialForm2);
            navigate("/product");
        } catch(e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const deleteProduct = async (id) => {
        if (!window.confirm("u sure?")) {
            return;
        }
        await axios.delete("product/" + id);
        getProduct();
    }
    // Pelanggan SECTION
    const onChange3 = (e) => {
            const {name, value} = e.target;
            setFormValues3({...formValues3, [name]: value});
        }
    const getPelanggans = async () => {
        const apiPelanggans = await axios.get("pelanggan");
        setpelanggans(apiPelanggans.data)
    }
    const storePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.post("pelanggan", formValues3)
            setFormValues3(initialForm3);
            navigate("/pelanggan");
        } catch(e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const getPelanggan = async (id) => {
        const response = await axios.get("pelanggan/" + id);
        const apiPelanggan = response.data[0];
        setpelanggan(apiPelanggan);
        setFormValues3({
            pelanggan: apiPelanggan.pelanggan,
            alamat: apiPelanggan.alamat,
            telp: apiPelanggan.telp,
        })
    }
    const updatePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.put("pelanggan/" + pelanggan.id, formValues3);
            setFormValues3(initialForm3);
            navigate("/pelanggan");
        } catch(e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const deletePelanggan = async (id) => {
        if (!window.confirm("u sure?")) {
            return;
        }
        await axios.delete("pelanggan/" + id);
        getPelanggans();
    }

    //Cart Section
    const cartPelanggan = async(id) => {
        const response = await axios.get("pelanggan/" + id);
        const apiPelanggan = response.data[0];
        // setpelanggan(apiPelanggan);
        setFormValues4({
            idpelanggan: apiPelanggan.id,
            pelanggan: apiPelanggan.pelanggan,
            alamat: apiPelanggan.alamat,
        })
    }
    const cartProduk = async(id) => {
        const response = await axios.get("product/" + id);
        const apiProduk = response.data[0];
        // setpelanggan(apiPelanggan);
        setFormValues5({
            idbarang: apiProduk.id,
            barang: apiProduk.title,
            harga: apiProduk.price,
        })
    }
    const inc = () => {
        setCounter(Counter + 1);
    }
    const dec = () => {
        if (Counter >= 0) {
            setCounter(Counter - 1);
        }
    }

    const checkout = () => {
        // console.log(formValues4);
        // console.log(formValues5);
        const checkoutForm = {
            ...formValues4,
            jumlah: Counter,
            ...formValues5
        }
        axios.post("orderdetail", checkoutForm);
        navigate("/");
        console.log(checkoutForm);
    }
    return <SkillContext.Provider value={{ 
        checkout, cartPelanggan, cartProduk, formValues4, formValues5, Counter, inc, dec, 
        deletePelanggan, updatePelanggan, pelanggan, setpelanggan, getPelanggan, getPelanggans, pelanggans, setpelanggans, formValues3, setFormValues3, onChange3, storePelanggan, 
        deleteProduct, updateProduct, getProduct, product, setproduct, formValues2, onChange2, storeProduct, Cats, setCats, getCats, products, setproducts, getProducts, 
        skill, skills, getSkill, getSkills, onChange, formValues, storeSkill, errors, setErrors, updateSkill, deleteSkill}}>{children}</SkillContext.Provider>
}

export default SkillContext;