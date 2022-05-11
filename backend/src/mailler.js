const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (firstname, lastname, email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "happywastes@outlook.fr",
      pass: process.env.MAILLER_PASSWORD,
    },
  });

  const options = {
    from: "happywastes@outlook.fr",
    to: `${email}`,
    subject: `HappyWastes - Confirmation d'inscription`,
    html: `<p>Bienvenue ${firstname} ${lastname}, prêt à recycler ? 😉</p></br></br></br><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td style="vertical-align: top;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td class="sc-TOsTZ kjYrri" style="text-align: center;"><img src="https://zupimages.net/up/22/19/93f4.png" role="presentation" width="130" class="sc-cHGsZl bHiaRe" style="max-width: 130px; display: block;"></td></tr><tr><td height="30"></td></tr><tr><td style="text-align: center;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia; display: inline-block;"><tbody><tr style="text-align: center;"><td><a href="//happywastes" color="#d29839" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#d29839" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(210, 152, 57); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="//happywastes" color="#d29839" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#d29839" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(210, 152, 57); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="//happywastes" color="#d29839" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#d29839" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(210, 152, 57); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="//happywastes" color="#d29839" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#d29839" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(210, 152, 57); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td></tr></tbody></table></td></tr></tbody></table></td><td width="46"><div></div></td><td style="padding: 0px; vertical-align: middle;"><h3 color="#629c94" class="sc-fBuWsC eeihxG" style="margin: 0px; font-size: 20px; color: rgb(98, 156, 148);"><span> Happy Wastes</span><span>&nbsp;</span><span></span></h3><p color="#629c94" font-size="large" class="sc-fMiknA bxZCMx" style="margin: 0px; color: rgb(98, 156, 148); font-size: 16px; line-height: 24px;"><span>L'équipe de développement web </span></p><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia; width: 100%;"><tbody><tr><td height="30"></td></tr><tr><td color="#d29839" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(210, 152, 57); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td style="vertical-align: bottom;"><span color="#d29839" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#d29839" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(210, 152, 57);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="mailto:happywastes@outlook.fr" color="#629c94" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(98, 156, 148); font-size: 12px;"><span>happywastes@outlook.fr</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td style="vertical-align: bottom;"><span color="#d29839" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#d29839" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(210, 152, 57);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="//www.happywastes.fr" color="#629c94" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(98, 156, 148); font-size: 12px;"><span>www.happywastes.fr</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td style="vertical-align: bottom;"><span color="#d29839" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(210, 152, 57);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#d29839" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(210, 152, 57);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><span color="#629c94" class="sc-csuQGl CQhxV" style="font-size: 12px; color: rgb(98, 156, 148);"><span>18 Pl. Roguet, 31300 Toulouse</span></span></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Georgia;"><tbody><tr><td height="30"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      return;
    }
    console.error(`sent message${info.response}`);
  });
};

module.exports = sendMail;
