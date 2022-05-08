import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "./BlogBox";
import FullButton from "./FullButton";
import TestimonialSlider from "./TestimonialSlider";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {Translations_En} from "../translateEn";
import {Translations_Fr} from "../translateFr";
import {Translations_Hn} from "../translateHn";
i18n
    .use(initReactI18next)
    .init({
      resources:{
        en:{translation:Translations_En},
        fr:{translation:Translations_Fr},
        hn:{translation:Translations_Hn}
      },
      lng:"en",
      fallbackLng:"en",
      interpolation:{escapeValue:false}
    });
export default function Blog() {
  const { t } = useTranslation();
  function updLang(val){
    i18n.changeLanguage(val);
  }

  return (

    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t("heybuddy")}</h1>
            <p className="font13">
              <b>{t("WhatisPUSHD")}</b>
              <br />
              {t("para")}


            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("forwhom")}
                text={t("forwhompara")}


              tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("whattoexpect")}
                text={t("whattoexpectpara")}
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("blogTitle1")}
                text={t("blogText1")}
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("blogTitle2")}
                text={t("blogText2")}
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
              <BlogBox
                title={t("blogTitle3")}
                text={t("blogText3")}
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("blogTitle4")}
                text={t("blogText4")}
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>

        </div>
      </div>
      {/*<div className="lightBg" style={{padding: '50px 0'}}>*/}
      {/*  <div className="container">*/}
      {/*    <HeaderInfo>*/}
      {/*      <h1 className="font40 extraBold">What They Say?</h1>*/}
      {/*      <p className="font13">*/}
      {/*        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut*/}
      {/*        <br />*/}
      {/*        labore et dolore magna aliquyam erat, sed diam voluptua.*/}
      {/*      </p>*/}
      {/*    </HeaderInfo>*/}
      {/*    <TestimonialSlider />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;