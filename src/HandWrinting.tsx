import React, { useRef, useState } from "react";

export type HandWritingAttribute = {
  width?: number,
  height?: number,
  lineWidth?: number,
  strokeStyle?: string,
  lineCap?: CanvasLineCap,
  onUpdateCanvas?: (e: HTMLCanvasElement) => void,
}

const HandWriting: React.FC<HandWritingAttribute> = (props) => {
  const canvas = useRef(null);
  const [drawing, setDrawing] = useState(false)

  const getContext = () => {
    const ctx = (canvas.current as HTMLCanvasElement).getContext('2d');
    ctx.lineWidth = props.lineWidth;
    ctx.lineCap = props.lineCap;
    ctx.strokeStyle = props.strokeStyle;
    return ctx;
  }
  
  const mouseDown: React.MouseEventHandler = (e) =>  {
    const { offsetX: x ,offsetY: y } = e.nativeEvent;
    setDrawing(true);
    const ctx = getContext();
    ctx.moveTo(x, y);
  }


  const mouseMove: React.MouseEventHandler = (e) => {
    if (!drawing) return;

    const { offsetX: x ,offsetY: y } = e.nativeEvent;
    const ctx = getContext();
    ctx.lineTo(x, y);
    ctx.stroke();
  } 

  const endDrawing = () => {
    setDrawing(false);
    if (props.onUpdateCanvas) props.onUpdateCanvas(canvas.current);
  }

  return (
    <>
      <canvas id="canvassample" width={props.width} height={props.height} ref={canvas}
        onMouseDown={mouseDown} 
        onMouseMove={mouseMove} 
        onMouseUp={endDrawing} 
        onMouseLeave={endDrawing} />
    </>
  );
};

HandWriting.defaultProps = {
  width: 500,
  height: 300,
  lineWidth: 10,
  strokeStyle: "rgb(100, 100, 100)",
  lineCap: "round",
};

export default HandWriting;
