//　1.CreateContext
//2. Provider作成
// 3.　useContextでコンテキストを利用

import { FunctionComponent, ReactNode, createContext, useContext, useState } from "react";
import { Session } from "../types";


interface ContextProps {
  session?: Session;
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<ContextProps>({})

export const AuthProvider:FunctionComponent<ProviderProps> = ({children}) => {
  const [session, setSession] = useState<Session>();

  const login =async () => {
    // Todo: でパスワードとメールを送信してtokenを受け取る
    // loginページを作成・メールとパスワード　ボタンを押したらAPI通信
  }
    return(
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext= () => {
  return useContext(AuthContext);
}