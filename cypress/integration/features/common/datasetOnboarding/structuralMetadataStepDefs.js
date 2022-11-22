import { When } from "cypress-cucumber-preprocessor/steps";
import StructuralMetadataPage from "../../PageObjects/datsetOnboarding/StructuralMetadataPage";

const structuralMetadataPage = new StructuralMetadataPage();

When('I fill details in structural Metadata', () => {
    structuralMetadataPage.structuralMetadata();
});