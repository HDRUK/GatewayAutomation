import DashBoardPage from "../DashBoardPage";

const dashBoardPage = new DashBoardPage();
const selectFile = "input[type=file]";
const structuralMetadataText = ".black-20-semibold.mb-0";

class StructuralMetadataPage {

    structuralMetadata() {
        cy.get(structuralMetadataText).contains("Structural metadata").should('exist');
        cy.get(selectFile).attachFile('PDR28Structuralmetadata.xlsx');
        dashBoardPage.textVerifyFileUpload();
    }
}
export default StructuralMetadataPage