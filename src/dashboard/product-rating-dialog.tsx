import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useApi, type Product } from "../ApiContext";
import { toast } from "sonner";

interface RatingDialogProps {
  openRatingDialog: boolean;
  setOpen: (value: boolean) => void;
  selectedProduct: Product;
}

export function ProductRating({
  openRatingDialog,
  setOpen,
  selectedProduct,
}: RatingDialogProps) {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const { data, setData, setOriginalData } = useApi();

  useEffect(() => {
    if (!openRatingDialog) {
      setSelectedStar(null);
    }
  }, [openRatingDialog]);

  const storeRating = (i: number) => {
    setSelectedStar(i);
  };

  const closeDialog = () => {
    setSelectedStar(null);
  };

  const updateRatingApi = (rate: number) => {
    let productId = selectedProduct?._id;
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rate }),
    })
      .then((res: any) => {
        toast("Product rated successfully", {
          description: `Success`,
        });
      })
      .catch((err) => console.log("Err", err));
  };

  const saveRating = () => {
    if (selectedStar === null) return;
    const productRating = selectedStar + 1;

    const oldAverage = selectedProduct.rating.rate;
    const oldCount = selectedProduct.rating.count;

    const newAverageRating =
      (oldAverage * oldCount + productRating) / (oldCount + 1);
    const updatedProduct: any = data?.map((ele: any) =>
      ele.id === selectedProduct?.id
        ? {
            ...ele,
            rating: {
              ...ele.rating,
              rate: newAverageRating,
              count: ele.rating.count + 1,
            },
          }
        : ele
    );
    setData(updatedProduct);
    setOriginalData(updatedProduct);
    updateRatingApi(newAverageRating);
    setOpen(false);
  };

  return (
    <Dialog open={openRatingDialog} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-black">
              Please rate product
            </DialogTitle>
            <DialogDescription className="text-black">
              Your rating is valuable.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => {
              const filled = selectedStar !== null && i <= selectedStar;

              return (
                <FaStar
                  key={i}
                  size={20}
                  className="w-10 h10"
                  onClick={() => storeRating(i)}
                  color={filled ? "#FFD700" : "#E0E0E0"}
                />
              );
            })}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="bg-gray-500 text-white"
                onClick={() => closeDialog()}
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="text-black text-sm bg-green-300"
              disabled={selectedStar === null}
              onClick={() => saveRating()}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
