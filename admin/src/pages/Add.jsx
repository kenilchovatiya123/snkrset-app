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
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setBrand("");
        setBestseller(false);
        setSizes([]);
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
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* Upload Images */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, idx) => (
            <label htmlFor={`image${idx + 1}`} key={idx}>
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
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

      {/* Name Fields */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Sub_Name</p>
        <input
          onChange={(e) => setSub_Name(e.target.value)}
          value={sub_name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Price</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="w-full max-w-[500px] px-3 py-2"
          type="number"
          placeholder="Enter price"
          required
        />
      </div>

      {/* Brand */}
      <div>
        <p className="mb-2">Select Brand</p>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full px-3 py-1"
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

      {/* SubCategory */}
      <div>
        <p className="mb-2">Subcategory</p>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full px-3 py-1"
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

      {/* Size Options */}
      {sizeOptions.length > 0 && (
        <div className="mt-4">
          <p className="mb-2">Available Sizes</p>
          <div className="flex flex-wrap gap-4">
            {sizeOptions.map((size) => (
              <label key={size} className="flex items-center gap-2">
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

      {/* Bestseller */}
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
