import styles from "./ContributionPageSucess.module.css";

const ContributionPageSucess = () => {
  return (
    <div className={styles.contributionPageSucess}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.downCircleIcon}
          alt=""
          src="../downcircle1.svg"
        />
        <b className={styles.vbsDao}>VB’S DAO</b>
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat1.svg"
        />
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
            <div className={styles.itemFirst}>EXPLORE</div>
            <div className={styles.itemFirst}>MY DAOs</div>
            <div className={styles.itemFirst}>MY CONTRIBUTIONS</div>
            <div className={styles.itemFour}>Item four</div>
            <div className={styles.itemFour}>Item five</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame1.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameInner} alt="" src="../frame-441.svg" />
      </nav>
      <div className={styles.contributionOverviewParent}>
        <b className={styles.contributionOverview}>Contribution Overview</b>
        <div className={styles.vectorIcon}></div>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.cidQmyt1rulmhqh6xdxlg62kljn2}>
          <span className={styles.cidQmyt1rulmhqh6xdxlg62kljn21}>
            <p className={styles.fileSize}>
              Cid: QmYT1RuLmhqh6xdXLG62kLjn2G513nHiWmuy6j6vm5QT5H
            </p>
            <p className={styles.fileSize}>File size : 2 MB</p>
            <p className={styles.reward002}>Reward : 0.02 tFIL</p>
          </span>
        </div>
        <div className={styles.dragDrop}>{`Drag & drop or upload`}</div>
        <img className={styles.imageAltIcon} alt="" src="../imagealt.svg" />
        <img className={styles.image9Icon} alt="" src="../image-91@2x.png" />
      </div>
    </div>
  );
};

export default ContributionPageSucess;
