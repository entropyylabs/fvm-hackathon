import { Progress } from "@chakra-ui/react";
import styles from "./StorageBounties.module.css";

const ContributionPageDupes = () => {
  return (
    <div className={styles.contributionPageDupes}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.collectionDetails}>Collection Details</b>
        <b className={styles.daoPerformance}>DAO Performance</b>
        <b className={styles.storageBounties}>
          <span className={styles.storageBountiesTxtContainer}>
            <span className={styles.storage}>{`Storage `}</span>bounties
          </span>
        </b>
        <b className={styles.members}>Members</b>
        <div className={styles.frameItem}></div>
        <div className={styles.frameInner}></div>
        <div className={styles.vectorIcon}></div>
        <div className={styles.frameChild1}></div>
      </div>
      <div className={styles.contributionPageDupesChild} />
      <div className={styles.contributions}>{`Contributions `}</div>
      <div className={styles.div}>2000/5000</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <b className={styles.vbsDao}>VB’S DAO</b>
        <img className={styles.downCircleIcon} alt="" src="../downcircle.svg" />
        <img className={styles.emojiGoatIcon} alt="" src="../-emoji-goat.svg" />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.makeYourContribution}>
            Make your contribution
          </div>
        </div>
      </div>
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
          <img className={styles.frameIcon} alt="" src="../frame.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameChild2} alt="" src="../frame-44.svg" />
      </nav>
    </div>
  );
};

export default ContributionPageDupes;
