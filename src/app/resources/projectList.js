import robotStop from "./robot-stop-screenshot.png";
import jammming from "./jammming-screenshot.png";

const projectList = [
  {
    name: "RobotStop (for Reddit)",
    type: "React App",
    description: [
      "Browse Reddit posts and comments by swiping left and right, filter by subreddit and popular/new.",
      "Uses Reddit's json API."
    ],
    thumbnail: robotStop,
    altText: "Reddit browsing app - Posts can be swiped sideways",
    url: "https://gammagrey.github.io/robot-stop-for-reddit",
    repo: "https://github.com/gammaGrey/robot-stop-for-reddit",
  },

  {
    name: "Jammming",
    type: "React App",
    description: [
      "Make playlists by searching for songs and save them to your Spotify account.",
      "Uses Spotify Web API.",
      "Requires a Spotify account to use. You will be prompted to login when the app starts."
    ],
    thumbnail: jammming,
    altText: "Spotify web app for making playlists",
    url: "https://gammagrey.github.io/jammming/",
    repo: "https://github.com/gammaGrey/jammming",
  },

  {
    name: "Mixed Messages",
    type: "JavaScript",
    description: ["Generate mad-lib messages randomly from an object containing phrases."],
    repo: "https://github.com/gammaGrey/Mixed_Messages",
  },

  {
    name: "Tax Calculator (UK)",
    type: "JavaScript",
    description: ["Breaks down tax on annual income, taking student loan deductions into account."],
    repo: "https://github.com/gammaGrey/Tax_Calculator",
  }
];

export default projectList;