import React, { useEffect, useState } from "react";
import {
  getFewerProductsService,
  toggleNotificationService,
} from "../../services/products";
import { Alert } from "../../utils/alert";
import ActionIcon from "../../component/ActionIcon";
import SpinnerLoad from "../../component/SpinnerLoad";
import { FaEyeSlash } from "react-icons/fa";

const ProductTable = () => {
  const [fewerProducts, setFewerProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetFewerProducts = async () => {
    setLoading(true);
    const res = await getFewerProductsService();
    setLoading(false);
    if (res.status === 200) {
      const products = res.data.data;
      products.length > 0 ? setFewerProducts(products) : setFewerProducts([]);
    }
  };

  const handleTurnoffNotification = async (productId) => {
    const res = await toggleNotificationService(productId);
    if (res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      setFewerProducts((old) => old.filter((p) => p.id !== productId));
    }
  };

  useEffect(() => {
    handleGetFewerProducts();
  }, []);

  return (
    <div className="w-full lg:w-1/2 p-2 ">
      <p className="text-center mt-3 text-dark font-bold">
        محصولات رو به اتمام
      </p>
      {loading ? (
        <SpinnerLoad colorClass="text-blue-400" />
      ) : fewerProducts.length === 0 ? (
        <strong className="text-blue-500 block text-center mt-4">
          فعلا محصول رو به اتمامی وجود ندارد
        </strong>
      ) : (
        <table className="table text-center my-2 bg-gradient-custom backdrop-blur-lg rounded-lg shadow-lg">
          <thead className="text-lg font-bold text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">دسته</th>
              <th className="px-4 py-2">عنوان</th>
              <th className="px-4 py-2">وضعیت</th>
              <th className="px-4 py-2">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-300">
            {fewerProducts.map((p) => (
              <tr key={p.id} className="hover:bg-blue-300 hover:text-blue-950 ">
                <td className="px-4 py-2">{p.id}</td>
                <td className="px-4 py-2">{p.categories[0]?.title}</td>
                <td className="px-4 py-2">{p.title}</td>
                <td className="px-4 py-2">
                  {p.stock === 0 ? (
                    <span className="text-red-500 font-bold">پایان یافته</span>
                  ) : (
                    `رو به اتمام : (${p.stock})`
                  )}
                </td>
                <td className=" px-4 py-2">
                  <ActionIcon
                    icon={<FaEyeSlash className="text-red-500 w-5 h-5 mt-1" />}
                    pTitle="update_product_notification"
                    title="نادیده گرفتن"
                    onClick={() => handleTurnoffNotification(p.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductTable;
