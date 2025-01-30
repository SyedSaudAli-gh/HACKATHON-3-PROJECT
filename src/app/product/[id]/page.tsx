"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FaFacebook, FaLinkedin, FaStar } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import AddToCardSlider from "@/components/AddToCardSlider";
import RelatedProducts from "@/components/relatedProducts";
import ProductDetailNested from "@/components/ProductDetailNested";

interface ProductData {
  id: string;
  name: string;
  price: number;
  imagePath: string;
  description: string;
  category: string;
}

const Product = () => {
  const params = useParams();
  const id = params?.id;

  const [dataProducts, setDataProducts] = useState<ProductData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Description");
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  // Increment and decrement product quantity
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => count > 1 && setCount((prev) => prev - 1);

  // Handle tab switching
  const handleClick = (tab: string) => setActiveTab(tab);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("Fetching product with custom ID:", id);
        const query = `*[_type == "product" && id == $id][0]`;
        const result: ProductData | null = await client.fetch(query, { id });

        if (result) {
          console.log("Fetched Product:", result);
          setDataProducts(result);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="w-full h-auto p-4 sm:p-10">
        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* Images Section */}
          <div className="w-full lg:w-[553px] h-auto lg:h-[500px] mb-6 lg:mb-0">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className="w-full lg:w-[76px] flex flex-row lg:flex-col gap-4 lg:gap-5 overflow-auto">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-auto h-auto bg-[#FFF9E5] rounded-lg cursor-pointer flex flex-col gap-5 justify-center"
                  >
                    <Image
                      src={dataProducts?.imagePath || "/placeholder.png"}
                      alt={`Thumbnail`}
                      width={76}
                      height={80}
                      className="h-[80px] rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-[481px] h-[300px] lg:h-[500px] rounded-lg flex justify-center items-center overflow-hidden">
                <Image
                  src={dataProducts?.imagePath || "/placeholder.png"}
                  alt="Product Image"
                  width={1000}
                  height={1000}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[606px] h-auto flex flex-col gap-3">
            <h1 className="text-[28px] lg:text-[42px]">{dataProducts?.name || "Product Name"}</h1>
            <span className="text-[18px] lg:text-[24px] font-medium text-[#9F9F9F]">
            Rs. {dataProducts?.price || 0}.00
            </span>
            <div className="flex items-center gap-3 lg:gap-5">
              <div className="flex gap-1 lg:gap-2 items-center text-[#FFDA5B]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-[13px] text-[#9F9F9F]">
                5 Customer Review
              </div>
            </div>
            <p className="text-[13px]">{dataProducts?.description}</p>

            <div className="flex flex-col gap-2">
              <span className="text-[#9F9F9F] text-[14px]">Size</span>
              <div className="flex gap-4 text-[13px]">
                {["L", "XL", "XS"].map((tab) => (
                  <p
                    key={tab}
                    className={`bg-[#FAF4F4] w-[30px] h-[30px] flex justify-center items-center rounded-lg cursor-pointer ${
                      activeTab === tab ? "bg-[#FBEBB5]" : ""
                    } `}
                    onClick={() => handleClick(tab)}
                  >
                    {tab}
                  </p>
                ))}
              </div>
            </div>

            <span className="text-[#9F9F9F]">Color</span>
            <div className="flex gap-4 text-[13px]">
              {["#816DFA", "#000000", "#CDBA7B"].map((color, index) => (
                <p
                  key={index}
                  className={`w-[30px] h-[30px] rounded-full cursor-pointer`}
                  style={{ backgroundColor: color }}
                ></p>
              ))}
            </div>

            <div className="flex flex-col gap-5 mt-5 md:flex-row">
              <div className="w-[123px] h-[64px] border-[1px] rounded-[10px] flex justify-between items-center cursor-pointer">
                <button
                  onClick={increment}
                  className="w-10 h-[64px] hover:bg-slate-100 rounded-tl-[10px] rounded-bl-[10px]"
                >
                  +
                </button>
                {count}
                <button
                  onClick={decrement}
                  className="w-10 h-[64px] hover:bg-slate-100 rounded-tr-[10px] rounded-br-[10px]"
                >
                  -
                </button>
              </div>
              <AddToCardSlider
                name={dataProducts?.name || ""}
                price={dataProducts?.price || 0}
                image={dataProducts?.imagePath || "/placeholder.png"}
                quantity={count}
              />
            </div>
            <hr className="mt-14" />
            <div className="flex flex-col gap-4 mt-10">
              {[
                { label: "SKU", value: `SS00${dataProducts?.id}` },
                { label: "Category", value: dataProducts?.category },
                { label: "Tags", value: "Sofa, Chair, Home, Shop" },
                {
                  label: "Share",
                  value: (
                    <div className="flex items-center gap-3 text-xl text-black">
                      <FaFacebook />
                      <FaLinkedin />
                      <AiFillTwitterCircle />
                    </div>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center text-[#9F9F9F]">
                  <p className="w-[100px] font-medium">{item.label}</p>
                  <p className="w-[25px] text-center">:</p>
                  <div className="flex-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-auto h-auto p-4 sm:p-10 flex flex-col gap-8 items-center poppins text-[#9F9F9F]">
          <ul className="w-full sm:w-[649px] h-[36px] flex justify-between text-[14px] sm:text-[18px] md:text-[24px]">
            {["Description", "Additional Information", "Reviews [5]"].map(
              (tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer ${
                    activeTab === tab ? "text-black" : ""
                  }`}
                  onClick={() => handleClick(tab)}
                >
                  {tab}
                </li>
              )
            )}
          </ul>
          <div className="w-full sm:w-[1026px] h-auto flex flex-col gap-8">
            <p>{dataProducts?.description}</p>
          </div>
          <ProductDetailNested />
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default Product;
