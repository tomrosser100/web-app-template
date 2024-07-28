import { io, Socket } from 'socket.io-client'
import type SocketEvents from '../../shared/SocketEvents'

export default io() as Socket<SocketEvents>