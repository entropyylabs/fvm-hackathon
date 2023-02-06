import { Progress } from "@chakra-ui/react";
import "antd/dist/reset.css";
import styles from "./Contribute.module.css";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import FileUpload from "../components/FileUpload";

const ContributionPageSucess = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  return (
    <div className={styles.contributionPageSucess}>
      <div className={styles.aboutDao}>About DAO</div>
      <div className={styles.onlyJpegCsv}>
        <FileUpload />
      </div>
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
      {/* <img
        className={styles.contributionPageSucessItem}
        alt=""
        src="../vector-3.svg"
      /> */}
      <div
        className={styles.contributionPageSucessItem}
        style={{ height: "2px" }}
      ></div>

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
          <i className={styles.address}>
            {isConnected ? (
              address.slice(0, 6) + "..." + address.slice(-4)
            ) : (
              <button onClick={() => connect()}>Connect Wallet</button>
            )}
          </i>
        </div>
        <img className={styles.frameInner} alt="" src="../frame-449.svg" />
      </nav>
    </div>
  );
};

export default ContributionPageSucess;
