import { FormDataProps } from './Form';

const defaultData: FormDataProps = {
  rendering: { componentName: 'Form' },
  params: {},
  fields: {
    elementid: {
      value: '',
    },
    eloquaForm: {
      id: '3f300467-81c7-4037-9406-fbb8fe02c13e',
      url: '/Data/Eloqua-Forms/Non-Product-Form',
      name: 'Non Product Form',
      displayName: 'Non Product Form',
      fields: {
        anchorTargetName: {
          value: 'contactus',
        },
        form: {
          value:
            '<form id="form0" class="elq-form" ></form><style>.formLoader { border-top-color: #da291c !important;}</style>\r\n\r\n<script type="text/javascript">\r\n    function topicChange() {\r\n        var topic = document.getElementById("fd416a82-619a-ea11-a811-000d3a3477a0");\r\n        var topicSelected = topic.options[topic.selectedIndex].text;\r\n        var businessUnit = document.getElementById("BusinessUnit").closest(\'.layout-col\'); \r\n        var brand = document.getElementById("Brand").closest(\'.layout-col\'); \r\n        var firstName = document.getElementById("FirstName").closest(\'.layout-col\'); \r\n        var lastName = document.getElementById("LastName").closest(\'.layout-col\'); \r\n        var email = document.getElementById("EmailAddress").closest(\'.layout-col\'); \r\n        var company = document.getElementById("CompanyName").closest(\'.layout-col\'); \r\n        var jobTitle = document.getElementById("JobTitle").closest(\'.layout-col\'); \r\n        var country = document.getElementById("Country").closest(\'.layout-col\'); \r\n        var commentsBox = document.getElementById("Comments").closest(\'.layout-col\'); \r\n        var careerText = document.getElementById("Career");\r\n        var responsibleDisclosure = document.getElementById("ResponsibleDisclosure");\r\n        var submitButton = document.getElementById("SubmitButton").closest(\'.layout-col\');\r\n\r\n            \r\n        businessUnit.style.display = "none";\r\n        brand.style.display = "none";\r\n        firstName.style.display = "none";\r\n        lastName.style.display = "none";\r\n        email.style.display = "none";\r\n        company.style.display = "none";\r\n        jobTitle.style.display = "none";\r\n        country.style.display = "none";\r\n        commentsBox.style.display = "none";\r\n        careerText.style.display = "none";\r\n        responsibleDisclosure.style.display = "none";\r\n        submitButton.style.display = "none";\r\n\r\n        switch (topicSelected) {\r\n            case \'Products\':\r\n                businessUnit.style.display = "block";\r\n                brand.style.display = "block";\r\n                firstName.style.display = "block";\r\n                lastName.style.display = "block";\r\n                email.style.display = "block";\r\n                company.style.display = "block";\r\n                jobTitle.style.display = "block";\r\n                country.style.display = "block";\r\n                commentsBox.style.display = "block";\r\n                submitButton.style.display = "block";\r\n                break;\r\n\r\n            case \'Investors Relations\':\r\n\r\n            case \'Podcasts\':\r\n\r\n            case \'Other\':\r\n                businessUnit.style.display = "none";\r\n                brand.style.display = "none";\r\n                firstName.style.display = "block";\r\n                lastName.style.display = "block";\r\n                email.style.display = "block";\r\n                company.style.display = "block";\r\n                jobTitle.style.display = "block";\r\n                country.style.display = "block";\r\n                commentsBox.style.display = "block";\r\n                submitButton.style.display = "block";\r\n                break;\r\n\r\n            case \'Careers\':\r\n                careerText.style.display = "block";\r\n                break;\r\n\r\n            case \'Responsible Disclosure\':\r\n                responsibleDisclosure.style.display = "block";\r\n                break;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    function setBrandDisable() {\r\n        var businessUnit = document.getElementById("941fa6f3-459b-ea11-a811-000d3a3477a0");\r\n        var brand = document.getElementById("2319c5ba-1c9c-ea11-a811-000d3a3477a0");\r\n        if (businessUnit.options[businessUnit.selectedIndex].value === \'\') {\r\n            brand.disabled = false;\r\n            brand.style.background = "transparent";\r\n\r\n        }\r\n        else {\r\n            brand.disabled = true;\r\n            brand.style.background = "rgb(206, 206, 206)";\r\n        }\r\n    }\r\n\r\n    function setBUDisable() {\r\n        var businessUnit = document.getElementById("941fa6f3-459b-ea11-a811-000d3a3477a0");\r\n        var brand = document.getElementById("2319c5ba-1c9c-ea11-a811-000d3a3477a0");\r\n        if (brand.options[brand.selectedIndex].value === \'\') {\r\n            businessUnit.disabled = false;\r\n            businessUnit.style.background = "transparent";\r\n        }\r\n        else {\r\n            businessUnit.disabled = true;\r\n            businessUnit.style.background = "rgb(206, 206, 206)";\r\n        }\r\n    }\r\n</script>\r\n\r\n<div data-form-block-id="f32db81d-749d-ec11-b400-000d3a5beb90"></div> <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.80.2009.0"></script> <div id="dh7IGScPyQ9qfVubvjq7kGKASlekvIeanFe5jIlR65Bs"></div><script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.80.2009.0"></script><div class="d365-mkt-config" style="display:none" data-website-id="h7IGScPyQ9qfVubvjq7kGKASlekvIeanFe5jIlR65Bs" data-hostname="87b9c69a4d404a63af29f40ad50a6f86.svc.dynamics.com"></div>\r\n\r\n<script>\r\n    MsCrmMkt.MsCrmFormLoader.on("afterFormLoad", function(event) {\r\n        var topicList = document.getElementById(\'fd416a82-619a-ea11-a811-000d3a3477a0\');\r\n        topicList.remove(10);\r\n        topicList.remove(9);\r\n        topicList.remove(8);\r\n        topicList.remove(7);\r\n\r\n        var i=0,inputs = document.querySelectorAll(\'.elq-form input, .elq-form select, .elq-form textarea\'),l=inputs.length;\r\n        for(;i<l;i++) {\r\n            inputs[i].addEventListener(\'focus\',function(){\r\n                this.closest(\'.elq-field-style\').classList.add(\'focus\');\r\n            },false);\r\n            inputs[i].addEventListener(\'blur\',function(){\r\n                this.closest(\'.elq-field-style\').classList.remove(\'focus\');\r\n                if (this.value.length>0) {\r\n                this.closest(\'.elq-field-style\').classList.add(\'data\');\r\n                }\r\n                else {\r\n                this.closest(\'.elq-field-style\').classList.remove(\'data\');\r\n                }\r\n            },false);\r\n        }\r\n\r\n    })\r\n</script>\r\n<style>.eloqua-form {position: relative;}</style><a name="map" style="position: absolute; bottom: -16px;"></a>',
        },
        formId: {
          value: '0',
        },
        goal: null,
      },
    },
    thankYouBody: {
      value:
        "<p>We've received your message and will respond to you as soon as possible. In the meantime, please continue exploring our product and service capabilities.</p>",
    },
    thankYouHeadline: {
      value: 'Thank you!',
    },
  },
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
