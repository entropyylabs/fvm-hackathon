import { Progress } from "@chakra-ui/react";
import styles from "./ContributionPageDupes2.module.css";

const ContributionPageDupes2 = () => {
  return (
    <div className={styles.contributionPageDupes}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img className={styles.flagIcon} alt="" src="../flag22.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img className={styles.flagIcon} alt="" src="../flag23.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img className={styles.flagIcon} alt="" src="../flag23.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameItem} />
          <textarea className={styles.rectangleTextarea} />
          <img className={styles.flagIcon3} alt="" src="../flag25.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag26.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag26.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag25.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag26.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag26.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.frameChild14} />
        <b className={styles.yourContributionHas}>
          Your contribution has been added!
        </b>
        <div className={styles.nowYouCan}>
          Now, you can review the contribution of your peers to fine tune the
          inputs!
        </div>
        <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.frameChild15} />
        <b className={styles.kittyDao}>KITTY DAO</b>
        <img
          className={styles.emojiCatFace}
          alt=""
          src="../-emoji-cat-face1.svg"
        />
        <img
          className={styles.downCircleIcon}
          alt=""
          src="../downcircle5.svg"
        />
      </div>
      <div className={styles.contributionPageDupesChild} />
      <div className={styles.contributions}>{`Contributions `}</div>
      <div className={styles.div}>2000/5000</div>
      <Progress
        className={styles.progressdefault}
        w="1159px"
        value={30}
        colorScheme="teal"
      />
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
            <div className={styles.itemFirst}>MY CONTRIBUTIONS</div>
            <div className={styles.itemFour}>Item four</div>
            <div className={styles.itemFour}>Item five</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame27.svg" />
          <i className={styles.address}>0xCafa...1fD0</i>
        </div>
        <img className={styles.frameChild16} alt="" src="../frame-449.svg" />
      </nav>
    </div>
  );
};

export default ContributionPageDupes2;
