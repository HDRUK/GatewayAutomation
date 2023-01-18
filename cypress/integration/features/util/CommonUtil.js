const startApplication = ".ui-Button.css-1u4yvgi";
const requestAccess = '.btn.btn-primary.addButton.pointer.float-right';
const paperLink = ".purple-bold-16.css-d5w927";
const popupWindowText1 = "//h1[normalize-space()='Mandatory fields missing']";
const popupWindowText2 = "//p[contains(text(),'You cannot submit this dataset for review until yo')]";
const popupWindowText3 = "//h1[normalize-space()='Mandatory Fields Missing']";
const popupWindowText4 = "//div[contains(@class,'missingFieldsModal-body')]";
const clickClosePopupWindowBtn = "//div[@class='missingFieldsModal-header']//*[name()='svg']";
const manageApplicationBtn = "button[class='ui-Button css-125pl76']";
const deleteDraftBtn = "div[class='actionBar'] div:nth-child(4) span:nth-child(1)";
const deleteDraftButton = "//button[normalize-space()='Delete draft']";
const homwPageLogo = "//div[@class='ui-Box css-1odk2h7']//a//*[name()='svg']";
const datsets = ":nth-child(1) > .no-underline > .statsBlock > .text-size-large";


let statusCode;
let locator;
let data;

class CommonUtil {

    click(locatorValue) {
        cy.get(locatorValue).click({ force: true });
    }

    clickJsonData(locatorValue) {
        cy.fixture('locator.json').then(locators => {
            locator = locators;
            cy.get(eval(locatorValue)).click({ force: true });
        });
    }

    type(locatorValue, dataValue) {
        cy.get(locatorValue).clear({ force: true })
            .get(locatorValue).type(dataValue, { force: true });
    }

    typeJsonData(locatorValue, dataValue) {
        cy.fixture('locator.json').then(locators => {
            locator = locators;
            cy.fixture('data.json').then(datas => {
                data = datas;

                try {
                    cy
                        .get(eval(locatorValue)).clear({ force: true })
                        .get(eval(locatorValue)).type(eval(dataValue), { force: true });
                } catch {
                    cy
                        .get(eval(locatorValue)).clear({ force: true })
                        .get(eval(locatorValue)).type(dataValue, { force: true });
                }
            });
        });
    }

    clickBtn(locatorValue, typeOfLocator) {

        this.clickByLocator(locatorValue, typeOfLocator);
    }

    typeValue(locatorValue, dataValue, typeOfLocator) {
        cy.fixture('locator.json').then(locators => {
            locator = locators;
            cy.fixture('data.json').then(datas => {
                data = datas;

                this.typeBylocator(locatorValue, eval(dataValue), typeOfLocator)
            });
        });
    }

    typeBylocator(locatorValue, dataValue, typeOfLocator) {
        if (typeOfLocator == 'get') {
            try {
                cy
                    .get(locatorValue).clear({ force: true })
                    .get(locatorValue).type(dataValue, { force: true });
            } catch {
                cy
                    .get(eval(locatorValue)).clear({ force: true })
                    .get(eval(locatorValue)).type(dataValue, { force: true });
            }
        } else {
            try {
                cy
                    .xpath(locatorValue).clear({ force: true })
                    .xpath(locatorValue).type(dataValue, { force: true });
            } catch {
                cy
                    .xpath(eval(locatorValue)).clear({ force: true })
                    .xpath(eval(locatorValue)).type(dataValue, { force: true });
            }
        }
    }

    clickByLocator(locatorValue, typeOfLocator) {
        if (typeOfLocator == 'get') {
            try {
                cy.get(locatorValue).click({ force: true });
            } catch {
                cy.fixture('locator.json').then(locators => {
                    locator = locators;
                    cy.get(eval(locatorValue)).click({ force: true });
                });
            }
        } else {
            try {
                cy.xpath(locatorValue).click({ force: true });
            } catch {
                cy.fixture('locator.json').then(locators => {
                    locator = locators;
                    cy.xpath(eval(locatorValue)).click({ force: true });
                });
            }
        }
    }

    typeBylocatorWithoutPom(locatorValue, dataValue, typeOfLocator) {
        if (typeOfLocator == 'get') {
            try {
                cy
                    .get(locatorValue).clear({ force: true })
                    .get(locatorValue).type(dataValue, { force: true });
            } catch {
                cy
                    .get(eval(locatorValue)).clear({ force: true })
                    .get(eval(locatorValue)).type(dataValue, { force: true });
            }
        } else {
            try {
                cy
                    .xpath(locatorValue).clear({ force: true })
                    .xpath(locatorValue).type(dataValue, { force: true });
            } catch {
                cy
                    .xpath(eval(locatorValue)).clear({ force: true })
                    .xpath(eval(locatorValue)).type(dataValue, { force: true });
            }
        }
    }

    clickByLocatorWithoutPom(locatorValue, typeOfLocator) {
        if (typeOfLocator == 'get') {
            try {
                cy.get(locatorValue).click({ force: true });
            } catch {
                cy.fixture('locator.json').then(locators => {
                    locator = locators;
                    cy.get(eval(locatorValue)).click({ force: true });
                });
            }
        } else {
            try {
                cy.xpath(locatorValue).click({ force: true });
            } catch {
                cy.fixture('locator.json').then(locators => {
                    locator = locators;
                    cy.xpath(eval(locatorValue)).click({ force: true });
                });
            }
        }
    }

    trigger(locatorValue, value) {

        if (value != "") {
            cy.get(locatorValue).contains(value).trigger('click');
        } else {
            cy.get(locatorValue).trigger('click');
        }
    }

    triggerJsonData(locatorValue, value) {

        cy.fixture('locator.json').then(locators => {
            locator = locators;
            if (value != "") {
                cy.get(eval(locatorValue)).contains(value).trigger('click');
            } else {
                cy.get(eval(locatorValue)).trigger('click');
            }
        });
    }

    xpathClick(locatorValue) {
        cy.xpath(locatorValue).click({ force: true });
    }

    xpathType(locatorValue, dataValue) {
        cy.xpath(locatorValue).clear({ force: true })
            .xpath(locatorValue).type(dataValue, { force: true });
    }

    xpathTpyeJsonData(locatorValue, dataValue) {
        cy.fixture('locator.json').then(locators => {
            locator = locators;
            cy.fixture('data.json').then(datas => {
                data = datas;

                try {
                    cy
                        .xpath(eval(locatorValue)).clear({ force: true })
                        .xpath(eval(locatorValue)).type(eval(dataValue), { force: true });
                } catch {
                    cy
                        .xpath(eval(locatorValue)).clear({ force: true })
                        .xpath(eval(locatorValue)).type(dataValue, { force: true });
                }
            });
        });
    }

    resolution() {
        cy.viewport(window.screen.width, window.screen.height);
    }

    buttonClick(value) {
        switch (value) {
            case "HDR UK Papers & Preprints":
                cy.get(paperLink).then(($el) => {
                    $el.get(0).click();
                })
                break;
            case "How to request access":
                cy.get(requestAccess).then(($el) => {
                    $el.get(0).click();
                })
                break;
            case "Start application":
                cy.wait(5000)
                cy.get(startApplication).contains("Start application").then(($el) => {
                    $el.get(0).click();
                })

                cy.wait(3000)
                cy.get(startApplication).contains("Start application").then(($el) => {
                    $el.get(0).click();
                })
                break;
        }
    }

    popupWindowValidation() {
        cy.xpath(popupWindowText1)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Mandatory fields missing')
            });
        cy.xpath(popupWindowText2)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('You cannot submit this dataset for review until you have completed all the mandatory questions. If you need to submit this dataset without the mandatory answers, please raise a support ticket at the following link: https://hdruk.atlassian.net/servicedesk/customer/portal/1')
            });
    }

    popupWindowMandatoryValidation() {
        cy.xpath(popupWindowText3)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('Mandatory Fields Missing')
            });
        cy.xpath(popupWindowText4)
            .invoke("text")
            .then(text => {
                expect(text).to.eq('You cannot submit this application for review until you have completed all the mandatory questions.')
            });
    }

    clickClosePopupWindow() {
        cy.xpath(clickClosePopupWindowBtn).click({ force: true });
    }

    deleteDraft() {
        cy.get(manageApplicationBtn).then(($el) => {
            $el.get(0).click({ force: true });
        })
        cy.wait(3000);
        cy.get(deleteDraftBtn).then(($el) => {
            $el.get(0).click({ force: true });
        })
        cy.wait(5000);
        cy.xpath(deleteDraftButton).then(($el) => {
            $el.get(0).click({ force: true });
        })
        //cy.wait(3000);
        //cy.xpath(homwPageLogo).click();

        //cy.xpath(homwPageLogo).then(($el) => {
        //  $el.get(0).click({force: true});
        //  })
        //cy.wait(3000);
        //cy.xpath(datsets).then(($el) => {
        //  $el.get(0).click({force: true});
        //})
       // cy.get(datsets)
           // .then(($el) => {
             //   const url = $el.prop("href")
               // cy.visit("https://web.uat.healthdatagateway.org/search?search=&datasetSort=latest&tab=Datasets");
           // })
    }

    postGet(postUrl, getUrl, clientId, clientSecret, postRequest, getRequest) {

        cy.request({

            method: postRequest,
            url: postUrl,
            body: {
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret,
            }
        }).then(({ body }) => {
            const { access_token } = body

            cy.request({
                method: getRequest,
                url: getUrl,
                headers: { Authorization: `${access_token}` },
            }).then(({ body, status }) => {
                //cy.log(JSON.stringify(body))
                const userItem = {
                    publisherTotals: body.data.publisherTotals.inReview,
                    results: body.data.results.total
                }
                statusCode = status
                cy.log(status);
            })
        })
    }

    verifyStatus() {
        expect(statusCode).equal(200)
    }
}

export default CommonUtil