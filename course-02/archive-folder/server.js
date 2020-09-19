"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const util_1 = require("./util/util");
const fs_1 = __importDefault(require("fs"));
(() => __awaiter(this, void 0, void 0, function* () {
    // Init the Express application
    const app = express_1.default();
    // Set the network port
    const port = process.env.PORT || 8082;
    // Use the body parser middleware for post requests
    app.use(body_parser_1.default.json());
    var imageFileArray = [""];
    var tempFilePath = "";
    // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
    // GET /filteredimage?image_url={{URL}}
    // endpoint to filter an image from a public url.
    // IT SHOULD
    //    1
    //    1. validate the image_url query
    //    2. call filterImageFromURL(image_url) to filter the image
    //    3. send the resulting file in the response
    //    4. deletes any files on the server on finish of the response
    // QUERY PARAMATERS
    //    image_url: URL of a publicly accessible image
    // RETURNS
    //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
    /**************************************************************************** */
    //! END @TODO1
    // Root Endpoint
    // Displays a simple message to the user
    app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.send("try GET /filteredimage?image_url={{}}");
    }));
    // add new filtering microservice endpoint
    app.get("/filteredimage", (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log('hello from c2-image-filter/filteredimage endpoint');
        console.log(`req params: ${req.query.image_url}`);
        let inputFile = req.query.image_url;
        console.log('calling filterImageFromURL()');
        var filteredImageFile = "";
        try {
            filteredImageFile = yield util_1.filterImageFromURL(inputFile);
            imageFileArray.push(filteredImageFile); // save filename into array for later deletion
            console.log('returned from filterImageFromURL() function');
            // send file back to client in resp.send()
            res.status(200);
            //res.send(`returning file ${filteredImageFile}`);
            //res.send('hello from c2-image-filter/filteredimage endpoint');
            res.sendFile(filteredImageFile);
            res.on('finish', () => {
                console.log('delete file from server.ts ', filteredImageFile);
                console.log('current working dir', __dirname);
                tempFilePath = `${__dirname}` + '/util/tmp';
                console.log('temp file path', tempFilePath);
                //deleteLocalFiles(imageFileArray);
                //var files = fs.readdirSync('util/tmp/');
                var files = fs_1.default.readdirSync(tempFilePath);
                console.log('contents temp dir', files);
                util_1.deleteLocalFilesWithDir(tempFilePath, files);
                console.log('file deletion complete');
            });
        }
        catch (error) {
            console.log('caught error from filterImageFromURL()', error);
            res.status(404).send('incorrect file format');
        }
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map