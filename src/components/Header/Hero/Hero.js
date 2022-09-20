import { useContext } from "react";
import { MediaContext } from "../../../App";
import TextBox from "../../TextBox/TextBox";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import Button from "../../Button/Button";
import HeroImageDesktop from "../../../assets/image-intro-desktop.jpg";
import HeroImageMobile from "../../../assets/image-intro-mobile.jpg";
import AccentLeftDesktop from "../../../assets/bg-pattern-intro-left-desktop.svg";
import AccentLeftMobile from "../../../assets/bg-pattern-intro-left-mobile.svg";
import AccentRightDesktop from "../../../assets/bg-pattern-intro-right-desktop.svg";
import AccentRightMobile from "../../../assets/bg-pattern-intro-right-mobile.svg";
import classes from "./Hero.module.css";
const Hero = (props) => {
  const isDekstop = useContext(MediaContext);

  return (
    <div className={classes.hero}>
      <TextBox>
        {isDekstop && <div className={classes.separator}/>}
        <Title color="light" type="big">
          Humanizing your insurance.
        </Title>
        <Paragraph color="light">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </Paragraph>
        <Button color="light">View Plans</Button>
        {!isDekstop && (
          <>
            <img className={classes.accentLeft} src={AccentLeftMobile} alt="" />
            <img
              className={classes.accentRight}
              src={AccentRightMobile}
              alt=""
            />
          </>
        )}
      </TextBox>

      <div className={classes.imageBox}>
        <img
          src={isDekstop ? HeroImageDesktop : HeroImageMobile}
          alt="A dad and mom with two young children holding hands on a sidewalk in the rain"
        />
      </div>
      {isDekstop && (
        <>
          <img className={classes.accentLeft} src={AccentLeftDesktop} alt="" />
          <img
            className={classes.accentRight}
            src={AccentRightDesktop}
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Hero;
