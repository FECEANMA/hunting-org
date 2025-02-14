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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreaturesController = void 0;
const common_1 = require("@nestjs/common");
const creatures_service_1 = require("./creatures.service");
const create_creature_dto_1 = require("./dto/create-creature.dto");
const update_creature_dto_1 = require("./dto/update-creature.dto");
let CreaturesController = class CreaturesController {
    constructor(creaturesService) {
        this.creaturesService = creaturesService;
    }
    findAll() {
        return this.creaturesService.findAll();
    }
    findExtinct() {
        return this.creaturesService.findExtinct();
    }
    findOne(id) {
        return this.creaturesService.findOne(+id);
    }
    create(createCreatureDto) {
        return this.creaturesService.create(createCreatureDto);
    }
    update(id, updateCreatureDto) {
        return this.creaturesService.update(+id, updateCreatureDto);
    }
    remove(id) {
        return this.creaturesService.remove(+id);
    }
};
exports.CreaturesController = CreaturesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CreaturesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('extinct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CreaturesController.prototype, "findExtinct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CreaturesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_creature_dto_1.CreateCreatureDto]),
    __metadata("design:returntype", void 0)
], CreaturesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_creature_dto_1.UpdateCreatureDto]),
    __metadata("design:returntype", void 0)
], CreaturesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CreaturesController.prototype, "remove", null);
exports.CreaturesController = CreaturesController = __decorate([
    (0, common_1.Controller)('creatures'),
    __metadata("design:paramtypes", [creatures_service_1.CreaturesService])
], CreaturesController);
//# sourceMappingURL=creatures.controller.js.map