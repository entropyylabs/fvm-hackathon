import styles from "./ContributionPageSucess1.module.css";

const ContributionPageSucess1 = () => {
  return (
    <div className={styles.contributionPageSucess}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.downCircleIcon}
          alt=""
          src="../downcircle6.svg"
        />
        <b className={styles.vbsDao}>VB’S DAO</b>
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat8.svg"
        />
      </div>
      <b className={styles.contributionOverview}>Contribution Overview</b>
      <img
        className={styles.contributionPageSucessChild}
        alt=""
        src="../vector-3.svg"
      />
      <div className={styles.contributionPageSucessItem} />
      <div className={styles.contributionPageSucessInner} />
      <div className={styles.rulesFeugiatContainer}>
        <span className={styles.rulesFeugiatContainer1}>
          <p className={styles.rules}>Rules :</p>
          <ul className={styles.feugiatDiamVelEstRisusCom}>
            <li
              className={styles.feugiatDiamVel}
            >{`Feugiat diam vel est risus commodo - `}</li>
            <li className={styles.feugiatDiamVel}>
              {" "}
              egestas amet id. Dui eu nunc
            </li>
            <li
              className={styles.feugiatDiamVel}
            >{` pellentesque ante aliquam leo dictum. `}</li>
            <li
              className={styles.feugiatDiamVel}
            >{`Adipiscing in montes in vel senectus `}</li>
            <li className={styles.feugiatDiamVel}>
              elementum metus vestibulum feugiat.
            </li>
            <li> Accumsan lectus morbi dictum id.</li>
          </ul>
        </span>
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
          <img className={styles.frameIcon} alt="" src="../frame25.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameInner} alt="" src="../frame-449.svg" />
      </nav>
    </div>
  );
};

export default ContributionPageSucess1;
