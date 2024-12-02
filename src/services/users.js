import httpService from "./httpService";

export const getAllPermissionsService = () => {
  return httpService("/admin/permissions", "get");
};

export const getAllRolesService = () => {
  return httpService("/admin/roles", "get");
};

export const addNewRolesService = (data) => {
  return httpService("/admin/roles", "post", data);
};
