import { FunctionComponent, createContext, useContext, useEffect, useState } from "react";
import { Category } from "../types";
import { fetchCategories } from "../libs/CategoryFetcher";

interface CategoriesContextProps {
  categories:Category[];
}

// 作るもの
// 1.　Context 領域
// 2.　Provider　↑を使って生み出す
// 3.　Consumer　→useContext

const CategoriesContext = createContext<CategoriesContextProps>({
  categories: [],
})

interface ProviderProps {
  children: React.ReactNode;
}

export const CategoriesProvider: FunctionComponent<ProviderProps> =({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function init() {
      const categories = await fetchCategories();
      setCategories(categories)
    }

    init()
  }, [])


return (
    <CategoriesContext.Provider value ={{
      categories
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useContextCategories = () => {
  // categories: []にアクセスするために使用
  return useContext(CategoriesContext);
}