import { Data } from "../../components/data/productData";
import classes from "../../assets/styles/home.module.scss";
import { HomeScroll } from "./home-scroll";
import { HomeAnimation } from "./home-animation";
import { HomeSlide } from "./home-slider";

export const Home = () => {
  let homeData = [];
  // Data.forEach((el) => {
  //   if (el.homepage === "yes") {
  //     homeData.push(el);
  //   }
  // });
  // const specialData = homeData.slice(-5);
  // if (Data.length < 6) {
  //   specialData.shift();
  // }

  return (
    <div className={classes.home}>
      <h2 className={classes.home_text1}>A New Look at Fashion of the MEPO AF</h2>
      <p className={classes.home_text2}>EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE</p>
      <HomeSlide />
      <div className={classes.home_text2}> Our collections</div>
      <div id="animation" className={classes.home_scroll}>
        {/* <HomeAnimation /> */}
      </div>
      <div id="gridSrcoll" className={classes.home_grid}>
        {/* <HomeScroll scroll= {specialData} /> */}
      </div>
    </div>
  );
};
