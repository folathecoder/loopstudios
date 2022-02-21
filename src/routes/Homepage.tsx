import { FC } from "react";
// import { Helmet } from "react-helmet";

import { styled } from "@mui/styles";

const Header = styled("header")(({ theme }) => ({
  minHeight: "3rem",
  maxWidth: "100%",
  // backgroundColor: theme.palette.primary.main,
}));

const Homepage: FC = () => {
  return (
    <>
      {/* <Helmet htmlAttributes>
        <html lang="en" />
        <title>Hello from React Helmet</title>
        <meta name="description" content="Basic example" />
      </Helmet> */}
      <Header></Header>
      <div>
        <h1>Homepage is working!</h1>
      </div>
    </>
  );
};

export default Homepage;
