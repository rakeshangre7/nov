const RootItemContentQuery = `query RootItem($sitename: String!, $language: String!) {
  layout(site: $sitename, routePath: "/", language: $language) {
    item {
      homeItemPath: path
      homeItemId: id
      contentRoot: parent {
        id
        path
      }
    }
  }
}`;

export default RootItemContentQuery;
