import { io, Socket } from 'socket.io-client'
import type SocketEvents from '../../shared/socketEvents'

export default io({ reconnection: true }) as Socket<SocketEvents>