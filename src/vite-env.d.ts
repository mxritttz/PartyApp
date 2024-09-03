/// <reference types="vite/client" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}


interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_URL: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}