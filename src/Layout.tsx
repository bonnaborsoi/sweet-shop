import React, { ReactNode } from 'react'; 


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#FDE5EC] min-h-screen ">
    
      {children}
    </div>
  );
};

export default Layout;
