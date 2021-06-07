import React, { useRef, useState, useEffect } from "react";

export type HandWritingAttribute = {
  width?: number,
  height?: number,
  lineWidth?: number,
  lineColor?: string,
  lineCap?: CanvasLineCap,
  clear?: boolean,
  onUpdateCanvas?: (e: HTMLCanvasElement) => void,
}

const HandWriting: React.FC<HandWritingAttribute> = (props) => {
  const canvas = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const ctx = (canvas.current as HTMLCanvasElement).getContext('2d');
    if( ctx ) {
      ctx.clearRect(0, 0, props.width, props.height);
      if (props.onUpdateCanvas) props.onUpdateCanvas(canvas.current);
    }
  }, [props.clear]);

  const getContext = () => {
    const ctx = (canvas.current as HTMLCanvasElement).getContext('2d');
    ctx.lineWidth = props.lineWidth;
    ctx.lineCap = props.lineCap;
    ctx.strokeStyle = props.lineColor;
    return ctx;
  }
  
  const mouseDown: React.MouseEventHandler = (e) =>  {
    const { offsetX: x ,offsetY: y } = e.nativeEvent;
    setDrawing(true);
    const ctx = getContext();
    ctx.beginPath();
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
  lineColor: "rgb(100, 100, 100)",
  lineCap: "round",
};

export default HandWriting;
