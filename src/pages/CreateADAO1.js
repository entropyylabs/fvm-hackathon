import { Input, Button, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
          value="VB's DAO"
        />
        <Input
          className={styles.inputoutline1}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="VBT"
        />
        <Input
          className={styles.inputoutline2}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="1000000000"
        />
        <Input
          className={styles.inputoutline3}
          variant="outline"
          width="614px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="614px"
          value="A DAO that collected images of Vitalik Buterin to honour his contribution to the revolution. This model will give you best posters to inspire you!"
        />
        <Link to="/confirm-dao">
          <Button
            className={styles.buttonsolidTextAndIcon}
            variant="solid"
            w="309px"
            style={{ backgroundColor: "#D8FEE4" }}
          >
            Next
          </Button>
        </Link>

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
          value="28%"
        />
        <Select
          style={{ marginTop: "10px" }}
          className={styles.inputoutline5}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Choose Model"
          w="354px"
        >
          <option value="option1">Stable Diffusion v1.5</option>
          <option value="option2">Stable Diffusion v2.1</option>
          <option value="option3">Custom PyTorch model</option>
        </Select>
        <Input
          className={styles.inputoutline6}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="12%"
        />
        <Input
          className={styles.inputoutline7}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="40%"
        />
        <div className={styles.contirbutor}>Contributor</div>
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
          <i className={styles.address}>0xCafa...1fD0</i>
        </div>
        <img className={styles.frameChild1} alt="" src="../frame-444.svg" />
      </nav>
    </div>
  );
};

export default CreateADAO1;
