// import { useLocation } from "@reach/router";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { navigate } from "gatsby";

const checkFunding = (answers, phone, charge, findFirstNullQuestion) => {

    // const { linkCount } = useSelector((state) => state.Pricing);
    if (findFirstNullQuestion && findFirstNullQuestion(answers) === undefined && answers.get('funding') === "no") {
        const to = `/cost-to-make-an-app/${charge ? phone ? "estimate" : "thank-you" : "more"}`;
        navigate(to);
        return;
    }
    else if (answers.get('funding') === "no") {
        const to = "/cost-to-make-an-app/development";
        navigate(to);
        return;
    }
    return false;

};

export default checkFunding;
