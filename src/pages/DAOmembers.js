import { Link } from "react-router-dom";
import styles from "./DAOPageAsAMemberMember.module.css";

const DAOPageAsAMemberMember = () => {
  return (
    <div className={styles.daoPageAsAMemberMember}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.owners}>Owners</b>
        <b className={styles.volunteers}>Volunteers</b>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <img className={styles.frameIcon} alt="" src="../frame7.svg" />
            <b className={styles.johnDoe}>Dorthy </b>
            <i className={styles.owner}>{`Owner  `}</i>
          </div>
          <div className={styles.ellipseGroup}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Sawyer </b>
            <i className={styles.checker}>{`Owner `}</i>
            <img className={styles.frameIcon1} alt="" src="../frame8.svg" />
          </div>
          <div className={styles.johnDoeParent}>
            <b className={styles.johnDoe1}>Purdie Leyton</b>
            <i className={styles.checker}>{`Checker `}</i>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <img className={styles.frameIcon2} alt="" src="../frame9.svg" />
          </div>
          <div className={styles.ellipseContainer}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <img className={styles.frameIcon} alt="" src="../frame10.svg" />
            <b className={styles.johnDoe1}>Jemmy Randell</b>
            <i className={styles.checker}>Owner</i>
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <img className={styles.frameIcon} alt="" src="../frame11.svg" />
            <b className={styles.johnDoe1}>Julia Taylor</b>
            <i className={styles.checker}>Owner</i>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <img className={styles.frameIcon} alt="" src="../frame12.svg" />
            <b className={styles.johnDoe1}>Sophy Kendrick</b>
            <i className={styles.checker}>contributions : 6</i>
          </div>
          <div className={styles.ellipseParent2}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Phillis </b>
            <i className={styles.checker}>Contributions : 4</i>
            <img className={styles.frameIcon} alt="" src="../frame13.svg" />
          </div>
          <div className={styles.johnDoeParent}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>John Doe</b>
            <i className={styles.checker}>Contributions : 4</i>
            <img className={styles.frameIcon} alt="" src="../frame14.svg" />
          </div>
          <div className={styles.ellipseContainer}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Tammy </b>
            <i className={styles.checker}>Contributions : 2</i>
            <img className={styles.frameIcon} alt="" src="../frame15.svg" />
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Grace Hibbert</b>
            <i className={styles.checker}>Contributions : 1</i>
            <img className={styles.frameIcon} alt="" src="../frame16.svg" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Ali</b>
            <i className={styles.checker}>Contributions : 2</i>
            <img className={styles.frameIcon} alt="" src="../frame17.svg" />
          </div>
          <div className={styles.ellipseParent2}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Craig</b>
            <i className={styles.checker}>Contributions : 1</i>
            <img className={styles.frameIcon} alt="" src="../frame18.svg" />
          </div>
          <div className={styles.johnDoeParent}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Alex</b>
            <i className={styles.checker}>Contributions : 3</i>
            <img className={styles.frameIcon} alt="" src="../frame19.svg" />
          </div>
          <div className={styles.ellipseContainer}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Danny</b>
            <i className={styles.checker}>Contributions : 4</i>
            <img className={styles.frameIcon} alt="" src="../frame20.svg" />
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
            <b className={styles.johnDoe1}>Sergrey</b>
            <i className={styles.checker}>Contributions : 1</i>
            <img className={styles.frameIcon} alt="" src="../frame21.svg" />
          </div>
        </div>
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
        <div className={styles.vectorIcon}></div>
        <div className={styles.frameChild13}></div>
        <div className={styles.frameChild14}></div>
        <div className={styles.frameChild15}></div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.vbsDaoAims}>
            VB’s DAO aims to honour the creater of Etherum by collecting images
            of him to create a fine tuned AI model
          </div>
          <img
            className={styles.emojiGoatIcon}
            alt=""
            src="../-emoji-goat5.svg"
          />
          <b className={styles.vbsDao}>
            <span className={styles.storageBountiesTxtContainer}>
              <p className={styles.vbs}>{`VB’s `}</p>
              <p className={styles.dao}>DAO</p>
            </span>
          </b>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.makeYourContribution}>
            Make your contribution
          </div>
          <div className={styles.quit}>Quit</div>
        </div>
        <img
          className={styles.downCircleIcon}
          alt=""
          src="../downcircle3.svg"
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
        <div className={styles.ellipseParent11}>
          <img className={styles.frameItem} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame22.svg" />
          <i className={styles.address}>0xCafa...1fD0</i>
        </div>
        <img className={styles.frameChild17} alt="" src="../frame-442.svg" />
      </nav>
    </div>
  );
};

export default DAOPageAsAMemberMember;
