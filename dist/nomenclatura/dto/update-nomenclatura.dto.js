"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNomenclaturaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_nomenclatura_dto_1 = require("./create-nomenclatura.dto");
class UpdateNomenclaturaDto extends (0, mapped_types_1.PartialType)(create_nomenclatura_dto_1.CreateNomenclaturaDto) {
}
exports.UpdateNomenclaturaDto = UpdateNomenclaturaDto;
//# sourceMappingURL=update-nomenclatura.dto.js.map