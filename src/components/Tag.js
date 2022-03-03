import React from 'react';

const Tag = ({ tagName, value }) => {
  return (
    <div className="w-fit mr-4 mb-3">
      <div className="text-purple-700 font-bold">#{value.toUpperCase()}</div>
      <div className="text-gray-700 text-sm">{tagName.toUpperCase()}</div>
    </div>
  );
};

export default Tag;
