import esbuild from "esbuild";
import builtinModules from "builtin-modules";

const isProduction = process.argv.includes("production");

const external = [
  "obsidian",
  "electron",
  "codemirror",
  "@codemirror/state",
  "@codemirror/view",
  "@codemirror/commands",
  "@codemirror/language",
  "@codemirror/search",
  "@codemirror/autocomplete",
  "@codemirror/highlight",
  "@codemirror/history",
  "@codemirror/fold",
  "@codemirror/stream-parser",
  "@lezer/common",
  "@lezer/lr",
  ...builtinModules,
];

const ctx = await esbuild.context({
  entryPoints: ["main.ts"],
  bundle: true,
  outfile: "main.js",
  external,
  format: "cjs",
  target: "es2018",
  platform: "browser",
  sourcemap: isProduction ? false : "inline",
  minify: isProduction,
  logLevel: "info",
});

if (isProduction) {
  await ctx.rebuild();
  await ctx.dispose();
} else {
  await ctx.watch();
  console.log("Watching for changes...");
}
