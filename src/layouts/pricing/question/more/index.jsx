import React, { useState, useEffect } from 'react'
import Parser from 'html-react-parser'
import { useDispatch, useSelector } from 'react-redux'
import * as axios from 'axios'
import Swal from 'sweetalert2'
import PRICING_ACTIONS from '../../../../redux/actions/Pricing'
import GoBack from '../../../../components/pricing/goBack'
import PRICING_API_URL from '../../../../constants/pricing/apiUrl'
import { navigate } from 'gatsby'
import ContactUs from '../../../../components/contactUs'
import PDF from '/static/file.pdf'

import { Worker, Viewer } from '@react-pdf-viewer/core'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import clsx from 'clsx'
import styles2 from '../../../../components/contactUs/styles.module.css'
import btnStyles from '../../../../components/pricing/goBack/styles.module.css'

import EstimateText from '../../../../components/pricing/estimate/estimateText'
import EstimateValue from '../../../../components/pricing/estimate/estimateValue'

import Spinner from 'react-bootstrap/Spinner'
// import PRICING_ACTIONS from "../../../redux/actions/Pricing";
import packPricingObject from '../../../../functions/pricing/packPricingObject'
import putPricingState from '../../../../procedures/pricing/putPricingState'
import HeaderPlaceholder from '../../../../components/common/HeaderPlaceholder/HeaderPlaceholder'
import styles from '../../question/fundingType/moreForm/moreFormRow/styles.module.css'
import useClidParser from '../../../../hooks/pricing/useClidParser'
import Accordion from '../../../../components/Testimonials/accordian'
import mainImage from '../../../../images/Ajofod.jpg'

import './styles.css'
import {MoreRoute, ExpertConsultRoute, DevStepsRoute} from "../../../../constants/routes";

const articleStlye = {
  textAlign: 'center',
  // maxWidth: "440pt !important",
  backgroundColor: '#fbfdfa',
  border: '2px solid #989898',
  borderRadius: '6pt',
  // width: "60%",
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  // marginTop: "30%",
}

const PricingMoreLayout = ({route, section}) => {
  //Pdf
  const zoomPluginInstance = zoomPlugin()
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance

  const Pricing = useSelector((state) => state.Pricing)
  const { answers, hasSignedUp } = useSelector((state) => state.Pricing)

  const { email, amount, patch } = Pricing
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [publicKey, setPublicKey] = useState(false)
  const [showingPdf, setshowingPdf] = useState(false)

  const videos = [{
    title: ' 60 minutes interview',
    text: ' About IIT where Joe studied',
    video: 'https://www.youtube.com/embed/TBk4Z4q1fEg',
    youtube: true,
  },
    {
      title: ' Netflix Documentary',
      text: 'Stories from IIT Madras',
      video: 'https://www.youtube.com/embed/fG9GyEjPq2A',
      youtube: true,
    },
    // {
    // title: "Youtube (2 million views)",
    // text: "Explains why IIT Madras is legendary",
    // video: "https://www.youtube.com/embed/ND-qRzBpzwc",
    // youtube: true,
    // },
    // {
    // title: " Blackrock.",
    // text:  " The company that owns the world",
    // video: "https://www.youtube.com/embed/A4foal20UTA",
    // youtube: true,
    // }
  ]

  const fetchPK = () => {
    axios
      .get(`${PRICING_API_URL}/stripe/public_key`, {})
      .then(function (response) {
        setPublicKey(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  fetchPK()
  useClidParser()

  const onToken = (token, address) => {
    setLoading(true)
    axios
      .post(`${PRICING_API_URL}/stripe/one_time/${Pricing.id}`, {
        email: Pricing.email,
        source: token.id,
        description: 'Application Fee',
      })
      .then(function (response) {
        setLoading(false)
        const action = PRICING_ACTIONS.setCharge(response.data.id)
        dispatch(action)
      })
      .catch(function (error) {
        Swal.fire('Sorry', error.response.data.split('.')[0], 'error')
          .then(
            async () => {
            }
          )
        setLoading(false)
        console.error('Failed to update.')
        console.error('>>>>>>>>>>>>>', error.response.data)
      })
  }

  const togglePreview = (event) => {
    event.preventDefault()
    setshowingPdf(!showingPdf)
  }

  const [numPages, setNumPages] = useState(null)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [unsubscribeFlag, setUnsubscribeFlag] = useState(false)

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  const stringToBolean = (ans) => {
    return ans === 'no' ? false : true
  }

  const updateAnswers = (e) => {
    setUnsubscribeFlag(false)
    const setAnswer = PRICING_ACTIONS.setTsUnsubscribe(0)
    dispatch(setAnswer)
    if (e.target.name === 'patent') {
      const setAnswer = PRICING_ACTIONS.setAnswer(
        e.target.name,
        answers.get(e.target.name) === 'no' ? 'dont-know' : 'no'
      )
      dispatch(setAnswer)
    } else {
      const setAnswer = PRICING_ACTIONS.setAnswer(
        e.target.name,
        answers.get(e.target.name) === 'yes' ? 'no' : 'yes'
      )
      dispatch(setAnswer)
    }
  }

  const unsubscribe = () => {
    setUnsubscribeFlag(true)
    const setAnswer = PRICING_ACTIONS.setTsUnsubscribe(Date.now())
    dispatch(setAnswer)
    const setDevelopment = PRICING_ACTIONS.setAnswer('development', 'no')
    dispatch(setDevelopment)
    const setFeatures = PRICING_ACTIONS.setAnswer('features', 'no')
    dispatch(setFeatures)
    const setFunding = PRICING_ACTIONS.setAnswer('funding', 'no')
    dispatch(setFunding)
    const setPatent = PRICING_ACTIONS.setAnswer('patent', 'no')
    dispatch(setPatent)
    const setTechnology = PRICING_ACTIONS.setAnswer('technology', 'no')
    dispatch(setTechnology)
    const setMarketing = PRICING_ACTIONS.setAnswer('marketing', 'no')
    dispatch(setMarketing)
    const setReferral = PRICING_ACTIONS.setAnswer('referral', 'no')
    dispatch(setReferral)
  }

  const UpdateData = async () => {
    console.log(Pricing)
    if (Pricing.id) {
      setUpdateLoading(true)
      const pricingObject = packPricingObject(Pricing)
      const response = await putPricingState(Pricing.id, pricingObject)
      setUpdateLoading(false)
    }
  }

  useEffect(()=>{
    // if(route !== MoreRoute) {
      // localStorage.removeItem("moreRoute")
    // } else {
    let activeRoute;
    if (section === 1) activeRoute = MoreRoute
    if (section === 2) activeRoute = DevStepsRoute
    if (section === 3) activeRoute = ExpertConsultRoute

    localStorage.setItem("moreRoute", activeRoute)

  },[route, section])

  let previousRoute;
  if (section === 1) previousRoute = 'marketing';
  if (section === 2) previousRoute = 'more';
  if (section === 3) previousRoute = 'dev-steps';



  return (
    <>
      <div className="container">
        {!patch || patch === '' ? (
          <div>

            {
              //route === "/cost-to-make-an-app/more" || "/cost-to-make-an-app/more/" &&
              section === 1 &&
              <center className={clsx('container', styles2.mycontainer2)}>
              <h3 style={{ textAlign: 'center' }}>Initial Estimate</h3>
              <p>
                This estimate is based on our experience with 100+ apps. Your app could cost less if it can be simplified. Additional requirements are
                likely to cost more.
              </p>
              <p className="section__p d-flex justify-content-center flex-column">
                <div>
                  <EstimateText heading="Your Estimate"/>
                  <EstimateValue/>
                </div>
                <h4 style={{ textAlign: 'center' }}>
                  Our Special Offer
                </h4>
                <ol>
                  <li><b>100% money back guarantee</b> If your app does not work as agreed, we will fully refund your investment.</li>
                  <li><b>Get $100,000</b> investment from our investor club. Only <b>$1 million</b> available in the fund. This is a limited time offer.</li>
                </ol>
              </p>
                <center>
              <button type="button" className="button" onClick={()=>{navigate(DevStepsRoute)}}>
                Steps for App Development
              </button>
                </center>
              </center>
            }

            {
              // route === "/cost-to-make-an-app/dev-steps" || "/cost-to-make-an-app/dev-steps/" &&
              section === 2 &&
              <center className={clsx('container', styles2.mycontainer2)}>
              <p className="section__p d-flex justify-content-center flex-column">
                <div>

                <h3 style={{ textAlign: 'center' }}>Your path to a published app.</h3>
              Here are the steps to get to a functioning app  published on the web & app stores.<p/>
              <ol>
                <li>Get a detailed visual design of your app. <br/><b>Time:</b> Atleast 1 week.<br/>
                  <b>FREE:</b> Basic Design is <b>FREE</b><br/>
                  <b>Price:</b> Complete Design. Starting at <b>$900</b><p/></li>
                <li><b>Plan</b> out the supporting software needed such as databases & other
                  services. <br/><b>Time:</b> Atleast at 1 week.<p/>
                </li>
                <li>Get <b>Funded</b> up to <b>$100,000</b> by our Investors. <br/><b>Time:</b> Atleast at 1 week.<p/>
                </li>
                <li><b>Code & test</b> the app. <br/><b>Time:</b> Atleast at 2 weeks.<p/>
                </li>
                <li><b>Publish</b> the app to the Google and Apple stores. <br/><b>Time:</b> Atleast at Three days.<p/>
                </li>
              </ol>
                  Learn fast by talking to our expert.
                </div>
              </p>
                <center>
              <button type="button" className="button" onClick={()=>{navigate(ExpertConsultRoute)}}>
                Free Design / Funding
              </button>
                </center>
            </center>
            }
            {
              // route ==="/cost-to-make-an-app/expert-consult" || "/cost-to-make-an-app/expert-consult/" &&
              section === 3 &&
              <center className={clsx('container', styles2.mycontainer2)}>
              <p className="section__p d-flex justify-content-center flex-column">
                <div>
                  <p/>
                  <h3 style={{ textAlign: 'center' }}>Talk to our expert.</h3>
                  <p>
                    To help you succeed fast, we offer several perks such as <b>FREE Design</b> and
                    investment up to <b>$100,000</b>. The fund only has <b>$1,000,000</b>. So, see if you qualify for these by talking to our expert quickly.
                  </p>
                  <h4 style={{ textAlign: 'center' }}>Expert's Qualifications</h4>
                  <ul>
                    <li><b>22 years experience</b> building high quality software
                      products<p/></li>
                    <li><b>Masters</b> in <b>Computer Science</b> from University of Southern
                      California
                      &nbsp;<b>USC</b>&nbsp;
                      was fully funded by a merit based <b>scholarship</b><p/></li>
                    {/*<li>A <b>Serial Entrepreneur</b> and <b>Investor</b><p/></li>*/}
                    <li><b>Top 0.1% engineer</b> (1 in 1,000) based on engineering test rankings<p/>
                    </li>
                    <li>Experienced Entrepreneur with access to investors.<p/></li>
                  </ul>
                  Get a consultation quickly.
                </div>
              </p>
              </center>
            }
            {showingPdf ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.8.335/build/pdf.worker.min.js">
                <div
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                  }}
                >
                  <div
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#eeeeee',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '4px',
                    }}
                  >
                    <ZoomOutButton/>
                    <ZoomPopover/>
                    <ZoomInButton/>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Viewer fileUrl={PDF} plugins={[zoomPluginInstance]}/>
                  </div>
                </div>
              </Worker>
            ) : (
              ''
            )}
          </div>
        ) : (
          Parser(patch)
        )}
      </div>
      {
        // route ==="/cost-to-make-an-app/expert-consult" || "/cost-to-make-an-app/expert-consult/" &&
        section === 3 &&
        <center>
          <div className="container">
            <ContactUs></ContactUs>
            {/* <h2>
            An Expert Assisted Plan
          </h2>
          <p className="section__p">
            An expert can help increase the impact of your investment<br/>
            by maximizing the value of your application<br/>
            with clear development steps in a plan.
          </p>
          <h3>The plan will include:</h3>
              <p className="section__p">
                  Screens & other requirements <br></br>
                  Upto column D
                  <a href="https://docs.google.com/spreadsheets/d/1Fryuq8Im9N3ltw-5rw7Bzk9bncntkTRJpWibphHCne4/edit#gid=529587639"> [Here]</a>
              </p>
          <h3>The plan can be used to get:</h3>
              <p className="section__p">
                  Timelines and costs. <br></br>
                  After column D
                  <a href="https://docs.google.com/spreadsheets/d/1Fryuq8Im9N3ltw-5rw7Bzk9bncntkTRJpWibphHCne4/edit#gid=529587639"> [Here]</a>
              </p>
              <p className="section__p">
                  Designs for app development<br></br>
                  Sample design
                  <a href="https://file.opzoom.com/popcrn/popcrn.v1.4.search.pdf"> [Here]</a>
              </p> */}
            {/*<h2>*/}
            {/*  Development Plan*/}
            {/*</h2>*/}
            {/*<h3>{!amount ? '$29' : `$${amount/100}`}</h3>*/}
          </div>

          {/*{publicKey ?*/}
          {/*<div className={clsx("container-fluid", "py-2", styles.container)}>*/}
          {/*  <StripeCheckout*/}
          {/*    email={email}*/}
          {/*    token={onToken}*/}
          {/*    stripeKey={publicKey}*/}
          {/*  >*/}
          {/*  <button className={clsx(styles.button)}>*/}
          {/*  {loading ? (*/}
          {/*      <Spinner animation="border" role="status" color={"white"} />*/}
          {/*    ) : (*/}
          {/*      "Buy Now"*/}
          {/*    )}*/}
          {/*  </button>*/}
          {/*</StripeCheckout>*/}
          {/*</div>:*/}
          {/*<button className={clsx(styles.button)}>*/}
          {/*  <Spinner animation="border" role="status" color={"white"} />*/}
          {/*</button>*/}
          {/*}*/}
        </center>
      }
      {/*<article style={articleStlye} className="container-article">*/}
        {/* <HeaderPlaceholder half /> */}
        {/*<section className="section__h2">*/}
        {/*  <h4>Free optional information/training available:</h4>*/}
        {/*  You can have these answers over a few weeks in bite sized emails.*/}
        {/*  <div style={{ marginTop: '20px' }}>*/}
        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="development"*/}
        {/*        name="development"*/}
        {/*        checked={stringToBolean(answers.get('development'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>Where are sample documents in app development?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}

        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="features"*/}
        {/*        name="features"*/}
        {/*        checked={stringToBolean(answers.get('features'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>What additional features are typically requested?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}

        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="funding"*/}
        {/*        name="funding"*/}
        {/*        checked={stringToBolean(answers.get('funding'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>How to get funding through OpZoom?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}

        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="patent"*/}
        {/*        name="patent"*/}
        {/*        checked={stringToBolean(answers.get('patent'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>How to get a patent?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}

        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="technology"*/}
        {/*        name="technology"*/}
        {/*        checked={stringToBolean(answers.get('technology'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>Where are the case studies?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}

        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="referral"*/}
        {/*        name="referral"*/}
        {/*        checked={stringToBolean(answers.get('referral'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>How to become a referral partner?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}

        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="marketing"*/}
        {/*        name="marketing"*/}
        {/*        checked={stringToBolean(answers.get('marketing'))}*/}
        {/*        onChange={updateAnswers}*/}
        {/*      ></input>*/}
        {/*      <label>How to market and sell apps?</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <br></br>*/}
        {/*  <br></br>*/}
        {/*  <h4>STOP educational emails.</h4>*/}
        {/*  <div style={{ marginTop: '20px' }}>*/}
        {/*    <div className={styles.input}>*/}
        {/*      <input*/}
        {/*        type="checkbox"*/}
        {/*        id="marketing"*/}
        {/*        name="marketing"*/}
        {/*        checked={unsubscribeFlag}*/}
        {/*        onChange={unsubscribe}*/}
        {/*      ></input>*/}
        {/*      <label>Don't sent any educational emails</label>*/}
        {/*      <br></br>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <center>*/}
        {/*        <button type="button" className="button" onClick={UpdateData}>*/}
        {/*          {updateLoading ? (*/}
        {/*            <Spinner animation="border" role="status" color={'white'}/>*/}
        {/*          ) : (*/}
        {/*            'Update'*/}
        {/*          )}*/}
        {/*        </button>*/}
        {/*      </center>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      {/*</article>*/}
      <GoBack prevQuestionId={previousRoute}/>
    </>
  )
}

export default PricingMoreLayout
