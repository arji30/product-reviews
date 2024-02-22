import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthentication } from "@/lib/hooks/use-authentication";
import Navbar from "@/components/NavBar";
import products from "@/lib/products"; 

const ProductDetails = () => {
  const { user } = useAuthentication();
  const [review, setReview] = useState("");
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<null | { id: string; name: string; image: string }>(null);

  useEffect(() => {
    // Find the product based on productId from the products array
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct === undefined) {
      setProduct(null); // Set state to null if product is not found
    } else {
      setProduct(foundProduct); // Set state to the found product
    }
  }, [productId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/submission");
  };

  return (
    <>
    <Navbar username={user?.givenName}/>
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Product Review Form</h1>
        {user && (
          <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={`${user.givenName} ${user.familyName}` || ""}
            disabled
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email || ""}
            disabled
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber || ""}
            disabled
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={user.postalCode || ""}
            disabled
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={user.country || ""}
            disabled
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
          {product && (
            <>
              <div className="mb-4">
                <Image
                  src={`/${product.image}`} 
                  alt="Product Image"
                  width={300}
                  height={300}
                />
              </div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
