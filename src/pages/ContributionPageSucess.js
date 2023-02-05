import { Progress } from "@chakra-ui/react";
import styles from "./ContributionPageSucess.module.css";

const ContributionPageSucess = () => {
  return (
    <div className={styles.contributionPageSucess}>
      <div className={styles.aboutDao}>About DAO</div>
      <div className={styles.dragDrop}>{`Drag & drop or upload`}</div>
      <div className={styles.onlyJpegCsv}>
        Only jpeg, csv and all files accepted
      </div>
      <img className={styles.imageAltIcon} alt="" src="../imagealt3.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.vbsDao}>VB’S DAO</b>
        <img
          className={styles.downCircleIcon}
          alt=""
          src="../downcircle5.svg"
        />
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat7.svg"
        />
      </div>
      <div className={styles.contributionPageSucessChild} />
      <b className={styles.uploadYourContribution}>Upload your contribution</b>
      <img
        className={styles.contributionPageSucessItem}
        alt=""
        src="../vector-3.svg"
      />
      <Progress
        className={styles.progressdefault}
        w="1214px"
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
          <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame24.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameInner} alt="" src="../frame-449.svg" />
      </nav>
    </div>
  );
};

export default ContributionPageSucess;
