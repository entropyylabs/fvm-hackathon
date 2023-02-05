import { Input } from "@chakra-ui/react";
import styles from "./SHOWTHEOUTPUT.module.css";

const SHOWTHEOUTPUT = () => {
  return (
    <div className={styles.showTheOutput}>
      <Input
        className={styles.inputoutline}
        variant="outline"
        width="1151px"
        borderColor="#262626"
        size="lg"
        placeholder="Input"
        w="1151px"
      />
      <i className={styles.enterPromptHere}>Enter prompt here</i>
      <div className={styles.showTheOutputChild} />
      <div className={styles.showTheOutputItem} />
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
            <div className={styles.itemFirst}>EXPLORE</div>
            <div className={styles.itemTwo}>MY DAOs</div>
            <div className={styles.itemFirst}>CONTRIBUTE</div>
            <div className={styles.itemFour}>Item four</div>
            <div className={styles.itemFour}>Item five</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame5.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameItem} alt="" src="../frame-443.svg" />
      </nav>
      <div className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <b className={styles.vbsDao}>VB’S DAO</b>
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat3.svg"
        />
      </div>
    </div>
  );
};

export default SHOWTHEOUTPUT;
