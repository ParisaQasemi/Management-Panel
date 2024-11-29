import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert, Confirm } from "../../../../utils/alert";
import SpinnerLoad from "../../../../component/SpinnerLoad";
import PrevPageButton from "../../../../component/authForm/PrevPageButton";
import {
  addProductImage,
  deleteProductImageService,
  setMainProductImageService,
} from "../../../../services/products";
import { FaClipboardCheck, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { apiPath } from "../../../../services/httpService";

const ProductGallery = () => {
  const location = useLocation();
  const { selectedProduct } = location.state;
  const [gallery, setGallery] = useState(selectedProduct.gallery);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectImage = async (e) => {
    console.log("Selected files:", e.target.files);

    setError(null);
    const image = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", image);
    console.log([...formdata.entries()]);

    if (
      image.type != "image/png" &&
      image.type != "image/jpeg" &&
      image.type != "image/jpg"
    )
      return setError("لطفا فقط از فایل با فرمت jpg و یا png استفاده کنید");
    if (image.size > 512000)
      return setError("حجم تصویر نباید بیشتر از 500 کیلوبایت باشد");
    setLoading(true);

    const res = await addProductImage(selectedProduct.id, formdata);
    console.log(res);
    setLoading(false);
    if (res.status === 201) {
      Alert("انجام شد", res.data.message, "success");
      setGallery((old) => [
        ...old,
        { id: res.data.data.id, is_main: 0, image: res.data.data.image },
      ]);
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (await Confirm("آیا از حذف این تصویر اطمینان دارید")) {
      setLoading(true);
      const res = await deleteProductImageService(imageId);
      setLoading(false);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        setGallery((old) => old.filter((image) => image.id != imageId));
      }
    }
  };

  const handleSetMainImage = async (imageId) => {
    setLoading(true);
    const res = await setMainProductImageService(imageId);
    setLoading(false);
    if (res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      setGallery((old) => {
        let newGallery = old.map((img) => {
          return { ...img, is_main: 0 };
        });
        const index = newGallery.findIndex((i) => i.id == imageId);
        newGallery[index].is_main = 1;
        return newGallery;
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between my-3">
        <h4 className="text-right">
          {" "}
          مدیریت گالری تصاویر:{" "}
          <span className="text-blue-400">{selectedProduct.title}</span>{" "}
        </h4>
        <div className="text-left">
          <PrevPageButton />
        </div>
      </div>

      <div className="justify-center">
        <small className="text-red-500">نکته: لطفا از تصاویر مربع با حداکثر حجم 500 کیلوبایت استفاده کنید (600*600)</small>
        {error ? (
          <small className="block text-right text-red-600 py-3">{error}</small>
        ) : null}
        <div className="flex flex-wrap">
          {gallery.length > 0
            ? gallery.map((g) => (
                <div
                  key={g.id}
                  className={`rounded-lg border bg-white shadow-sm me-2 image_gallery flex justify-center items-center relative my-1 ${
                    g.is_main ? "main_image" : ""
                  }`}
                  title={g.is_main ? "تصویر اصلی" : ""}
                >
                  <img
                    src={`${apiPath}/${g.image}`}
                    className="bg-white rounded-lg w-100"
                  />
                  <div className="image_action_container">
                    {!g.is_main ? (
                      <FaClipboardCheck
                        title="انتخاب به عنوان اصلی"
                        className="text-green-600 cursor-pointer mx-2"
                        onClick={() => handleSetMainImage(g.id)}
                      />
                    ) : null}
                    <MdDelete
                      title="حذف این تصویر"
                      className="text-red-600 cursor-pointer mx-2"
                      onClick={() => handleDeleteImage(g.id)}
                    />
                  </div>
                </div>
              ))
            : null}
          <div
            className={`rounded-lg border bg-white shadow-sm ms-1 add_image_gallery flex justify-center items-center relative my-1 ${
              loading ? "disabled" : ""
            }`}
            title="افزودن تصویر جدید"
          >
            {loading ? (
              <SpinnerLoad />
            ) : (
              <FaPlus className="p-1 text-green-600 w-10 h-10" />
            )}
            <input
              type="file"
              name="image"
              className="w-full h-full absolute top-0 start-0 cursor-pointer opacity-0"
              onChange={handleSelectImage}
              multiple={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductGallery;
