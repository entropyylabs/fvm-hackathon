import styles from "./HomeExplore.module.css";
import { Link } from "react-router-dom";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const HomeExplore = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div className={styles.homeExplore}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.honouringVitalikButerin}
        >{`Honouring Vitalik Buterin by collecting his images over the years to train an AI model `}</div>
        <div className={styles.members300}>Members : 300</div>
        <p className={styles.vbsDao}>
          <span className={styles.vbsDaoTxtContainer}>
            <span className={styles.vbs}>{`VB’S `}</span>
            <span className={styles.vbs}>DAO</span>
          </span>
        </p>
        <button className={styles.frameItem} />
        <Link to="/dao-page">
          <h6 className={styles.requestToJoin}>Request to join</h6>
        </Link>
        <img
          className={styles.emojiGoatIcon}
          alt=""
          src="../-emoji-goat4.svg"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.collectingImagesOf}>
          Collecting images of endangered species to remember them
        </div>
        <div className={styles.members1000}>Members : 1000</div>
        <b className={styles.preserveWildlife}>PRESERVE WILDLIFE</b>
        <button className={styles.frameItem} />
        <h6 className={styles.requestToJoin}>Request to join</h6>
        <img
          className={styles.emojiLionFace}
          alt=""
          src="../-emoji-lion-face.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div
          className={styles.weLoveA}
        >{`We love a good cookie, let’s find pictures of cookies `}</div>
        <div className={styles.members1000}>Members : 30</div>
        <b className={styles.bestCookie}>
          <span className={styles.vbsDaoTxtContainer}>
            <p className={styles.blankLine}>BEST</p>
            <p className={styles.blankLine}>COOKIE</p>
          </span>
        </b>
        <button className={styles.frameItem} />
        <h6 className={styles.requestToJoin}>Request to join</h6>
        <img
          className={styles.emojiCookieIcon}
          alt=""
          src="../-emoji-cookie.svg"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameInner} />
        <div className={styles.weLoveA}>
          Collecting pictures of the cutest kitties around the world, come join
          us!
        </div>
        <div className={styles.members1000}>Members : 100</div>
        <img
          className={styles.emojiCatFace}
          alt=""
          src="../-emoji-cat-face.svg"
        />
        <b className={styles.bestCookie}>
          <span className={styles.vbsDaoTxtContainer}>
            <p className={styles.blankLine}>{`KITTY `}</p>
            <p className={styles.collect}>DAO</p>
          </span>
        </b>
        <button className={styles.frameItem} />
        <h6 className={styles.requestToJoin}>Request to join</h6>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.rectangleDiv} />
        <div className={styles.weLoveA}>
          Collecting emojis to create the next best emojis
        </div>
        <div className={styles.members1000}>Members : 300</div>
        <b className={styles.emojiCollect}>
          <span className={styles.vbsDaoTxtContainer}>
            <p className={styles.blankLine}>EMOJI</p>
            <p className={styles.collect}>COLLECT</p>
          </span>
        </b>
        <button className={styles.frameItem} />
        <h6 className={styles.requestToJoin}>Request to join</h6>
        <img
          className={styles.emojiNerdFace}
          alt=""
          src="../-emoji-nerd-face.svg"
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
            <b className={styles.itemFirst}>EXPLORE</b>
            <div className={styles.itemTwo}>MY DAOs</div>
            <div className={styles.itemTwo}>MY CONTRIBUTIONS</div>
            <div className={styles.itemFour}>Item four</div>
            <div className={styles.itemFour}>Item five</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-5.svg" />
          <img className={styles.frameIcon} alt="" src="../frame6.svg" />
          <i className={styles.address}>
            {isConnected ? (
              address.slice(0, 6) + "..." + address.slice(-4)
            ) : (
              <button onClick={() => connect()}>Connect Wallet</button>
            )}
          </i>
        </div>
        <img className={styles.frameChild6} alt="" src="../frame-442.svg" />
      </nav>
    </div>
  );
};

export default HomeExplore;
