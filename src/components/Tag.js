import React from 'react';

const Tag = ({ tagName, value }) => {
  return (
    <div className="mb-3 mr-4 w-fit">
      {value === '' || (
        <>
          <div className="font-bold text-purple-700">
            #{value.toUpperCase()}
          </div>
          <div className="text-sm text-gray-700">{tagName.toUpperCase()}</div>
        </>
      )}
    </div>
  );
};

export default Tag;
