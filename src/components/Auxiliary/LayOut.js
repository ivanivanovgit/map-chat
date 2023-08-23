import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Constants } from "../../CONSTANTS";

const linksArray = [
  { name: "Главная", id: 0, href: "/" },
  { name: "Чат на карте", id: 1, href: "/chat-na-karte" },
  {
    name: "Passing cars",
    id: 2,
    href: "/passing-cars",
  },
  { name: "Telegram channels", id: 3, href: "/telegram" },
  ,
  { name: "Blog", id: 4, href: "/my-blog" },
  ,
];

const LayOut = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          minHeight: `calc(100vh - ${Constants.footerHeight})`,
          backgroundColor: Constants.LayoutColor,
        }}
      >
        <Header links={linksArray} />
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default LayOut;