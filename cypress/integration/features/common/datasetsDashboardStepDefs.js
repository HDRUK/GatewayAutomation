import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonUtil from "../util/CommonUtil";
import DatasetsDashboardPage from "../PageObjects/DatasetsDashboardPage";

const commonUtil = new CommonUtil();
const datasetsDashboardPage = new DatasetsDashboardPage();
const postUrl = "https://api.uat.healthdatagateway.org:443/oauth/token";
let getUrl

Given('I am sorting out {string} as {string}', (value, user) => {

    if (user == "Custodian") {

        const clientId = "3439fe9cfe7fe3c";
        const clientSecret = "1055c0430738562b25a13d8f16c888edf5f413c7eafa55e536";

        if (value === "Recent activity") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "latest&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Alphabetically") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "alphabetic&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Metadata quality") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "metadata&sortDirection=desc&status=active,draft"
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "recentlyadded&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        }
    } else if (user == "Admin") {

        const clientId = "396ead38f4a3173";
        const clientSecret = "4ecf040c415968cee261ee42ba9ce330b43618f4d97ccadd7b";


        if (value === "Recent activity") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "latest&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Alphabetically") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "alphabetic&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Metadata quality") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "metadata&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&sortBy=" + "recentlyadded&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        }
    }

});

Then('I should see response {int}', () => {
    commonUtil.verifyStatus();
});

When('I navigate to datasets dashboard', () => {
    datasetsDashboardPage.datasetsDashboardUserLoginDropdown();
});

Given('I am stitching serach {string} and sorting out {string} as {string}', (searchValue, value, user) => {

    if (user == "Custodian") {

        const clientId = "3439fe9cfe7fe3c";
        const clientSecret = "1055c0430738562b25a13d8f16c888edf5f413c7eafa55e536";

        if (value === "Recent activity") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=latest&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Alphabetically") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=alphabetic&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Metadata quality") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=metadata&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=recentlyadded&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        }
    } else if (user == "Admin") {

        const clientId = "396ead38f4a3173";
        const clientSecret = "4ecf040c415968cee261ee42ba9ce330b43618f4d97ccadd7b";

        if (value === "Recent activity") {

            getUrl = getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=latest&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Alphabetically") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=alphabetic&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else if (value === "Metadata quality") {

            getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=metadata&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        } else {

            getUrl = getUrl = "https://api.uat.healthdatagateway.org/api/v1/dataset-onboarding/publisher/5f7b1a2bce9f65e6ed83e7da?limit=1000&page=1&search=" + searchValue + "&sortBy=recentlyadded&sortDirection=desc&status=active,draft";
            commonUtil.postGet(postUrl, getUrl, clientId, clientSecret, "Post", "Get");

        }
    }

});


