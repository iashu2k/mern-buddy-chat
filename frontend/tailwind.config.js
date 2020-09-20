module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        friends: "url('https://source.unsplash.com/UmV2wr-Vbq8/1600x900')",
      }),
      fontFamily: {
        body: ["Raleway"],
      },
    },
  },
  variants: {},
  plugins: [],
};
