"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const templateEmail_1 = __importDefault(require("./templateEmail"));
class SendEmail {
    transport() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    sendMail(emails, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //emails.push("jose es el nuevo")
            const transport = yield nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'yuli.espitia2@kiero.co',
                    pass: 'Clavesegura2017'
                }
            });
            const mailOptions = {
                from: 'yuli.espitia2@kiero.co',
                to: JSON.stringify(emails),
                subject: 'Kiero | Vendiste un producto!',
                html: data
            };
            const result = yield transport.sendMail(mailOptions);
            return result;
        });
    }
}
var objet = ["josemase55@gmail.com"];
var sendMail = new SendEmail;
sendMail.sendMail(objet, templateEmail_1.default.sendEmail('jose'));
