import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export async function exportarPNG(forwardRef: React.RefObject<L.Map> | undefined) {
  if (forwardRef?.current) {
    let mapElement = forwardRef.current.getContainer();
    await domtoimage
      .toBlob(mapElement, { height: window.innerHeight, width: window.innerWidth })
      .then((image: Blob) => {
        saveAs(image, 'map.png');
      });
  }
}
