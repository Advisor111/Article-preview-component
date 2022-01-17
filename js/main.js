/*root:*/
var 
hrColor = "#48556a";
paraColor = "#6d7f97";
x = "#9eafc2";
bgColor = "#ecf2f8";
/*start body*/
document.body.style.fontSize= "13px";
document.body.style.backgroundColor= bgColor ;
document.body.style.fontFamily= "'Manrope', sans-serif";

    /*start the section*/
    var fDiv = document.createElement("div");
    document.body.appendChild(fDiv);
    fDiv.style.display = "flex";
    fDiv.style.alignItems = "center";
    fDiv.style.position = "absolute";
    fDiv.style.top = "50%";
    fDiv.style.left = "50%";
    fDiv.style.transform = "translate(-50%, -50%)";
    fDiv.style.backgroundColor = "white";
    fDiv.style.width = "775px";
    fDiv.style.borderRadius = "10px";
    fDiv.style.overflow = "hidden";
    fDiv.style.boxShadow = "9px 18px 60px -60px black";
        var cImg = document.createElement("img");
        cImg.src= "images/drawers.jpg";
        cImg.alt= "drawers";
        cImg.style.width = "350px";
        fDiv.appendChild(cImg);
        var cP = document.createElement("div"),
        cPTitle = document.createElement("h2"),
        cPParagraph = document.createElement("p");
        cPTitle.appendChild(document.createTextNode("Shift the overall look and feel by adding these wonderful touches to furniture in your home"));
        cPParagraph.appendChild(document.createTextNode("Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. l've got some simple tips to help you make any room feel complete."));
        cP.appendChild(cPTitle);
        cPTitle.style.marginBottom= "15px";
        cPTitle.style.color= hrColor;
        cP.appendChild(cPParagraph);
        cPParagraph.style.lineHeight = "1.4";
        cPParagraph.style.color = paraColor;
        cPParagraph.style.marginBottom = "30px";
        fDiv.appendChild(cP);
        cP.style.padding= "35px";
        cP.style.position= "relative";
            var cPcParagraph = document.createElement("div"),
            proImg = document.createElement("img"),
            pData = document.createElement("div");
            proImg.src = "images/avatar-michelle.jpg";
            proImg.alt ="M-avatar";
            cPcParagraph.appendChild(proImg);
            proImg.style.width= "40px";
            proImg.style.borderRadius= "5rem";
            cPcParagraph.appendChild(pData);
            pData.style.marginLeft = "-140px";
                var
                dTitle = document.createElement("h5"),
                dDate = document.createElement("span");
                dTitle.appendChild(document.createTextNode("Michelle Appleton"));
                dDate.appendChild(document.createTextNode("20 Jun 2020"));
                pData.appendChild(dTitle);
                dTitle.style.letterSpacing = "1px";
                dTitle.style.color = hrColor;
                dTitle.style.marginBottom = "2px";
                pData.appendChild(dDate);
                dDate.style.color = paraColor;
                dDate.style.fontSize = "10px";
            var notBut = document.createElement("button");
            cPcParagraph.appendChild(notBut);
            notBut.style.width = "30px";
            notBut.style.height = "30px";
            notBut.style.border = "none";
            notBut.style.borderRadius = "5rem";
            notBut.style.backgroundColor = bgColor;
            notBut.style.cursor = "pointer";
            notBut.style.marginRight = "unset";
            notBut.style.marginLeft = "unset";
            notBut.onclick = function() {
                "use strict"
                if (shareS.style.opacity === "0") {
                    notBut.style.backgroundColor = paraColor;
                    notBut.style.color = "white";
                    shareIc.style.filter = "brightness(3)";
                    shareS.style.opacity = "1";
                } else {
                    notBut.style.backgroundColor = bgColor;
                    shareIc.style.filter = "unset";
                    shareS.style.opacity = "0";
                }
            };
                var shareIc = document.createElement("img");
                shareIc.src = "images/icon-share.svg";
                shareIc.alt = "share";
                notBut.appendChild(shareIc);
                cP.appendChild(cPcParagraph);
                cPcParagraph.style.display = "flex";
                cPcParagraph.style.justifyContent = "space-between";
                cPcParagraph.style.alignItems = "center";
                cPcParagraph.style.transition = "0.5s";
                var shareS = document.createElement("div");
            shareTit = document.createElement("span"),
            faceIc = document.createElement("img"),
            twitIc = document.createElement("img"),
            pintIc = document.createElement("img"),
            arrow = document.createElement("i");
            arrow.classList= "fas fa-caret-down" ;
            shareTit.appendChild(document.createTextNode("share"))
            faceIc.src = "images/icon-facebook.svg";
            faceIc.alt = "Facebook";
            twitIc.src = "images/icon-twitter.svg";
            twitIc.alt = "Twitter";
            pintIc.src = "images/icon-pinterest.svg";
            pintIc.alt = "Pinterest";
            shareS.appendChild(shareTit);
            shareTit.style.textTransform = "uppercase";
            shareTit.style.fontSize = "13px";
            shareTit.style.marginRight = "10px";
            shareTit.style.letterSpacing = "5px";
            shareS.appendChild(faceIc);
            faceIc.style.marginRight = "10px";
            shareS.appendChild(twitIc);
            twitIc.style.marginRight = "10px";
            shareS.appendChild(pintIc);
            pintIc.style.marginRight = "10px";
            shareS.appendChild(arrow);
            arrow.style.position = "absolute";
            arrow.style.color = hrColor;
            arrow.style.fontSize = "65px";
            arrow.style.top = "12px";
            cP.appendChild(shareS);
            shareS.style.position = "absolute";
            shareS.style.color = "white";
            shareS.style.backgroundColor = hrColor;
            shareS.style.top = "calc(50% + 8px)";
            shareS.style.left = "calc(50% + 338px)";
            shareS.style.transform = "translate(-50%, -50%)";
            shareS.style.width = "220px";
            shareS.style.height = "50px";
            shareS.style.borderRadius = "10px";
            shareS.style.display = "flex";
            shareS.style.justifyContent = "space-evenly";
            shareS.style.alignItems = "center";
            shareS.style.padding = "0 20px";
            shareS.style.transition = "0.5s";
            shareS.style.boxShadow = "9px 18px 30px -22px black";
            shareS.style.opacity = "0";
            /*media query*/
            var query = window.matchMedia("(max-width: 776px)");
            document.addEventListener("DOMContentLoaded", init);
            function init() {
                if (query.matches) {
                    fDiv.style.flexDirection= "column" ;
                    fDiv.style.width= "340px" ;
                    cP.style.paddingBottom= "15px" ;
                    cPTitle.style.fontSize= "17px" ;
                    pData.style.marginLeft= "-60px" ;
                    shareS.style.opacity = "1";
                    shareS.style.display = "none";
                    notBut.onclick = function() {
                        "use strict"
                        if (shareS.style.display === "none") {
                            cPcParagraph.style.display = "none";
                            shareS.style.display = "flex";
                            shareS.style.width = "100%";
                            shareS.style.height = "55px";
                            shareS.style.position = "unset";
                            shareS.style.top = "unset";
                            shareS.style.left = "unset";
                            shareS.style.transform = "unset";
                            shareS.style.boxShadow = "unset";
                            shareS.style.borderRadius = "unset";
                            arrow.style.display = "none";
                            notBut.style.marginRight = "5px";
                            notBut.style.marginLeft = "35px";
                            shareIc.style.filter = "brightness(3)";
                            notBut.style.backgroundColor = paraColor;
                            fDiv.insertBefore(shareS, fDiv.childNodes[2]);
                            shareS.insertBefore(notBut, shareS.childNodes[5]);
                            cP.style.paddingBottom= "0px" ;
                        } else {
                            cPcParagraph.style.display = "flex";
                            shareS.style.display = "none";
                            cPcParagraph.insertBefore(notBut, cPcParagraph.childNodes[3]);
                            cP.style.paddingBottom= "15px" ;
                            notBut.style.marginRight = "unset";
                            notBut.style.marginLeft = "unset";
                            notBut.style.backgroundColor = bgColor;
                            shareIc.style.filter = "unset";
                        }
                    };
                } else {}
            };
    /*end the section*/
    document.body.insertBefore(shareS, document.body.childNodes[6]);
/*end body*/