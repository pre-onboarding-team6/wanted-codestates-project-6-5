import React from 'react';

export default function ItemInfo({ item, onDelete }) {
  return (
    <li
      style={{
        top: `${item.startXY[1]}px`,
        left: `${item.startXY[0]}px`,
        width: `${item.boxSize.width}px`,
        height: `${item.boxSize.height}px`,
        borderColor: '#d9ead3',
        backgroundColor: '#d9ead370',
      }}
      className="absolute z-30 flex flex-row justify-between pl-1 overflow-auto break-all border-2"
    >
      <span className="pr-6 text-sm font-semibold">{item.text}</span>
      <button
        className="absolute w-5 h-5 border-0 cursor-pointer top-1 right-1 hover:scale-105"
        style={{
          backgroundColor: '#2f485850',
        }}
        onClick={() => onDelete(item)}
      >
        X
      </button>
    </li>
  );
}
