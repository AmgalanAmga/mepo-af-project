import classes from "../../assets/styles/header.module.scss";
import { useContext } from "react";
import logo from "../../assets/images/white 2.png";
import { GlobalContext } from "../../context/GlobalContext";
import { AiOutlineClose } from "react-icons/ai";
export const MenuVetical = ({ headervermenu, headervermenu2, state }) => {
  const { setIsLoginOpen } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
  };
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        gap: "30px",
      }}
    >
      <img src={logo} className={classes.header_box_logo} alt="mepo_afiphone" />

          <div style={{ background:"transparent", color: "$ligth", paddingLeft:"10px", paddingTop:"10px"}}>
            <div onClick={state}>
              <AiOutlineClose />
            </div>
          </div>
      <div style={{ paddingTop: "30px" }}>
        {headervermenu.map((props, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            <ul>
              <li>
                <a href={props.path_1}>{props.title_1}</a>
              </li>
              <li>
                <a href={props.path_2}>{props.title_2}</a>
              </li>
              <li>
                <a href={props.path_3}>{props.title_3}</a>
              </li>
            </ul>
          </div>
        ))}
        {headervermenu2.map((props, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px",
              gap: "12px",
            }}
          >
            <div className={classes.header_box_button}>
              <span>{props.title_5}</span>
              <span>{props.title_6}</span>
            </div>

            <div className={classes.header_box_button}>{props.title_7}</div>
            <div className={classes.header_box_button} onClick={openLoginComp}>{props.title_8}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
