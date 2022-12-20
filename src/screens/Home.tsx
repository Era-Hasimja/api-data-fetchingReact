import { useState } from "react";

import { products } from "../products";

import { AddModal } from "../components/shared/AddModal";
import { AddModalButton } from "../components/shared/AddModalButton";
import { Product } from "../components/shared/Product";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <AddModalButton onClick={handleOpen} />

      <section className="products-section" id="products-section">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>

      <AddModalButton onClick={handleOpen} />

      <AddModal isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
};
