import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import  FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
     
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
               <FiberManualRecordIcon />

            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return (
        <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div> 
          {newsArticle("Vacine Aprrove from seruminstitute","Top news - 9099 readers")}
          {newsArticle("DCGI approves SII & Bharat Biotech’s Covid vaccines for restricted emergency use","Top news - 9099 readers")}
          {newsArticle("Bharat Biotech’s Covaxin can be used as backup, says AIIMS Director Dr Randeep Guleria","Top news - 909 readers")}
          {newsArticle("India vs Australia: No request to shift venues; fourth Test in Brisbane on as of now","Top news - 9089 readers")}
          {newsArticle("Bihar health dept seeks police aid to locate missing UK returnees to check new Covid-19 strain","Top news - 9098 readers")}

        </div>
    );
}

export default Widgets 
