import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ContributionPageDupes from "./pages/ContributionPageDupes";
import ContributionPageOwner from "./pages/ContributionPageOwner";
import ContributionPageDupes1 from "./pages/DaoContributions";
import CreateADAO from "./pages/CreateADAO";
import CreateADAO1 from "./pages/CreateADAO1";
import SHOWTHEOUTPUT from "./pages/SHOWTHEOUTPUT";
import HomeExplore from "./pages/HomeExplore";
import DAOPageAsAMemberMember from "./pages/DAOmembers";
import DAOPageAsAMemberCOLLE from "./pages/DAOpage";
import ContributionPageSucess from "./pages/Contribute";
import ContributionPageSucess1 from "./pages/ContributionPageSucess1";
import PAYTOGENERATE from "./pages/PAYTOGENERATE";
import ContributionPageDupes2 from "./pages/ContributionPageDupes2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contribution-page-owner":
        title = "";
        metaDescription = "";
        break;
      case "/contribution-page-dupes":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-dao":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-dao1":
        title = "";
        metaDescription = "";
        break;
      case "/show-the-output":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/dao-page-as-a-member-members":
        title = "";
        metaDescription = "";
        break;
      case "/dao-page-as-a-member-collection-details":
        title = "";
        metaDescription = "";
        break;
      case "/contribution-page-sucess":
        title = "";
        metaDescription = "";
        break;
      case "/contribution-page-sucess1":
        title = "";
        metaDescription = "";
        break;
      case "/pay-to-generate":
        title = "";
        metaDescription = "";
        break;
      case "/contribution-page-dupes1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ContributionPageDupes />} />

      <Route
        path="/contribution-page-owner"
        element={<ContributionPageOwner />}
      />

      <Route path="/dao-contributions" element={<ContributionPageDupes1 />} />

      <Route path="/create-a-dao" element={<CreateADAO />} />

      <Route path="/create-a-dao1" element={<CreateADAO1 />} />

      <Route path="/show-the-output" element={<SHOWTHEOUTPUT />} />

      <Route path="/home" element={<HomeExplore />} />

      <Route path="/dao-members" element={<DAOPageAsAMemberMember />} />

      <Route path="/dao-page" element={<DAOPageAsAMemberCOLLE />} />

      <Route path="/contribute" element={<ContributionPageSucess />} />

      <Route path="/contributed" element={<ContributionPageSucess1 />} />

      <Route path="/pay-to-generate" element={<PAYTOGENERATE />} />

      <Route
        path="/contribution-page-dupes1"
        element={<ContributionPageDupes2 />}
      />
    </Routes>
  );
}
export default App;
