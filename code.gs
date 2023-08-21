function doGet(e) {
  // var htmServ = HtmlService.createHtmlOutputFromFile("index");
  var htmServ = HtmlService.createTemplateFromFile("index");
  var url = "https://hubblecontent.osi.office.net/contentsvc/api/contenthost/channel?cp=Remix3D&setLang=en-US&app=microsoft.3dbuilder";

  var data = {"Categories":[
    {
      "Name":"Animals",
      "thumbnailImage": "https://thumbs.dreamstime.com/z/wildlife-wild-animals-nature-isolated-animal-illustration-orientation-banner-panoramic-panorama-each-white-213967473.jpg"
    },
    {
      "Name":"Vehicles",
      "thumbnailImage": "https://7esl.com/wp-content/uploads/2017/12/vehicles.jpeg"
    },
    {
      "Name":"Animal",
      "thumbnailImage": ""
    }    
    ]
    };
  var options = {
  'method' : 'get',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  // 'payload' : JSON.stringify(data),
  muteHttpExceptions: true
  };
  response = UrlFetchApp.fetch(url, options);

  Logger.log(response);
  htmServ.data = data;//JSON.parse(response);
  Logger.log(e);
  return htmServ.evaluate();
  
}
function getObject(q="animal")
{
  
    var htmServ = HtmlService.createTemplateFromFile("show");
    var url = "https://hubble.officeapps.live.com/mediasvc/api/media/search?v=1&lang=en-US";
  
    // Make a POST request with a JSON payload.
 
    var data = {"type":"Search","descriptor":{"$type":"Remix3DSearchDescriptor"},"parameters":{"app":"microsoft.3dbuilder"},"query":q,"pageSize":20};
    var options = {
    'method' : 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data),
    muteHttpExceptions: true
    };
    response = UrlFetchApp.fetch(url, options);

    Logger.log(JSON.parse(response));
    htmServ.response = JSON.parse(response);
    return htmServ.evaluate().getContent();
}
