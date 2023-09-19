import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs py-20">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-6">
          <img
            src={image}
            alt=""
            className="lg:w-full w-96 h-96 object-cover  rounded-lg"
          />

          <div>
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
            <h3 className=" mt-3 text-neutral-content tracking-wider capitalize">
              {company}
            </h3>
            <p className="mt-3 text-xl">{dollarAmount}</p>
            <p className="mt-6 leading-7">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
