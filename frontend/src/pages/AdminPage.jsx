import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import UpDate from "../components/UpDate";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";
import "./AdminPage.css"; 

const tabs = [
    { id: "create", label: "Create Product", icon: PlusCircle },
    { id: "products", label: "Products", icon: ShoppingBasket },
    { id: "analytics", label: "UpDate", icon: BarChart },
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("create");
    const { fetchAllProducts } = useProductStore();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return (
        <div className="admin-page">
            <div className="container">
                <motion.h1
                    className="heading"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Admin Dashboard
                </motion.h1>

                <div className="tabs-container">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                        >
                            <tab.icon className="tab-icon" />
                            {tab.label}
                        </button>
                    ))}
                </div>
                {activeTab === "create" && <CreateProductForm />}
                {activeTab === "products" && <ProductsList />}
                {activeTab === "analytics" && <UpDate />}
            </div>
        </div>
    );
};

export default AdminPage;
