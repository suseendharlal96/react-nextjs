import Link from "next/link";

import slugify from "../util/slugify";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "426px" }}>
          <Link href="/">
            <img
              src={product?.image?.fields?.file?.url}
              style={{ width: "100%", height: "285px", padding: "15px" }}
              className="card-img-top"
            />
          </Link>
          <div className="card-body text-center">
            {product?.category ? (
              <Link href="/menu/[prodName]" as={`/menu/${product.title}`}>
                <a title="click to view" style={{ cursor: "pointer" }}>
                  {product.title}
                </a>
              </Link>
            ) : (
              <Link href="/product/[prodName]" as={`/product/${product.title}`}>
                <a title="click to view" style={{ cursor: "pointer" }}>
                  {product.title}
                </a>
              </Link>
            )}
            <h6>${product.price}</h6>
            <button
              className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
              data-item-id={slugify(product.title)}
              data-item-name={product.title}
              data-item-price={product.price}
              data-item-image={product?.image?.fields?.file?.url}
              data-item-url="/"
            >
              add to cart
            </button>
            {product?.category && (
              <h6>
                Category:{" "}
                <Link
                  href="/category/[category]"
                  as={`/category/${product?.category}`}
                >
                  {product?.category}
                </Link>{" "}
              </h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
