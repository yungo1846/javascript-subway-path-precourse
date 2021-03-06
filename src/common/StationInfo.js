export const stations = [
  { name: "교대" },
  { name: "강남" },
  { name: "역삼" },
  { name: "남부터미널" },
  { name: "양재" },
  { name: "매봉" },
  { name: "양재시민의숲" },
  { name: "아현" }, // island node to test none connected stations
];

// sections: [출발역, 다음역, 거리, 소요시간]
export const lines = [
  {
    name: "2호선",
    sections: [
      ["교대", "강남", 2, 3],
      ["강남", "역삼", 2, 3],
    ],
  },
  {
    name: "3호선",
    sections: [
      ["교대", "남부터미널", 3, 2],
      ["남부터미널", "양재", 6, 5],
      ["양재", "매봉", 1, 1],
    ],
  },
  {
    name: "신분당선",
    sections: [
      ["강남", "양재", 2, 8],
      ["양재", "양재시민의숲", 10, 3],
    ],
  },
];
