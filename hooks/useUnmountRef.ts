import { useCallback, useEffect, useState } from 'react';

export function useUnmountRef() {
  const [node, setNode] = useState<L.GeoJSON | null>(null);

  useEffect(() => {
    return () => node?.clearLayers() && node?.remove() && void 0;
  }, [node]);

  return useCallback((node: L.GeoJSON | null) => setNode(node), [setNode]);
}
