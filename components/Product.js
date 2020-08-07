import Link from "next/link";
import { useEffect } from "react";

const Product = ({ product }) => {
  useEffect(() => {
    console.log(product);
  }, []);
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
            <Link href="/">
              <h6>{product.title}</h6>
            </Link>
            <h6>${product.price}</h6>
            <button
              className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
              data-item-id={product.id}
              data-item-name={product.title}
              data-item-price={product.price}
              data-item-image={product?.image?.fields?.file.url}
              data-item-url="https://agape-cafe.netlify.app/"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
