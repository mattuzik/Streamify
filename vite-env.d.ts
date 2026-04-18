/// <reference types="vite/client" />
declare module "*.svg";

declare module "@/assets/*" {
  const content: any;
  export default content;
}
