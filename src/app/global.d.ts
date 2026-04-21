export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.Material {
    color: THREE.Color;
    lineWidth: number;
    map?: THREE.Texture;
    repeat?: [number, number];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

