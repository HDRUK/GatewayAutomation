import { When } from "cypress-cucumber-preprocessor/steps";
import EnrichmentAndLinkagePage from "../../PageObjects/datsetOnboarding/EnrichmentAndLinkagePage";

const enrichmentAndLinkagePage = new EnrichmentAndLinkagePage();

When('I fill details in enrichment and Linkage', () => {
    enrichmentAndLinkagePage.enrichmentAndLinkage();
}); 


 