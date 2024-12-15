export default [
    {
      title: "Headers",
      items: [
        {
          title: "Header Secondaire",
          block: "h2",
          classes: "pagebody-header pagebody-header--secondary",
          wrapper: false,
          merge_siblings: false,
          exact: true,
          attributes: {
            "data-json": JSON.stringify({
              type: "header-secondary",
              level: 2,
            }),
          },
        },

        {
          title: "Header",
          block: "h2",
          classes: "pagebody-header",
          wrapper: false,
          merge_siblings: false,
          exact: true,
          attributes: {
            "data-json": JSON.stringify({ type: "header", level: 2 }),
          },
        },
      ],
    },

    {
      title: "Blocks",
      items: [
        {
          title: "p",
          block: "p",

          attributes: {
            "data-json": JSON.stringify({ type: "p" }),
          },
        },
      ],
    },

    {
      title: "Containers",
      items: [
        {
          title: "section",
          block: "section",
          wrapper: true,
          merge_siblings: false,
        },
        {
          title: "article",
          block: "article",
          wrapper: true,
          merge_siblings: false,
        },
        { title: "blockquote", block: "blockquote", wrapper: true },
        { title: "hgroup", block: "hgroup", wrapper: true },
        { title: "aside", block: "aside", wrapper: true },
        { title: "figure", block: "figure", wrapper: true },
      ],
    },
  ]