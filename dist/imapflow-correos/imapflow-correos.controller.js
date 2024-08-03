"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImapController = void 0;
const common_1 = require("@nestjs/common");
const imapflow_correos_service_1 = require("./imapflow-correos.service");
let ImapController = class ImapController {
    constructor(imapService) {
        this.imapService = imapService;
    }
    async fetchEmails() {
        try {
            const emails = await this.imapService.fetchEmails();
            return { emails };
        }
        catch (error) {
            return { error: 'Failed to fetch emails', details: error };
        }
    }
};
exports.ImapController = ImapController;
__decorate([
    (0, common_1.Get)('fetch-emails'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImapController.prototype, "fetchEmails", null);
exports.ImapController = ImapController = __decorate([
    (0, common_1.Controller)('imap'),
    __metadata("design:paramtypes", [imapflow_correos_service_1.ImapService])
], ImapController);
//# sourceMappingURL=imapflow-correos.controller.js.map