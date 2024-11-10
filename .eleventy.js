import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
  // Add WebC plugin
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc"
  });

  // Change default layout to WebC version
  eleventyConfig.addGlobalData("layout", "layouts/index.webc");

  return {
    dir: {
      input: "src",
      output: "resume",
      includes: "_includes"
    }
  };
}
