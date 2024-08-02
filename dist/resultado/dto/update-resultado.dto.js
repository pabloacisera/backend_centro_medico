"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResultadoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_resultado_dto_1 = require("./create-resultado.dto");
class UpdateResultadoDto extends (0, mapped_types_1.PartialType)(create_resultado_dto_1.CreateResultadoDto) {
}
exports.UpdateResultadoDto = UpdateResultadoDto;
//# sourceMappingURL=update-resultado.dto.js.map