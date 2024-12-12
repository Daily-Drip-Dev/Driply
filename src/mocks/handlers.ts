import { graphql, HttpResponse } from "msw";

const handlers = [
  graphql.query("GetCoffeeList", () => {
    const coffeeList = [
      {
        title: "아이스 아메리카노",
        score: 7,
        img_url: "",
        created_at: "2024-12-01T12:34:56Z",
      },
      {
        title: "따듯한 라떼",
        score: 9,
        img_url: "https://via.placeholder.com/60",
        created_at: "2024-12-02T15:30:00Z",
      },
    ];

    Math.floor(Math.random() * 10) < 5;

    return HttpResponse.json({
      data: {
        coffeeCollection: {
          edges:
            Math.floor(Math.random() * 10) < 5
              ? Array.from({ length: 10 }, () => [...coffeeList])
                  .flatMap((v) => v)
                  .map((coffee, idx) => ({
                    node: { ...coffee, id: idx },
                  }))
              : [],
        },
      },
    });
  }),
];

export default handlers;
