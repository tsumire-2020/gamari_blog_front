import React, { FunctionComponent } from "react";

import { Aside } from "./Aside";
import { ProfilePanel } from "./ProfilePanel";
import { SearchBox } from "./SearchBox";
import { CategoryPanel } from "./CategoryPanel";
import { ManagePanel } from "./ManagePanel";
import { useContextCategories } from "@/features/category/contexts/CategoriesContexts";

// TODO add
interface Props {
  className?: string;
}

// TODO add
export const Sidebar: FunctionComponent<Props> = ({ className = "" }) => {
  // TODO fix className
  return (
    <Aside className={`w-[300px] flex flex-col space-y-12 ${className}`}>
      <ProfilePanel />
      <SearchBox />
      <CategoryPanel />
      <ManagePanel />
    </Aside>
  );
};