import React from "react";
import { useHasPermission } from "../../hooks/permissionsHook";
import Cards from "./Cards";
import ProductTable from "./ProductTable";
import SaleChart from "./SaleChart";

const Dashboard = () => {
  const hasCardsPermission = useHasPermission("read_order_statistics");
  const hasFewerProductsPermission = useHasPermission("read_fewer_products");
  const hasChartPermission = useHasPermission("read_orders_year");
  return (
    <>
      {hasCardsPermission && <Cards />}
      <div className="w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {hasFewerProductsPermission && <ProductTable />}
        {hasChartPermission && <SaleChart />}
      </div>
    </>
  );
};

export default Dashboard;
