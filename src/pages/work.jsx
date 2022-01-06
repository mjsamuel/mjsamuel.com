import * as React from "react";
import { Link } from "gatsby";
import { tColors } from "../shared";
import Layout from "../components/layout.jsx";
import Visualization from "../components/visualization";

class WorkPage extends React.Component {
  render() {
    return (
      <Layout title="About">
        <Visualization animation="SPIRAL" name="pts" />
      </Layout>
    );
  }
}

export default WorkPage;
