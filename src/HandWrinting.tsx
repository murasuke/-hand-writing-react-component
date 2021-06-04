import React from "react";

const HandWriting: React.FC = () => {
  const canvas = document.getElementById("canvassample") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    let moveflg = 0,
      Xpoint: number,
      Ypoint: number;

    //初期値（サイズ、色、アルファ値）の決定
    var defSize = 7,
      defColor = "#555";

    // PC対応
    canvas.addEventListener("mousedown", startPoint, false);
    canvas.addEventListener("mousemove", movePoint, false);
    canvas.addEventListener("mouseup", endPoint, false);
    // スマホ対応
    canvas.addEventListener("touchstart", startPoint, false);
    canvas.addEventListener("touchmove", movePoint, false);
    canvas.addEventListener("touchend", endPoint, false);

    function startPoint(e) {
      e.preventDefault();
      ctx?.beginPath();

      // 矢印の先っぽから始まるように調整
      Xpoint = e.layerX;
      Ypoint = e.layerY;

      ctx?.moveTo(Xpoint, Ypoint);
    }

    function movePoint(e) {
      if (e.buttons === 1 || e.witch === 1 || e.type === "touchmove") {
        Xpoint = e.layerX;
        Ypoint = e.layerY;
        moveflg = 1;

        ctx.lineTo(Xpoint, Ypoint);
        ctx.lineCap = "round";
        ctx.lineWidth = defSize * 2;
        ctx.strokeStyle = defColor;
        ctx.stroke();
      }
    }

    function endPoint(e) {
      if (moveflg === 0) {
        ctx.lineTo(Xpoint - 1, Ypoint - 1);
        ctx.lineCap = "round";
        ctx.lineWidth = defSize * 2;
        ctx.strokeStyle = defColor;
        ctx.stroke();
      }
      moveflg = 0;
    }

    function chgImg() {
      var png = canvas.toDataURL();

      document.getElementById("newImg").src = png;
    }
  

  return (
    <>
      <canvas id="canvassample" width="500" height="300"></canvas>
      <div>
        <button type="button" onClick={colorCange(0)}>
          ペン
        </button>
        <button type="button" onClick={colorCange(1)}>
          消しゴム
        </button>
      </div>
      <h2>画像出力</h2>
      <div id="img-box">
        <img id="newImg" alt="" />
      </div>
      <div id="btn-box">
        <button type="button" onClick={chgImg()} value="1">
          保存
        </button>
      </div>
    </>
  );
};

export default HandWriting;
