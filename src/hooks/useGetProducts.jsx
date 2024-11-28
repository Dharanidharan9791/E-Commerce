import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/features/productsSlice";
import { getProductsApi } from "../apis/productsAPI";

export const useGetProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsApi(); 
        dispatch(setProducts(response));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]); 
};
