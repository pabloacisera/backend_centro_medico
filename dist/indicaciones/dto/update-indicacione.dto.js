"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIndicacioneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_indicacione_dto_1 = require("./create-indicacione.dto");
class UpdateIndicacioneDto extends (0, mapped_types_1.PartialType)(create_indicacione_dto_1.CreateIndicacionDto) {
}
exports.UpdateIndicacioneDto = UpdateIndicacioneDto;
//# sourceMappingURL=update-indicacione.dto.js.map