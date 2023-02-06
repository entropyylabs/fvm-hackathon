import { Input, Button } from "@chakra-ui/react";
import styles from "./SHOWTHEOUTPUT.module.css";
import { useState } from "react";

const SHOWTHEOUTPUT = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 5000);
  };

  return (
    <div className={styles.showTheOutput}>
      <img
        src="../vitalik.png"
        className={styles.outputImage}
        style={{ display: show ? "block" : "none" }}
        alt=""
        srcset=""
      />
      <Input
        className={styles.inputoutline}
        variant="outline"
        width="1151px"
        borderColor="#262626"
        size="lg"
        placeholder="Input"
        w="1151px"
        style={{ zIndex: 100 }}
      />
      <Button
        isLoading={loading}
        loadingText="Generating"
        textColor="#262626"
        onClick={() => generate()}
        className={styles.generateButton}
      >
        Generate
      </Button>
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
            <div className={styles.itemFirst}>MY DAOs</div>
            <div className={styles.itemFirst}>CONTRIBUTE</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame5.svg" />
          <i className={styles.address}>0xCafa...1fD0</i>
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
