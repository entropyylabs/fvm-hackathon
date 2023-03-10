import styles from "./DAOPageAsAMemberCOLLE.module.css";
import { Link } from "react-router-dom";

const DAOPageAsAMemberCOLLE = () => {
  return (
    <div className={styles.daoPageAsAMemberColle}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.vbsDaoAims}>
            VB’s DAO aims to honour the creater of Etherum by collecting images
            of him to create a fine tuned AI model
          </div>
          <img
            className={styles.emojiGoatIcon}
            alt=""
            src="../-emoji-goat6.svg"
          />
          <b className={styles.vbsDao}>
            <span className={styles.vbsDaoTxtContainer}>
              <p className={styles.vbs}>{`VB’s `}</p>
              <p className={styles.dao}>DAO</p>
            </span>
          </b>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.makeYourContribution}>
            <Link to="/contribute">Make your contribution</Link>
          </div>
          <div className={styles.quit}>Quit</div>
        </div>
        <img
          className={styles.downCircleIcon}
          alt=""
          src="../downcircle4.svg"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <b className={styles.collectionDetails}>
          <Link to="/dao-page"> Collection Details</Link>
        </b>
        <b className={styles.daoPerformance}>
          <Link to="/dao-contributions"> DAO Performance</Link>
        </b>
        <b className={styles.storageBounties}>
          <span className={styles.vbsDaoTxtContainer}>
            <Link to="/storage-bounties">
              <span className={styles.storage}>{`Storage `}</span>bounties
            </Link>
          </span>
        </b>
        <b className={styles.members}>
          <Link to="/dao-members">Members</Link>
        </b>
        <div
          className={styles.contributionPageSucessItem}
          style={{ height: "2px" }}
        ></div>
        <div className={styles.frameInner} alt="" src="../vector-10.svg"></div>
        <div className={styles.vectorIcon} alt="" src="../vector-10.svg"></div>
        <div className={styles.frameChild1} alt="" src="../vector-10.svg"></div>
        <img className={styles.frameChild2} alt="" src="../vector-8.svg" />
        <div className={styles.vbsDaoAimsContainer}>
          <span className={styles.vbsDaoTxtContainer}>
            <p className={styles.vbs}>
              VB’s DAO aims to honour the creater of Etherum by collecting
              images of him to create a fine tuned AI model.
            </p>
            <p className={styles.dao}>
              Let’s create the largest collection of images for him.
            </p>
          </span>
        </div>
        <div className={styles.rulesForContributionContainer}>
          <span className={styles.vbsDaoTxtContainer}>
            <p className={styles.vbs}>Rules for contribution :</p>
            <ul className={styles.imagesThatAreNotOfVitalik}>
              <li
                className={styles.imagesThatAre}
              >{`Images that are not of Vitalik will be discarded `}</li>
              <li
                className={styles.imagesThatAre}
              >{`Pixelated images will be discarded `}</li>
              <li
                className={styles.imagesThatAre}
              >{`Images of Vitalik’s face not seen will be discarded `}</li>
              <li
                className={styles.imagesThatAre}
              >{`Images with text on face will be discarded `}</li>
              <li>{`Images should represent the face of Vitalik in different angles `}</li>
            </ul>
          </span>
        </div>
        <div className={styles.referrenceImages}>Referrence Images</div>
        <img className={styles.image3Icon} alt="" src="../image-32@2x.png" />
        <img className={styles.image4Icon} alt="" src="../image-42@2x.png" />
        <img className={styles.image8Icon} alt="" src="../image-82@2x.png" />
        <img className={styles.image5Icon} alt="" src="../image-52@2x.png" />
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
          <img className={styles.frameIcon} alt="" src="../frame23.svg" />
          <i className={styles.address}>0xCafa...1fD0</i>
        </div>
        <img className={styles.frameChild3} alt="" src="../frame-44.svg" />
      </nav>
    </div>
  );
};

export default DAOPageAsAMemberCOLLE;
