const RobotsTextQuery = `
  query RobotsText($datasource: String!, $language: String!) {
    datasource: item(path: $datasource, language: $language) {
      field(name: "robotsTxt") {
        ... on TextField {
          value
        }
      }
    }
  }
`;

export default RobotsTextQuery;
