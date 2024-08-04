import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSistTurnoDto } from './dto/create-sist-turno.dto';
import { UpdateSistTurnoDto } from './dto/update-sist-turno.dto';
import { PrismaService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class SistTurnosService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async crearTurno(data: { fecha: string, clienteId: number, userId: number }) {
    const fecha = new Date(data.fecha);

    // Extraer la fecha en formato YYYY-MM-DD para comparar solo la parte de la fecha
    const fechaSolo = fecha.toISOString().split('T')[0];

    // Buscar turnos con la misma fecha (sin tener en cuenta la hora exacta)
    const turnoExistente = await this.prisma.turno.findFirst({
      where: {
        fecha: {
          gte: new Date(fechaSolo + 'T00:00:00.000Z'),
          lt: new Date(fechaSolo + 'T23:59:59.999Z'),
        },
      },
    });

    if (turnoExistente) {
      throw new ConflictException('Turno no disponible');
    }

    try {
      return await this.prisma.turno.create({
        data: {
          fecha,
          clienteId: data.clienteId,
          userId: data.userId,
        },
      });
    } catch (error) {
      console.error('Error al crear el turno:', error);
      throw new Error('Error al crear el turno');
    }
  }

  async obtenerTurnos() {
    return this.prisma.turno.findMany();
  }

  async obtenerTurnosPorUsuarioId(userId: number) {
    try {
      return await this.prisma.turno.findMany({
        where: { userId: userId },
      });
    } catch (error) {
      console.error('Error al obtener los turnos:', error);
      throw new InternalServerErrorException('No se ha podido obtener los turnos');
    }
  }

  remove(id: number) {
    return this.prisma.turno.delete({
      where: {
        id: id
      }
    })
  }
}
