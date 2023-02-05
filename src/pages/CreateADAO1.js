import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./CreateADAO1.module.css";

const CreateADAO1 = () => {
  return (
    <div className={styles.createADao}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.createYourDao}>Create YOUR DAO, wohoooo</div>
        <img className={styles.frameItem} alt="" src="../vector-33.svg" />
        <Input
          className={styles.inputoutline}
          variant="outline"
          width="614px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="614px"
        />
        <Input
          className={styles.inputoutline1}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
        />
        <Input
          className={styles.inputoutline2}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
        />
        <Input
          className={styles.inputoutline3}
          variant="outline"
          width="614px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="614px"
        />
        <Button
          className={styles.buttonsolidTextAndIcon}
          variant="solid"
          w="309px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Button
        </Button>
        <i className={styles.name}>Name</i>
        <i className={styles.tokenSymbol}>Token Symbol</i>
        <i className={styles.tokenSupply}>Token Supply</i>
        <i className={styles.description}>Description</i>
        <div className={styles.frameInner} />
        <i className={styles.royaltySplit}>Royalty Split</i>
        <Input
          className={styles.inputoutline4}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
        />
        <Input
          className={styles.inputoutline5}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
        />
        <Input
          className={styles.inputoutline6}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
        />
        <Input
          className={styles.inputoutline7}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
        />
        <div className={styles.contirbutor}>Contirbutor</div>
        <div className={styles.storageProvider}>Storage provider</div>
      </div>
      <img className={styles.imageAltIcon} alt="" src="../imagealt2.svg" />
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
          <img className={styles.frameIcon} alt="" src="../frame4.svg" />
          <i className={styles.address}>Address</i>
        </div>
        <img className={styles.frameChild1} alt="" src="../frame-444.svg" />
      </nav>
    </div>
  );
};

export default CreateADAO1;
