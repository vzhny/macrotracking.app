import { ReactNode } from 'react';

interface MainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = ({ meta, children }: MainProps) => (
  <div className="w-full antialiased text-gray-700">
    {meta}
    {children}
  </div>
);

export { Main };
