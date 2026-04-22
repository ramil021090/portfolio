import type { ReactNode } from "react";
import type { NavItem } from "../features/header/types";

interface ItemListProps {
  data: NavItem[];
  render: (item: NavItem) => ReactNode;
}
const ItemList = ({ render, data }: ItemListProps) => {
  return <>{data.length > 0 && <div>{data.map(render)}</div>}</>;
};

export default ItemList;
