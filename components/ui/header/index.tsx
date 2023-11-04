import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between h-20 py-4 pr-10 bg-white shadow-md shadow-gray-500 border-b border-gray-200 relative">
      <div className="flex items-center pl-10">
        <a className="text-gray-900 text-2xl font-bold" href="/">
          報告書作成支援ツール
        </a>
      </div>
    </nav>
  );
};

export default Header;
