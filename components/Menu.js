import { useState, useEffect } from "react";

import Link from "next/link";

import Title from "./Title";

const Menu = ({ items }) => {
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (items) {
      setAllItems(items);
      setfilteredItems(items);
      getCategories(items);
    }
  }, []);

  const getCategories = (items) => {
    let tempItems = items.map((item) => {
      return item?.fields?.category.toLowerCase();
    });
    let categories = ["All", ...new Set(tempItems)];
    setCategories(categories);
  };

  const handleFilter = (category) => {
    const a = [...allItems];
    let filtered = a;
    if (category.toLowerCase() !== "all") {
      filtered = a.filter(
        (item) =>
          item?.fields?.category.toLowerCase() === category.toLowerCase()
      );
    }
    setfilteredItems(filtered);
  };

  let coffeeItems = (
    <section className="menu py-5">
      <div className="container">
        {items?.length > 0 ? (
          <>
            <Title title="our menu" />
            <div className="row mb-5">
              <div className="col-10  mx-auto text-center">
                {categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        handleFilter(category);
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="row">
              {filteredItems.map((node) => (
                <div
                  key={node?.sys?.id}
                  className="col-11 col-md-6 my-2 d-flex mx-auto"
                >
                  <div className="zoom">
                    <Link
                      href="/menu/[itemName]"
                      as={`/menu/${node?.fields?.title}`}
                    >
                      <img
                        src={node?.fields.image.fields.file.url}
                        style={{
                          cursor: "pointer",
                          width: 100,
                          height: 100,
                        }}
                      />
                    </Link>
                  </div>

                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <Link
                        href="/menu/[itemName]"
                        as={`/menu/${node?.fields?.title}`}
                      >
                        <a>
                          <h6 className="mb-0">{node?.fields?.title}</h6>
                        </a>
                      </Link>
                      <h6 className="text-yellow mb-0">
                        ${node?.fields?.price}
                      </h6>
                    </div>

                    <p className="text-muted">
                      <small>{node?.fields?.description}</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
  return coffeeItems;
};

export default Menu;
