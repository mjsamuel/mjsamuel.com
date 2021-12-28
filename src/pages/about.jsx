import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.jsx";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout title="About">
        <Link to="/">
          <div className="text-2xl font-medium fixed top-12 right-12 hover:italic">
            HOME
          </div>
        </Link>

        <section className="grid gap-8 grid-cols-2 h-full">
          <div className="">
            <div className="flex flex-col justify-end h-1/2">
              <h1 class="text-8xl text-right font-bold">Hi, I'm Matt</h1>
            </div>

            <div className="flex flex-col justify-end items-center text-2xl font-medium h-1/2 ">
              <div className="leading-6 p-16">
                Developer.
                <br />
                Tech enthusiast.
                <br />
                Dork.
              </div>
            </div>
          </div>

          <div></div>
        </section>

        <div className="flex flex-col items-center">
          <section className="w-3/4 md:w-1/2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus modi voluptas quidem blanditiis. Ex non saepe
              minima doloribus iste adipisci, est vel praesentium laboriosam,
              iure soluta excepturi aspernatur itaque repellendus, architecto
              placeat eius animi aperiam minus consectetur quidem fugit nihil.
              Consequuntur molestiae quia optio, repudiandae pariatur fugiat
              perspiciatis autem aliquid aliquam soluta ea quis, illum harum
              voluptatem velit nobis nemo illo? Eveniet cumque omnis impedit
              nihil. Inventore maiores quidem neque possimus sint dolores libero
              laboriosam illum commodi vitae accusamus necessitatibus molestias
              veniam ratione eaque natus debitis cumque voluptatibus soluta iure
              ullam labore, ipsa culpa rerum? Quaerat earum incidunt unde
              dolore?
            </p>
            <p>
              Illum quas consectetur quia, doloribus impedit deleniti?
              Cupiditate enim necessitatibus provident dolor magnam nam, error
              dolore debitis quia. Consectetur, dolorem consequuntur doloremque
              pariatur veritatis dicta totam sunt tempore odit enim voluptates
              sint nemo voluptatibus recusandae quis nesciunt voluptatem quam
              veniam laborum hic beatae odio laboriosam? Expedita fuga ipsum eos
              animi, repellat reprehenderit aliquam ut doloremque in
              praesentium? Maxime repellat quod beatae autem ipsa repellendus
              culpa nemo error quas enim, tenetur praesentium deserunt totam
              quae mollitia nihil exercitationem magnam, sed expedita ducimus
              quos ex incidunt. Eius laboriosam quia labore soluta perferendis,
              dolore placeat veritatis sit ut, hic quisquam, odit illo
              aspernatur.
            </p>
            <p>
              Ipsa, quod nisi! Ab quas ad error quisquam minus in maxime
              sapiente unde quo repudiandae ut beatae possimus veritatis,
              dolorum debitis! Natus voluptatibus repudiandae libero eum
              corporis non quibusdam perspiciatis temporibus, voluptatum
              explicabo blanditiis nobis ullam voluptate est deleniti placeat
              pariatur odio cupiditate similique dicta iste facere praesentium
              quo amet! In sunt, repellendus tempore ipsa consequatur nostrum
              dolores, reiciendis quaerat quibusdam laudantium quae sapiente vel
              voluptas vitae, minus animi! Quo unde quam quidem nisi aliquam,
              cum cumque fugiat maiores pariatur? Eos consequuntur molestias
              impedit, maiores error ad sint minima doloremque. Optio ducimus
              eligendi atque ipsa velit. Laborum sunt molestias sint?
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
