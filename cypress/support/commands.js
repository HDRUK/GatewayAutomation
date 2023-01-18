import { highlight } from 'cypress-highlight';
const { should } = require('chai');

require('cypress-xpath');

import 'cypress-file-upload';



const findingDisseminated = "#safeoutputsoutputsdisseminationplansproposalfindings";
const outputDisseminated = "#safeoutputsoutputsdisseminationplansmilestones";
const disControlPolicy = "#safeoutputsoutputsdisseminationplansdisclosurecontrolpolicy";
const date = ".react-datepicker__day.react-datepicker__day--024";
const dateField = ".react-datepicker-ignore-onclickoutside";
const periodExpired = "#safeoutputsdataretentiondestructionmethod";
const addFullName = "#additionalinformationinvoicecontactfullname";
const addJobTitle = "#additionalinformationinvoicecontactjobtitle";
const additionAddLine1 = "#additionalinformationinvoicecontactaddressline1";
const addCity = "#additionalinformationinvoicecontactcity";
const addPostcode = "#additionalinformationinvoicecontactpostcode";
const addCountry = "#additionalinformationinvoicecontactcountry";
const addEmail = "#additionalinformationinvoicecontactemail";
const submitApplication = ".ui-LayoutBox.ui-Button.css-cwhn6l.css-1tuhzuv";
const yes = "safepeopleprimaryapplicantorganisationdatasecurityprotectionkit-label";


function login1(locator, data) {
  for (let i = 0; i < locator.length; i++) {
    cy
      .get(locator[i]).clear({ force: true })
      .get(locator[i]).type(data, { force: true });

    if (i == 3) {
      break;
    }
  }
}

Cypress.Commands.add('generateToken1', () => {
  cy.log('Logging in to Google')
  cy.request({
    method: 'POST',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    body: {
      grant_type: 'refresh_token',
      client_id: '963157541159-ccf80fnbd8jed4bv2lq5jmrvl3qtrf3d.apps.googleusercontent.com',
      client_secret: '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',
      refresh_token: '1//04xNs43lLzIRxCgYIARAAGAQSNwF-L9IrtJSmd_hOGV3fvATq0xLgQU-oA1JYcDqRY5lwGSKrPe4oynT6LnvadclqQY2p9aPkdAk',
    },
  }).then(({ body }) => {
    const { access_token, id_token } = body

    cy.request({
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      cy.log(body)
      const userItem = {
        token: id_token,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        },
      }
      window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
      cy.visit('/')
    })
  })
})

Cypress.Commands.add("fillDetails", () => {

  // // Page1
  // type(fullName, 'chandra');
  // type(jobTitle, 'Testing');
  // type(applicantEmail, 'researchergateway@gmail.com');
  // type(organisationName, 'BioNet');

  // if (data.check.dataSecurity == "Yes") {


  //   cy.get(':nth-child(1) > #safepeopleprimaryapplicantorganisationdatasecurityprotectionkit-label').then($el => {
  //     $el.get(0).click();
  //     cy.wait(3000000);
  //   })
  // } else {
  //   click(dataSecurityRadioBtn);
  // }

  // cy.click(nextBtn);

  // // Page2
  // cy.get(nextBtn).then(($el) => {
  //   $el.get(0).click();
  // })

  // Page3
  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  // Page4
  cy
    .get(titleOfProject).clear({ force: true })
    .get(titleOfProject).type('chandra', { force: true });

  cy.get(typeOfProjectRadioBtn).then(($el) => {
    $el.get(0).click();
  })

  cy
    .get(summaryOfTheProject).clear({ force: true })
    .get(summaryOfTheProject).type('Testing12345', { force: true })
    .get(projectAimsObjectivesRationale).clear({ force: true })
    .get(projectAimsObjectivesRationale).type('Testing12345', { force: true })
    .get(projectObjectives).clear({ force: true })
    .get(projectObjectives).type('Testing12345', { force: true })
    .get(pipe).clear({ force: true })
    .get(pipe).type('Testing12345', { force: true })

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page5
  cy.get(funderRadioBtn).then(($el) => {
    $el.get(0).click();
  })

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page6
  cy.get(sponsorRadioBtn).then(($el) => {
    $el.get(0).click();
  })

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page7 - Working
  cy.get(commercialInterestRadioBtn).then(($el) => {
    $el.get(0).click();
  })

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page8
  cy
    .get(safeDatafieldDataRequiredJustification).clear({ force: true })
    .get(safeDatafieldDataRequiredJustification).type('Testing12345', { force: true });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page9
  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page10
  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page11
  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page12
  cy.get(lawfulBasic).then(($el) => {
    $el.get(0).click();
  })

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page13
  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  })

  //Page14
  cy.get(ethicOpinion).then(($el) => {
    $el.get(0).click();
  })

  cy.get(ethicalApprover).then(($el) => {
    $el.get(0).click();
  });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Page15
  // cy.wait(2000);
  // cy.get(storageProcess).then(($el) => {
  //   $el.get(0).click();
  // });

  // cy.get(trustedResearch).then(($el) => {
  //   $el.get(0).click();
  // });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Page16
  cy.get(outsideUK).then(($el) => {
    $el.get(0).click();
  });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Page17
  cy
    .get(findingDisseminated).clear({ force: true })
    .get(findingDisseminated).type('Testing12345', { force: true });

  cy
    .get(outputDisseminated).clear({ force: true })
    .get(outputDisseminated).type('Testing12345', { force: true });

  cy
    .get(disControlPolicy).clear({ force: true })
    .get(disControlPolicy).type('Testing12345', { force: true });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Page18
  // cy.get(dateField).then(($el) => {
  //   $el.get(0).click();
  // });

  // cy.wait(1000);

  // cy.get(date).then(($el) => {
  //   $el.get(0).click();
  // });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Page19
  cy.get(periodExpired).then(($el) => {
    $el.get(0).click();
  });

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Pag20
  cy
    .get(addFullName).clear({ force: true })
    .get(addFullName).type('Testing12345', { force: true })
    .get(addJobTitle).clear({ force: true })
    .get(addJobTitle).type('Testing12345', { force: true })
    .get(additionAddLine1).clear({ force: true })
    .get(additionAddLine1).type('Testing12345', { force: true })
    .get(addCity).clear({ force: true })
    .get(addCity).type('London', { force: true })
    .get(addPostcode).clear({ force: true })
    .get(addPostcode).type('E6 2JJ', { force: true })
    .get(addCountry).clear({ force: true })
    .get(addCountry).type('United Kingdom', { force: true })
    .get(addEmail).clear({ force: true })
    .get(addEmail).type('researchergateway@gmail.com', { force: true })

  cy.get(nextBtn).then(($el) => {
    $el.get(0).click();
  });

  //Page21
  cy.get(submitApplication).then(($el) => {
    $el.get(0).click();
  });

  cy.wait(10000);
})

Cypress.Commands.add("valueFinder1", (text) => {

  cy.get(".page-link").then(($pages) => {

    for (let i = 1; i <= $pages.length; i++) {
      let page = "//*[@id='root']/div[4]/div/div[4]/div/div[2]/div/ul/li[" + i + "]/a";

      if (i != 1) {
        cy.xpath(page).then(($el) => {
          $el.get(0).click();
        });
      }

      cy.get(".resource-card-row.row").then(($links) => {

        let keyWord, link, textContent, values;

        for (let j = 1; j <= $links.length; j++) {

          keyWord = "//*[@id='root']/div[4]/div/div[4]/div/div[2]/div/div[" + j + "]/div/div/div[3]/div[1]/div/div[1]";
          link = "//*[@id='root']/div[4]/div/div[4]/div/div[2]/div/div[" + j + "]/div/div/div[1]/div[1]/a";
          textContent = "//*[@id='root']/div[4]/div/div[4]/div/div[2]/div/div[" + j + "]/div/div/div[3]/div[2]/span";
          values = [keyWord, link, textContent];

          for (let k = 0; k < values.length; k++) {
            cy.xpath(values[k]).then(($el) => {
              if ($el.text().toLowerCase().includes(text.toLowerCase())) {
                expect($el.text().toLowerCase()).contains(text.toLowerCase());
              } else if (k == 0) {
                highlight()
                cy.screenshot("Page :" + i + " -> Keyword : " + j + " does not have text covid", { capture: 'runner' });
                cy.wait(1000);
              } else if (k == 1) {
                cy.screenshot("Page :" + i + " -> Link : " + j + " does not have text covid", { capture: 'runner' });
                cy.wait(1000);
              } else {
                if (k === values.length - 1) {
                  try {
                    expect($el).

                      cy.get('.check-box-sub-text').should('exist');
                  } catch {
                    highlight()
                    cy.screenshot("Page :" + i + " -> TextContent : " + j + " does not have text covid", { capture: 'runner' });
                    cy.wait(1000);
                  }
                }
              }
            });
          }
        }
      });
    }
  });
})

Cypress.Commands.add("valueFinder", (text) => {

  cy.get(".page-link").then(($pages) => {

    for (let i = 1; i <= $pages.length; i++) {
      let page = "//*[@id='root']/div[4]/div/div[4]/div/div[2]/div/ul/li[" + i + "]/a";

      if (i != 1) {
        cy.xpath(page).then(($el) => {
          $el.get(0).click();
        });
      }

      cy.get(".collection-rectangle").then(($sections) => {

        for (let j = 1; j <= $sections.length; j++) {

          let section = "//*[@id='root']/div[4]/div/div[4]/div/div[2]/div/div[" + j + "]/div/div";

          cy.xpath(section).then(($el) => {

            try {
              expect($el.text().toLowerCase()).contains(text.toLowerCase());
            } catch (message) {
              highlight()
              cy.screenshot("Page :" + i + " -> Section " + j + " does not have text", { capture: 'runner' });
            }
          });
        }
        cy.wait(1000);
      });
    }
  });
})
 
Cypress.Commands.add('generateToken', (userRole) => {
  let accesstoken =''
  if (userRole=='applicant') {
  cy.log('Generating the token')
  cy.log(Cypress.env('auth0_clientID_admin'))
  cy.request({
    method: 'POST',
    url: 'https://api.uat.healthdatagateway.org/oauth/token',
    body: {
      grant_type: 'client_credentials',
      client_id: Cypress.env('auth0_clientID_applicant'),
      client_secret: Cypress.env('auth0_clientSecret_applicant'),
      failOnStatusCode: false,
    }
  }).then(response =>{
    accesstoken = response.body.access_token
    cy.log(accesstoken)
   accesstoken = accesstoken.substring(7)
   cy.log(accesstoken)
  cy.setCookie('jwt',accesstoken)
  cy.log('applicant user')
  })
} else if (userRole=='admin') {
  cy.log('Generating the token')
  cy.log(Cypress.env('auth0_clientID_admin'))
  cy.request({
    method: 'POST',
    url: 'https://api.uat.healthdatagateway.org/oauth/token',
    body: {
      grant_type: 'client_credentials',
      client_id: Cypress.env('auth0_clientID_admin'),
      client_secret: Cypress.env('auth0_clientSecret_admin'),
      failOnStatusCode: false,
    }
  }).then(response =>{
    accesstoken = response.body.access_token
    cy.log(accesstoken)
   accesstoken = accesstoken.substring(7)
   cy.log(accesstoken)
  cy.setCookie('jwt',accesstoken)
   cy.log('admin user')
}) 
} else {
  cy.log('Generating the token')
  cy.log(Cypress.env('auth0_clientID_hdrcustodian'))
  cy.request({
    method: 'POST',
    url: 'https://api.uat.healthdatagateway.org/oauth/token',
    body: {
      grant_type: 'client_credentials',
      client_id: Cypress.env('auth0_clientID_hdrcustodian'),
      client_secret: Cypress.env('auth0_clientSecret_hdrcustodian'),
      failOnStatusCode: false,
    }
  }).then(response =>{
    accesstoken = response.body.access_token
    cy.log(accesstoken)
   accesstoken = accesstoken.substring(7)
   cy.log(accesstoken)
  cy.setCookie('jwt',accesstoken)
   cy.log('custodian user')
}) 
}
})
