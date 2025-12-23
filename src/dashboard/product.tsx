import { useState } from "react";
import Rating from "./rating";
import { truncate } from "../utils";
import { ProductRating } from "./product-rating-dialog";
import { useApi } from "../ApiContext";

function Product() {
  const [openRatingDialog, setOpenRatingDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { data } = useApi();

  const rateProduct = (currentRating: any) => {
    setSelectedProduct(currentRating);
    setOpenRatingDialog(true);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {data?.map((res: any) => (
        <div className="bg-white w-60 h-80 flex flex-col justify-center gap-2">
          <div
            id="image-section flex"
            className="flex justify-center items-center p-2"
          >
            <img src={res.image} className="w-32 h-32" alt="Dog" />
          </div>
          <div id="project-description" className="flex flex-col gap-1 px-4">
            <div className="flex flex-col gap-4 w-full max-h-14">
              <div className="flex justify-end">
                <Rating rate={res?.rating?.rate} total={5} />
              </div>
              <span className="text-black font-semibold">
                {truncate(res?.title, 22)}
              </span>
            </div>
            <div className="flex justify-center text-lg font-bold max-h-14">
              <span className="text-black">₹{res?.price}</span>
            </div>
            <div className="flex items-center text-center w-full justify-center">
              <button
                className="text-black bg-gray-400 p-1 rounded-md w-32"
                onClick={() => rateProduct(res)}
              >
                Rate Now
              </button>
            </div>
          </div>
        </div>
      ))}
      <ProductRating
        openRatingDialog={openRatingDialog}
        setOpen={setOpenRatingDialog}
        selectedProduct={selectedProduct}
      ></ProductRating>
    </div>
  );
}

export default Product;
