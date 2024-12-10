import React from "react";
import { useHasPermission } from "../../hooks/permissionsHook";
import Cards from "./Cards";
import ProductTable from "./ProductTable";
import SaleChart from "./SaleChart";

const Dashboard = () => {
  const hasCardsPermission = useHasPermission('read_order_statistics')
  const hasFewerProductsPermission = useHasPermission('read_fewer_products')
  const hasChartPermission = useHasPermission('read_orders_year')
  return (
    <div id="dashboard_section">
      {hasCardsPermission && <Cards/>}
      <div className="w-full flex justify-between">
        {hasFewerProductsPermission && <ProductTable/>}
        {hasChartPermission && <SaleChart/>}
      </div>
    </div>
  );
};

export default Dashboard;
