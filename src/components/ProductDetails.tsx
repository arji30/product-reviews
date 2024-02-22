import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthentication } from "@/lib/hooks/use-authentication";
import Navbar from "@/components/NavBar";

const ProductDetails = () => {
  const { user } = useAuthentication();
  const [review, setReview] = useState("");
  const router = useRouter();
  const { productId } = router.query;

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
            {/* Repeat similar fields for other user info */}
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
        <div className="mb-4">
          <Image
            src={`/product${productId}.jpg`} // Assuming your product images are stored in /public/products/ directory with filenames as product IDs
            alt="Product Image"
            width={300}
            height={300}
          />
        </div>
        <h2 className="text-xl font-semibold">{`Product ${productId}`}</h2>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
