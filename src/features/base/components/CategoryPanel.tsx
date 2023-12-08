import React from "react";
import { Block } from "@/features/base/components/Block";
import { Card } from "@/features/base/components/Card";
import { Title } from "@/features/base/components/Title";
import { CategoryList } from "./CategoryList";
import { useContextCategories } from "@/features/category/contexts/CategoriesContexts";

export const CategoryPanel = () => {
  const { categories} = useContextCategories();
  return (
    <Card className="w-full p-4">
      <Title className="max-w-fit border-b-2 border-gray-400">
        カテゴリ一覧
      </Title>

      <Block className="mt-4">
        <CategoryList categories={categories} />
      </Block>
    </Card>
  );
};