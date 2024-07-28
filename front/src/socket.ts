import { io, Socket } from 'socket.io-client'
import type SocketEvents from '../../shared/SocketEvents'

export default io({ reconnection: false }) as Socket<SocketEvents>