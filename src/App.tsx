import React from 'react';
import HandWriting from './HandWrinting';

function App() {
  const [dataUrl, setDataUrl] = React.useState(null);
  const [settings, setSettings] = React.useState({lineWidth:7, lineColor: '#5555bb', clear: false})
  const onUpdateCanvas = (e: HTMLCanvasElement) => {
    setDataUrl(e.toDataURL('image/png'));
  }

  const downloadCanvasImage = () => {
    const dlLink = document.createElement("a"); 
    dlLink.href = dataUrl;
    dlLink.download = 'handwriting.png';
    dlLink.click();
    dlLink.remove();  
  }

  const setLineWidth = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    setSettings( prev => {
      return {...prev, lineWidth: parseInt(e.target.value, 10)}
    });
  }

  const setColor= (e:  React.ChangeEvent<HTMLInputElement>) => {
    setSettings( prev => {
      return {...prev, lineColor: e.target.value}
    });
  }

  const clearComponent= () => {
    setSettings( prev => {
      return {...prev, clear: !prev.clear}
    });
  }

  const lineWidth = [1,2,3,5,7,10,14,20];
  return (
    <>
      <h1>HandWritingコンポーネント利用サンプル</h1>
      <div>
        <h2>HandWritingコンポーネント</h2>
          <div>
            <label htmlFor="lineWidth">線の太さ：</label>
            <select name="lineWidth" value={settings.lineWidth} onChange={setLineWidth}>
              {lineWidth.map((i) =><option key={i} value={i}>{i}</option>)}
            </select>
            &nbsp;&nbsp;
            <label htmlFor="lineColor">色：</label>
            <input name="lineColor" type="color" value={settings.lineColor} onChange={setColor}></input>
            &nbsp;&nbsp;
            <button onClick={clearComponent}>クリア</button>
          </div>
          <HandWriting onUpdateCanvas={onUpdateCanvas} {...settings} />
      </div>
      <div>
        <h2>HandWritingの更新イベントサンプル(画像更新時にimgタグに反映)</h2>
          <img id="newImg" alt="" src={dataUrl} />
      </div>
      <div>
        <button type="button" onClick={downloadCanvasImage}>
          HandWriting画像のダウンロード
        </button>
      </div>
    </>
  );
}

export default App;
