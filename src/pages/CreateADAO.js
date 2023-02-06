import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./CreateADAO.module.css";
import { useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";

const CreateADAO = () => {
  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
    },
  });
  return (
    <div className={styles.createADao}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.nowAboutYour}>Now, about your collection!</div>
        <img className={styles.frameItem} alt="" src="../vector-33.svg" />
        <Input
          className={styles.inputoutline}
          variant="outline"
          width="614px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="614px"
          value="Vitalik Buterin's images"
        />
        <Input
          className={styles.inputoutline1}
          variant="outline"
          width="614px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="614px"
          value="5000"
        />
        <Button
          className={styles.buttonsolidTextAndIcon}
          variant="solid"
          w="309px"
          style={{ backgroundColor: "#FEC7C7" }}
          rightIcon={<ArrowForwardIcon />}
          onClick={() => {
            signMessage({ message: "Creating VB's DAO" });
          }}
        >
          Create
        </Button>
        <i className={styles.whatAreYou}>What are you collecting?</i>
        <i className={styles.addReferenceImages}>Add reference images</i>
        <i className={styles.bounty}>Bounty</i>
        <i className={styles.numberOfTarget}>Number of target images</i>
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <img className={styles.imageAltIcon} alt="" src="../imagealt.svg" />
        <img className={styles.imageAltIcon1} alt="" src="../imagealt1.svg" />
        <Input
          className={styles.inputoutline2}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="1 tFIL"
        />
        <Input
          className={styles.inputoutline3}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="0.75 tFIL"
        />
        <Input
          className={styles.inputoutline4}
          variant="outline"
          width="354px"
          borderColor="#262626"
          size="lg"
          placeholder="Input"
          w="354px"
          value="0.5 tFIL"
        />
        <div className={styles.admin}>Admin</div>
        <div className={styles.contirbutor}>Contirbutor</div>
        <div className={styles.storageProvider}>Storage provider</div>
        <i className={styles.forEveryContribution}>
          For every contribution claimed
        </i>
        <i className={styles.forEveryLegitimate}>
          For every legitimate contribution made
        </i>
        <i className={styles.forFineTuning}>For fine tuning the model</i>
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
          <img className={styles.frameIcon} alt="" src="../frame3.svg" />
          <i className={styles.address}>0xCafa...1fD0</i>
        </div>
        <img className={styles.frameChild1} alt="" src="../frame-443.svg" />
      </nav>
    </div>
  );
};

export default CreateADAO;
