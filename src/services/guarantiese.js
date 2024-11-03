import httpService from "./httpService";

export const getAllGuaranteesService = () => {
  return httpService("/admin/guarantees", "get");
};

export const addNewGuaranteesService = (data) => {
  return httpService("/admin/guarantees", "post", data);
};

export const editGuaranteesService = (guaranteesId, data) => {
  return httpService(`/admin/guarantees/${guaranteesId}`, "put", data);
};

export const deleteGuaranteesService = (guaranteesId) => {
  return httpService(`/admin/guarantees/${guaranteesId}`, "delete");
};
