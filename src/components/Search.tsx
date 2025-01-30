"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<
    { id: string; name: string; imagePath: string }[]
  >([]);
  const [filteredProducts, setFilteredProducts] = useState<
    { id: string; name: string; imagePath: string }[]
  >([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "product"]{ name, imagePath, id }`
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search term
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="flex items-center gap-2" ref={containerRef}>
      <div className="w-6 h-6 cursor-pointer" onClick={handleClick}>
        <Image src="/2.png" alt="search-icon" width={28} height={28} />
      </div>

      <input
        ref={inputRef}
        type="text"
        className={`transition-all duration-300 ease-in-out ${isOpen ? "w-[200px]" : "w-0"} h-8 pl-2`}
        placeholder="Type here..."
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="absolute top-20 lef bg-white shadow-lg mt-2 w-[300px] ">
        {filteredProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className={`p-2 hover:bg-gray-100 cursor-pointer ${isOpen ? "" : "hidden"}`}
            onClick={() => handleProductClick(product.id)}
          >
            <div className="flex items-center gap-2">
              <Image
                src={product.imagePath}
                alt={product.name}
                width={30}
                height={30}
              />
              <span>{product.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
