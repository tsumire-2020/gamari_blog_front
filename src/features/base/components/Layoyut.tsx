import { Main } from './Main';
import React, { FunctionComponent, ReactNode } from 'react'
import { Block } from './Block';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
// rfc

interface Props{
  children:ReactNode;
}
export const Layoyut:FunctionComponent<Props> = ({
  children}) => {
  return (
    <>
      <Header />

      <Main className="bg-gray-200/80 min-h-screen w-full">
        <Block className="max-w-[1100px] mx-auto grid grid-cols-[1fr,min-content] gap-8">
          {/* TODO fix className */}
          <Block className="mt-10">
            {children}
          </Block>
        </Block>
      </Main>
    </>
  )
}
