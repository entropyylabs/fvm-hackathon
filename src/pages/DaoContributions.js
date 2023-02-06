import { Progress } from "@chakra-ui/react";
import styles from "./DaoContributions.module.css";
import { useState } from "react";

const ContributionPageDupes1 = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className={styles.contributionPageDupes}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
          <div className={styles.frameItem} />
          <img className={styles.flagIcon} alt="" src="../flag12.svg" />
          <div className={styles.byJohnDoe}>by John Doe</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleDiv} />
          <img className={styles.flagIcon} alt="" src="../flag12.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleDiv} />
          <img className={styles.flagIcon} alt="" src="../flag12.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
          <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleDiv} />
          <img className={styles.flagIcon3} alt="" src="../flag.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
          <div className={styles.frameChild} />
          <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild} />
          <img className={styles.flagIcon3} alt="" src="../flag.svg" />
          <div className={styles.byJohnDoe1}>by John Doe</div>
          <img className={styles.image10Icon} alt="" src="../image-10@2x.png" />
          <img className={styles.image11Icon} alt="" src="../image-11@2x.png" />
          <img
            className={styles.flagIcon3}
            alt=""
            style={{ zIndex: 1000 }}
            onClick={() => setFlag(!flag)}
            src={!flag ? "../flag.svg" : "../flag15.svg"}
          />
        </div>
        <div className={styles.frameChild15} />
        <div className={styles.nowYouCan}>
          Now, you can review the contribution of your peers to fine tune the
          inputs!
        </div>
        <b className={styles.collectionDetails}>Collection Details</b>
        <b className={styles.daoPerformance}>DAO Performance</b>
        <b className={styles.storageBounties}>
          <span className={styles.storageBountiesTxtContainer}>
            <span className={styles.storage}>{`Storage `}</span>bounties
          </span>
        </b>
        <b className={styles.members}>Members</b>
        <div className={styles.vectorIcon}></div>
        <div className={styles.frameChild16}></div>
        <div className={styles.frameChild17}></div>
        <div className={styles.frameChild18}></div>
        <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
        <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
        <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
        <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
        <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
        <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.frameChild19} />
        <b className={styles.vbsDao}>VB’S DAO</b>
        <img className={styles.downCircleIcon} alt="" src="../downcircle.svg" />
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat2.svg"
        />
        <div className={styles.groupDiv}>
          <div className={styles.groupChild} />
          <div className={styles.makeYourContribution}>
            Make your contribution
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent7}>
        <div className={styles.frameChild20} />
        <div className={styles.contributions}>{`Contributions `}</div>
        <div className={styles.div}>2000/5000</div>
        <Progress
          className={styles.progressdefault}
          w="1159px"
          value={30}
          colorScheme="teal"
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
          <img className={styles.ellipseIcon} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame2.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameChild21} alt="" src="../frame-442.svg" />
      </nav>
    </div>
  );
};

export default ContributionPageDupes1;
