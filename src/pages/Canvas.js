import React, { useState, useRef, useEffect } from 'react';
import ItemInfo from '../components/Iteminfo';

const setItem = (infoBox) => {
  window.localStorage.setItem('infoBox', JSON.stringify(infoBox));
};

const getItem = () => {
  return JSON.parse(window.localStorage.getItem('infoBox'));
};

const getPos = (event) => {
  return {
    x: event.nativeEvent.offsetX,
    y: event.nativeEvent.offsetY,
  };
};

export default function Canvas() {
  const [infoBoxes, setInfoBoxes] = useState([]);

  const [isDrawing, setIsDrawing] = useState(false);

  const [startXY, setStartXY] = useState([]);
  const [boxSize, setBoxSize] = useState({
    width: '',
    height: '',
  });

  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();

  useEffect(() => {
    if (canvasRef.current) {
      let result = canvasRef.current.getContext('2d');
      setCtx(result);
    }
  }, [canvasRef.current]);

  const startDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const pos = getPos(e);
    const startX = pos.x;
    const startY = pos.y;

    setStartXY([startX, startY]);
  };

  const drawing = (e) => {
    e.preventDefault();
    if (!isDrawing) {
      return;
    } else {
      const pos = getPos(e);
      const nowX = pos.x;
      const nowY = pos.y;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.strokeStyle = 'rgba(244,204,204, 0.5)';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(244,204,204, 0.3)';
      ctx.fill();

      const width = nowX - startXY[0];
      const height = nowY - startXY[1];
      ctx.strokeRect(startXY[0], startXY[1], width, height);
      ctx.fillRect(startXY[0], startXY[1], width, height);
      setBoxSize({ width, height });
    }
  };

  const finishDrawing = (e) => {
    e.preventDefault();

    if (boxSize.width < 30 || boxSize.height < 30) {
      console.log('최소 30');
      alert('가로, 세로 길이는 최소 30px 이상이어야 합니다.');
      setIsDrawing(false);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      return;
    }

    setIsDrawing(false);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let text = prompt('영역의 이름은 무엇인가요?');

    if (
      startXY[0] === undefined ||
      startXY[1] === undefined ||
      text === null ||
      text === ''
    ) {
      return;
    }

    const id = Date.now();
    let newInfobox = {
      id,
      startXY,
      boxSize,
      zindex: id,
      text,
    };

    const newInfoBoxes = [...infoBoxes, newInfobox];
    setInfoBoxes(newInfoBoxes);
    setItem(newInfoBoxes);
  };

  const deleteItemInfo = (selectedItem) => {
    const newInfoBoxes = infoBoxes.filter(
      (item) => item.id !== selectedItem.id,
    );
    setInfoBoxes(newInfoBoxes);
    setItem(newInfoBoxes);
  };

  useEffect(() => {
    const newInfoBoxes = getItem();
    if (newInfoBoxes !== null) setInfoBoxes(newInfoBoxes);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="relative">
          <div
            className="absolute z-50 w-32 h-auto font-semibold list-outside bg-white bg-opacity-70 top-3 left-3 p-7"
            style={{ listStyleType: 'square' }}
          >
            {infoBoxes &&
              infoBoxes?.map((item, index) => <li key={index}>{item.text}</li>)}
          </div>
          <div className="absolute top-0 left-0 z-10 w-0 h-0 space-y-1 break-all">
            {infoBoxes &&
              infoBoxes?.map((item, index) => (
                <ItemInfo key={index} item={item} onDelete={deleteItemInfo} />
              ))}
          </div>
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={drawing}
            onMouseUp={finishDrawing}
            width={700}
            height={874}
            style={{
              backgroundImage: "url('/images/background.jpeg')",
              backgroundSize: '700px 874px',
            }}
          />
        </div>
      </div>
    </>
  );
}
