import { Button } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";
import styles from "./PAYTOGENERATE.module.css";
import { Link } from "react-router-dom";

const PAYTOGENERATE = () => {
  return (
    <div className={styles.payToGenerate}>
      <div className={styles.payToGenerateChild} />
      <div className={styles.vbsDaoAContainer}>
        <span className={styles.vbsDaoAContainer1}>
          <p className={styles.vbsDao}>
            <b>{`VB’s DAO `}</b>
          </p>
          <p className={styles.aDaoThatCollectedImagesOf}>
            <span>
              A DAO that collected images of Vitalik Buterin to honour his
              contribution to the revolution. This model will give you best
              posters to inspire you!
            </span>
          </p>
        </span>
      </div>
      <i className={styles.doYouWant}>Do you want to use this model?</i>
      <Link to="/output-QmYT1RuLmhqh6xdXLG62kLjn2G513nHiWmuy6j6vm5QT5H">
        <Button
          className={styles.buttonsolidTextAndIcon}
          variant="solid"
          w="391px"
          style={{ backgroundColor: "#D8FEE4" }}
          leftIcon={<UnlockIcon />}
        >
          Confirm and pay (0.3 tFIL)
        </Button>
      </Link>

      <div className={styles.image2Parent}>
        <img className={styles.image2Icon} alt="" src="../image-22@2x.png" />
        <img className={styles.image3Icon} alt="" src="../image-33@2x.png" />
        <img className={styles.image4Icon} alt="" src="../image-43@2x.png" />
        <img className={styles.image8Icon} alt="" src="../image-83@2x.png" />
        <img className={styles.image5Icon} alt="" src="../image-53@2x.png" />
        <img className={styles.image6Icon} alt="" src="../image-62@2x.png" />
        <img className={styles.image7Icon} alt="" src="../image-72@2x.png" />
        <img className={styles.image9Icon} alt="" src="../image-92@2x.png" />
        <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
      </div>
      <nav className={styles.lightLogoLeft5LinksCeParent}>
        <div className={styles.lightLogoLeft5LinksCe}>
          <div className={styles.headerBg} />
          <img
            className={styles.iconOutlinedActionMai}
            alt=""
            src="../icon--outlined--action--main--menu.svg"
          />
          <div className={styles.companyLogo}>
            <b className={styles.logo}>logo</b>
          </div>
          <div className={styles.links}>
            <b className={styles.itemFirst}>EXPLORE</b>
            <div className={styles.itemTwo}>MY DAOs</div>
            <div className={styles.itemThree}>CONTRIBUTE</div>
            <div className={styles.itemFour}>Item four</div>
            <div className={styles.itemFour}>Item five</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame26.svg" />
          <i className={styles.address}>0xCafa...1fD0</i>
        </div>
        <img className={styles.frameItem} alt="" src="../frame-444.svg" />
      </nav>
      <div className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <b className={styles.vbsDao1}>VB’S DAO</b>
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat9.svg"
        />
      </div>
    </div>
  );
};

export default PAYTOGENERATE;
