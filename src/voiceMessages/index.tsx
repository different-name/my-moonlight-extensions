import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#patching
export const patches: ExtensionWebExports["patches"] = [
  {
    find: /"Ignore",/g,
    replace: {
      match: /"Ignore",/g,
      replacement: '"Move on to the next day",'
    }
  }
];

// https://moonlight-mod.github.io/ext-dev/webpack/#webpack-module-insertion
export const webpackModules: ExtensionWebExports["webpackModules"] = {
  entrypoint: {
    dependencies: [
      {
        ext: "voiceMessages",
        id: "someLibrary"
      }
    ],
    entrypoint: true
  },

  someLibrary: {
    // Keep this object, even if it's empty! It's required for the module to be loaded.
  }
};
