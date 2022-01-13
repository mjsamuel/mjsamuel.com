import * as React from "react";
import { Link } from "gatsby";
import { tColors } from "../shared";
import Layout from "../components/layout.jsx";
import Visualization from "../components/visualization";
const links = [
  {
    name: "RESUME",
    url: "/resume.pdf",
  },
  {
    name: "GITHUB",
    url: "https://github.com/mjsamuel",
  },
  {
    name: "INSTAGRAM",
    url: "https://www.instagram.com/matt.samuel/",
  },
  {
    name: "LINKEDIN",
    url: "https://au.linkedin.com/in/matt-samuel",
  },
];

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className="h-screen p-6 md:p-12 text-green grid gap-16 grid-cols-2">
          <div className="flex flex-row-reverse items-center">
            <h1 className="text-6xl font-bold text-right">DORK WITH A<br/>KEYBOARD</h1>
          </div>
          <div className="flex items-center">
            <div className="h-4/5 w-3/5">
              <Visualization animation="SOLID" />
            </div>
          </div>
        </div>
        <div className="-mt-12 px-96">
          <h1>Hello, world</h1>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            quas obcaecati suscipit quia aliquid nostrum, animi accusantium.
            Quis eos voluptate architecto repellendus distinctio animi
            recusandae fuga possimus aliquid, veritatis expedita nihil sit
            reiciendis sequi, excepturi dolor? Maiores necessitatibus nihil
            repellendus adipisci unde atque pariatur, officia voluptates illum
            molestias possimus numquam, blanditiis, saepe itaque maxime
            voluptatem sint eius vel explicabo! Eaque, dolor, sit autem possimus
            impedit dolore rem sapiente quasi facilis fuga beatae ratione quod
            quaerat ea quibusdam saepe officia amet hic. Ipsam iusto unde earum
            similique labore officiis iste et ipsum, in dolorem omnis fugit
            dicta tempora dolorum voluptatibus cum saepe at sapiente accusamus
            voluptate quasi aspernatur? Est voluptatum, architecto totam dolorem
            doloremque vitae quos esse unde nulla. Sequi odit voluptatum sit
            adipisci reprehenderit quisquam aliquam suscipit sunt quos, deleniti
            iste expedita assumenda esse maiores possimus cum impedit similique
            eos. Deleniti tempora, natus quo magni molestias quaerat atque ex
            expedita.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
