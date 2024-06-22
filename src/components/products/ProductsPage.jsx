import { useLoaderData } from "react-router-dom";
import SingleProduct from "../SingleProduct";

const ProductsPage = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex gap-2 px-6 justify-center items-center flex-wrap ">
        {
          // eslint-disable-next-line react/prop-types
          data?.map((shoe) => (
            <SingleProduct key={shoe._id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default ProductsPage;
