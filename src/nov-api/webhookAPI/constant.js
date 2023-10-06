const LANGUAGE = process.env.LANGUAGE;
const PROJECT = process.env.PROJECT;

const getGraphQLQuery = (type, variable) => {
  if (type?.toLowerCase() === "item") {
    return `query{
      item(path:"${variable}",language:"${LANGUAGE}"){
              id
              path
              productCategoryType: field(name: "productCategoryType") {
                ... on LookupField {
                  targetItem {
                    field(name: "categoryType") {
                      value
                    }
                  }
                }
              }
              assetTitle: field(name: "assetTitle") {
                value
              }
              assetDescription: field(name: "assetDescription") {
                value
              }
              businessSegment: field(name: "businessSegment") {
                ... on LookupField {
                  targetItem {
                    field(name: "businessSegmentName") {
                      value
                    }
                  }
                }
              }
            businessUnit: field(name: "businessUnit"){
              ... on LookupField{
                targetItem{
                   field(name: "businessUnitName"){
                    value
                  }
                }
              }
            }
            mediaItem: field(name: "mediaItem"){
              ... on LookupField{
                targetItem{
                  field: url{
                    value: url
                  }
                }
              }
            }
            assetType: field(name:"assetType"){
              ... on LookupField{
               targetItem{
                 field: url{
                   value: url
                 }
               }
             }
           }
            }
          }`;
  }
  return `query{
    layout(routePath:"${variable}", site:"${PROJECT}",language:"${LANGUAGE}"){
      item{
        id
        path
        businessSegments: field(name:"businessSegments"){
         ... on MultilistField{
           targetItems{
             field(name:"businessSegmentName"){
               value
             }
           }
         }
       }
       businessUnits: field(name:"businessUnits"){
         ... on MultilistField{
           targetItems{
             field(name: "businessUnitName"){
               value
             }
           }
         }
       }
       brands:field(name: "brands"){
         ... on MultilistField{
           targetItems{
             field(name: "brandName"){
               value
             }
           }
         }
       }
       capabilities: field(name: "capabilities"){
         ... on MultilistField{
           targetItems{
             field(name: "capabilityName"){
               value
             }
           }
         }
       }
       categories: field(name: "categories"){
         ... on MultilistField{
           targetItems{
             field(name: "categoryName"){
               value
             }
           }
         }
       }
       pageUrl: url{
         url
       }
       imageUrl:field(name: "cardImage"){
         ... on ImageField{
           src
         }
       }
       title: field(name: "Title"){
         value
       }
       description: field(name:"metaDescription"){
         value
       }
       date: field(name:"date"){
         value
       }
      }
    }
  }
  `;
};

const fieldsNames = {
  brands: "brands",
  businessSegment: "business_segments",
  type: "type",
  businessUnit: "business_unit",
  capability: "capability",
  category: "category",
  country: "country",
  date: "date",
  description: "description",
  id: "id",
  imageUrl: "image_url",
  pageUrl: "page_url",
  name: "name",
  title: "name",
  breadcrumbs: "breadcrumbs",
  body: "body",
  productCategoryType: "product_category_type",
  assetTitle: "asset_title",
  assetDescription: "asset_description",
  mediaItem: "media_item",
  assetType: "asset_type",
  application: "application",
};

module.exports = {
  getGraphQLQuery,
  fieldsNames,
};
