// Ambient declaration so TypeScript resolves side-effect CSS imports
// (e.g. `import "./globals.css"`). Next.js normally provides this via its
// bundled types, but the editor's TS server can miss it — this makes it explicit.
declare module "*.css";
