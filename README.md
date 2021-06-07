# Reactで手書きコンポーネント

## ポイント

* canvasはDOMオブジェクトを直接操作する必要があるため`useRef`フックで利用する

* canvasの大きさはCSSではなく属性で設定する。

* コンポーネントは描画完了イベント(onUpdateCanvas)をコールバックする
  * 呼び出し元で、画像のダウンロードなどで利用できる。

## 機能
1. 線の太さ、色を変更可能
1. クリア


## コンポーネントの仕組み

## 利用方法

* 利用サンプルソース全体

```typescript
function App() {
  const [dataUrl, setDataUrl] = React.useState(null);
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

  return (
    <>
      <h1>HandWritingコンポーネント利用サンプル</h1>
      <div>
        <h2>HandWritingコンポーネント</h2>
          <HandWriting onUpdateCanvas={onUpdateCanvas}/>
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
```
### 画像をimgタグに反映する
```typescript
  const onUpdateCanvas = (e: HTMLCanvasElement) => {
    setSrc(e.toDataURL('image/png'));
  }
```

```typescript
  <img id="newImg" alt="" src={dataUrl} />
```

### 画像のダウンロード
```typescript
  const downloadCanvasImage = () => {
    const dlLink = document.createElement("a"); 
    dlLink.href = src;
    dlLink.download = 'handwriting.png';
    dlLink.click();
    dlLink.remove();  
  }
```

## 参考にしたサイト
[Reactからcanvasを使って絵を書く](https://qiita.com/ebkn/items/af3b53f560eb023a200f)を参考にFunction Componentに変更しました。

    (クラスコンポーネントからファンクションコンポーネントに変更＋pospsで設定変更しただけ)


