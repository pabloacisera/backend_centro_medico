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
  
    // Obtener la fecha sin la hora para una búsqueda más sencilla
    const fechaInicioDelDia = new Date(fecha.toISOString().split('T')[0] + 'T00:00:00.000Z');
    const fechaFinDelDia = new Date(fechaInicioDelDia.getTime() + 24 * 60 * 60 * 1000); // Fin del día
  
    // Buscar si hay algún turno en el mismo día
    const turnoExistente = await this.prisma.turno.findFirst({
      where: {
        fecha: {
          gte: fechaInicioDelDia,
          lt: fechaFinDelDia,
        },
      },
    });
  
    if (turnoExistente) {
      return { mensaje: 'Turno no disponible', sugerencias: [] };
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
      throw new InternalServerErrorException('Error al crear el turno');
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
