import React, { useEffect, useRef, useState } from "react";
import { products as allProducts, waLink } from "../../data/content.js";
import ProductModal from "./ProductModal.jsx";
import "./Products.css";

const MAX_PRODUCTS = 10; // hard safety cap, matches the agreed business limit
const products = allProducts.slice(0, MAX_PRODUCTS);

const DESCRIPTION_LIMIT = 100; // characters — beyond this, card truncates + shows "See description"

export function buyMessage(product) {
  return `Hi Healthynix! I would like to buy ${product.name} (${product.price}).`;
}

export default function Products() {
  const trackRef = useRef(null);
  const isStatic = products.length <= 3; // desktop only: hides slider, shows static grid
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const updateEdges = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setAtStart(scrollLeft <= 1);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(".product-slide");
    const amount = slide ? slide.offsetWidth + 24 : track.offsetWidth;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="section section-alt" id="products">
      <div className="s-label">Shop</div>
      <h2 className="s-h2">
        Tools to support
        <br />
        <em>your program.</em>
      </h2>
      <p className="s-body">
        Optional kits and devices that plug directly into your care plan —
        ordered straight through WhatsApp.
      </p>

      <div className={`product-wrap ${isStatic ? "is-static" : ""}`}>
        <div className="product-track" ref={trackRef}>
          {products.map((p) => {
            const isLong = p.description.length > DESCRIPTION_LIMIT;
            const preview = isLong
              ? `${p.description.slice(0, DESCRIPTION_LIMIT).trim()}…`
              : p.description;

            return (
              <div className="product-slide" key={p.id}>
                <div className="product-card">
                  <div className="prod-photo">
                    <img src={p.photo} alt={p.name} className="prod-img" />
                  </div>
                  <div className="prod-info">
                    <div className="prod-name">{p.name}</div>
                    <div className="prod-price">{p.price}</div>
                    <p className="prod-desc">
                      {preview}
                      {isLong && (
                        <button
                          className="prod-see-more"
                          onClick={() => setActiveProduct(p)}
                        >
                          See description
                        </button>
                      )}
                    </p>
                    <a
                      href={waLink(buyMessage(p))}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-buy"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {products.length > 1 && (
          <div className="product-nav">
            <button
              className="product-arrow"
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label="Previous product"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="product-arrow"
              onClick={() => scroll(1)}
              disabled={atEnd}
              aria-label="Next product"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </section>
  );
}
