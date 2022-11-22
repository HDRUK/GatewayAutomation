import CommonUtil from "../util/CommonUtil";

const search = ".css-83xut7";
const searchButton = ".ui-Button.css-1og6tvc"
const commonUtil = new CommonUtil();

class HomePage {

    searchWithValue(searchString) {
        commonUtil.type(search, searchString);
        commonUtil.click(searchButton);
    }
}

export default HomePage