import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const Edit = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    sub_name: "",
    price: "",
    originalPrice: "",
    image: [],
    subCategory: "",
    sizes: [],
    stockStatus: "",
    description: "",
    brand: "",
    type: "",
  });
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          const product = res.data.product;
          setFormData({
            name: product.name || "",
            sub_name: product.sub_name || "",
            price: product.price || "",
            originalPrice: product.originalPrice || "",
            image: product.image || [],
            subCategory: product.subCategory || "",
            sizes: product.sizes || [],
            stockStatus: product.stockStatus || "",
            description: product.description || "",
            brand: product.brand || "",
            type: product.type || "",
          });
        } else {
          toast.error(res.data.message || "Failed to fetch product.");
        }
      } catch (error) {
        console.error("Failed to fetch product:", error.message);
        toast.error("Error fetching product.");
      }
    };
    fetchProduct();
  }, [id, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setShowConfirm(false);
    try {
      const res = await axios.put(
        `${backendUrl}/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Product updated successfully!");
        navigate("/list");
      } else {
        toast.error(res.data.message || "Update failed.");
      }
    } catch (error) {
      console.log("PUT URL:", `${backendUrl}/api/products/${id}`);

      console.error("Update error:", error);
      toast.error("Something went wrong while updating!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Product Name"
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="sub_name"
          value={formData.sub_name || ""}
          onChange={handleChange}
          placeholder="Product SubName"
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          placeholder="Price"
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          name="originalPrice"
          value={formData.originalPrice || ""}
          onChange={handleChange}
          placeholder="Original Price"
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="brand"
          value={formData.brand || ""}
          onChange={handleChange}
          placeholder="Brand"
          className="border px-4 py-2 rounded"
        />
        <select
          name="stockStatus"
          value={formData.stockStatus || ""}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        >
          <option value="">Select Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <select
          name="subCategory"
          value={formData.subCategory || ""}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        >
          <option value="">Select Sub Category</option>
          <option value="Air Jordan's">Air Jordan's</option>
          <option value="SB Dunks">SB Dunks</option>
          <option value="Yeezy350">Yeezy350</option>
          <option value="Louis Vuitton">Louis Vuitton</option>
          <option value="Dior">Dior</option>
          <option value="Gucci">Gucci</option>
          <option value="Prada">Prada</option>
          <option value="Shirts">Shirts</option>
          <option value="tshirts">T-Shirts</option>
          <option value="jeans">Jeans</option>
          <option value="jackets">Jackets</option>
        </select>
        <select
          name="type"
          value={formData.type || ""}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        >
          <option value="">Select Type</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          type="text"
          name="sizes"
          value={(formData.sizes || []).join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              sizes: e.target.value.split(",").map((s) => s.trim()),
            })
          }
          placeholder="Sizes (e.g., S, M, L, XL)"
          className="border px-4 py-2 rounded col-span-1 md:col-span-2"
        />
        {/* <input
          type="text"
          name="image"
          value={(formData.image || []).join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              image: e.target.value.split(",").map((url) => url.trim()),
            })
          }
          placeholder="Image URLs (comma separated)"
          className="border px-4 py-2 rounded col-span-1 md:col-span-2"
        /> */}
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Description"
          className="border px-4 py-2 rounded col-span-1 md:col-span-2"
        />
      </div>

      <div className="mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={() => setShowConfirm(true)}
        >
          Submit
        </button>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/20 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <p className="mb-4 text-lg font-semibold">
              Are you sure you want to update this product?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Yes, Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
