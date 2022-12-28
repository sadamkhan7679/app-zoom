// import { useLocation } from "@reach/router";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { navigate } from "gatsby";

const checkLinkCount = (linkCount,charge) => {

  console.log("this")
  // const Pricing = useSelector((state) => state.Pricing);
  // if (linkCount > 0 && inDev === false) {
  //   const to = "/cost-to-make-an-app/design";
  //   navigate(to);
  //   return;
  // }
  if (charge){
    console.log("charge", charge)
    const to = "/cost-to-make-an-app/thank-you";
    navigate(to);
    return;
  }
  else if (linkCount > 0) {
    console.log("linkCount", linkCount)
    // const to = "/cost-to-make-an-app/more";
    const to="/"
    navigate(to);
    return;
  }
  else if (linkCount === 0) {
    console.log("linkCount", linkCount)
    const to = "/cost-to-make-an-app/signupGreeting";
    navigate(to);
    return;
  }

};

export default checkLinkCount;
