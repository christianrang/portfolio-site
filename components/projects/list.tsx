import { personalsite_body } from "./pages/personalsite";
import { ProjectInfo } from "./cards";

export const projectsInfoList: Map<string, ProjectInfo> = new Map<string, ProjectInfo>([
    [
        "portfolio_site",
        {
            name: "Portfolio Site",
            github: "https://github.com/christianrang/portfolio-site",
            seeMoreLink: "/projects/portfolio_site",
            img: "http://via.placeholder.com/1920x1080",
            body: personalsite_body,
            pageUrl: "https://rang-corp.com",
            date: "2023-05-22",
            tldr: "This is the site you are visiting now. It is built using NextJS and Typescript. It is deployed using Vercel for cost efficient deployments",
            tags: ["NextJS", "Typescript", "Vercel"],
        },
    ],
    [
        "tictactoe",
        {
            name: "TicTacToe",
            github: "https://github.com/christianrang/nextjs-portfolio/tree/main/components/tictactoe",
            seeMoreLink: "/projects/tictactoe",
            img: "/tictactoe.gif",
            body: "",
            pageUrl: "https://portfolio.rang-corp.com/tictactoe",
            date: "2023-05-22",
            tldr: "A NextJS application built to play around with CSS and tracking various information and displaying it to the user.",
            tags: ["NextJS", "Typescript", "Vercel"],
        },
    ],
    [
        "sorter",
        {
            name: "Sorter",
            github: "https://github.com/christianrang/nextjs-portfolio/tree/main/components/sorter",
            seeMoreLink: "/projects/sorter",
            img: "http://via.placeholder.com/1920x1080",
            body: "Tempore vel doloremque ab et quo quas vero ea. Quis maiores corrupti quia. Est aperiam id animi sit quia vero sint.Est necessitatibus sed aliquid temporibus deserunt et aliquam. Aspernatur debitis doloribus non perspiciatis qui. Recusandae adipisci minima ea magnam optio. Magni corporis quos amet dignissimos. Aut qui magnam autem deserunt sunt doloremque quis ut. Et esse ipsam mollitia dignissimos aut vel aliquam et. Velit odio natus facilis suscipit. Architecto minus sit iure est minus. Atque occaecati cumque sit. Esse a aliquam omnis labore.Quia commodi in voluptatibus autem ex explicabo sit. Sunt non blanditiis rem nemo ea quisquam et. Laudantium illum et perferendis molestias iste nihil. Veniam aut veritatis eligendi voluptate. Totam asperiores consequatur totam assumenda. Sunt aut tempore soluta. Est vel et ut tempora error. Sequi dolorum similique maxime aut pariatur voluptatem. Minus eveniet quos sint explicabo eligendi quam quia provident.",
            pageUrl: "https://rang-corp.com",
            date: "2023-02-02",
            tldr: "",
        },
    ],
]);
