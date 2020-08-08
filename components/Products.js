import Product from "./Product";
import Title from "./Title";

const Products = ({ products }) => {
  return (
    <section className="py-5" style={{ backgroundColor: "rosybrown" }}>
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {products &&
            products?.length > 0 &&
            products?.map((node, index) => (
              <Product key={index} product={node.fields} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
