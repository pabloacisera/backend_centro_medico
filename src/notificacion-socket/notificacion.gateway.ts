import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: 'https://frontend-centro-medico-v2.onrender.com',
        methods: ['GET', 'POST'],
        credentials: true
    }
})
export class NotificacionGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    handleConnection(client: Socket) {
        console.log('Socket conectado', client.id);
    }

    handleDisconnect(client: Socket) {
        console.log('Socket desconectado');
    }

    @SubscribeMessage('notificar-presencia')
    handleNotificarPresencia(@MessageBody() id: number): void {
        console.log('Notificación de presencia para cliente ID:', id);
        this.server.emit('notificacion-presencia', id);
    }
}

