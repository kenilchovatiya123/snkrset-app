import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [sub_name, setSub_Name] = useState("");
  const [price, setPrice] = useState("");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [brand, setBrand] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [description, setDescription] = useState("");

  const [originalPrice, setOriginalPrice] = useState("");
  const [stockStatus, setStockStatus] = useState("full stock");

  const subCategoryMap = {
    Topwear: ["S", "M", "L", "XL", "XXL"],
    Bottomwear: ["28", "30", "32", "34", "36"],
    Footwear: ["UK6", "UK7", "UK8", "UK9", "UK10"],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "sizes") {
      const updatedSizes = checked
        ? [...sizes, value]
        : sizes.filter((size) => size !== value);
      setSizes(updatedSizes);
    } else if (name === "subCategory") {
      setSubCategory(value);
    } else if (name === "bestseller") {
      setBestseller(checked);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("sub_name", sub_name);
      formData.append("price", price);
      formData.append("subCategory", subCategory);
      formData.append("brand", brand);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("date", new Date().toISOString());
      formData.append("originalPrice", originalPrice);
      formData.append("stockStatus", stockStatus);
      formData.append("description", description);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/products/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setSub_Name("");
        setPrice("");
        setBrand("");
        setBestseller(false);
        setSizes([]);
        setOriginalPrice("");
        setStockStatus("full stock");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (subCategory && subCategoryMap[subCategory]) {
      setSizeOptions(subCategoryMap[subCategory]);
    } else {
      setSizeOptions([]);
    }
  }, [subCategory]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add New Product
      </h2>
      <form onSubmit={onSubmitHandler} className="space-y-6">
        {/* Upload Images */}
        <div>
          <p className="mb-2 font-medium text-gray-700">Upload Images</p>
          <div className="flex gap-4 flex-wrap">
            {[image1, image2, image3, image4].map((img, idx) => (
              <label
                htmlFor={`image${idx + 1}`}
                key={idx}
                className="cursor-pointer"
              >
                <div className="w-24 h-24 border-2 border-dashed rounded-md flex items-center justify-center hover:border-black transition">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={!img ? assets.upload_area : URL.createObjectURL(img)}
                    alt={`upload-${idx}`}
                  />
                </div>
                <input
                  type="file"
                  id={`image${idx + 1}`}
                  hidden
                  onChange={(e) => {
                    const setter = [setImage1, setImage2, setImage3, setImage4][
                      idx
                    ];
                    setter(e.target.files[0]);
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Sub Name
            </label>
            <input
              type="text"
              value={sub_name}
              onChange={(e) => setSub_Name(e.target.value)}
              placeholder="Type here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Original Price
            </label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="Enter original price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Stock Status
            </label>
            <select
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="full stock">Full Stock</option>
              <option value="low stock">Low Stock</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Brand
            </label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">-- Select Brand --</option>
              <option value="Air Jordan's">Air Jordan's</option>
              <option value="SB Dunks">SB Dunks</option>
              <option value="Yeezy350">Yeezy350</option>
              <option value="Louis Vuitton">Louis Vuitton</option>
              <option value="Dior">Dior</option>
              <option value="Gucci">Gucci</option>
              <option value="Prada">Prada</option>
              <option value="Shirts">Shirts</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Subcategory
            </label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">-- Select Subcategory --</option>
              {Object.keys(subCategoryMap).map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sizes */}
        {sizeOptions.length > 0 && (
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Available Sizes
            </label>
            <div className="flex flex-wrap gap-4">
              {sizeOptions.map((size) => (
                <label key={size} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="sizes"
                    value={size}
                    checked={sizes.includes(size)}
                    onChange={handleChange}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            placeholder="Short product description (20–40 words)"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Bestseller */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
            id="bestseller"
          />
          <label htmlFor="bestseller" className="text-sm font-medium">
            Add to Bestseller
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 transition px-6 py-3 text-white rounded-lg font-medium tracking-wide"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
