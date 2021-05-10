export const components = {
    components: {
      Button: {
        baseStyle: {
          color: 'white',
        },
        variants: {
          "with-shadow": {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
          },
          solid: (props: any) => ({
            bg: props.colorMode === "dark" ? "red.300" : "blue.500",
          }),
        },
      },
    },
  }