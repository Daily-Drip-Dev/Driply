import { graphql, HttpResponse } from "msw";

const handlers = [
  graphql.query("GetCoffeeList", () => {
    const coffeeList = [
      {
        id: "1",
        title: "아이스 아메리카노",
        score: 7,
        img_url: "",
        created_at: "2024-12-01T12:34:56Z",
      },
      {
        id: "2",
        title: "따듯한 라떼",
        score: 9,
        img_url: "",
        created_at: "2024-12-02T15:30:00Z",
      },
    ];

    return HttpResponse.json({
      data: {
        coffeeCollection: {
          edges: coffeeList.map((coffee) => ({
            node: coffee,
          })),
        },
      },
    });
  }),
];

export default handlers;
