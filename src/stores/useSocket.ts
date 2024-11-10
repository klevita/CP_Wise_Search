import { useMessageStore } from './MessageStore'
import { useUserStore } from './UserStore'

export function connect () {
  const messageStore = useMessageStore()
  const userStore = useUserStore()
  const ws = new WebSocket(`wss://${process.env.API}/cable?username=${userStore.user.username}`)
  ws.onopen = function () {
    ws.send(JSON.stringify({
      command: 'subscribe',
      identifier: '{"channel":"UserChannel"}'
    }))
    ws.send(JSON.stringify({
      command: 'message',
      data: '{"action": "fetch_room"}',
      identifier: '{"channel":"UserChannel"}'
    }))
  }

  ws.onmessage = function (e) {
    const resp = JSON.parse(e.data)
    if (resp.message && resp.message.kind) {
      if (resp.message.kind === 'new_message') {
        if (resp.message.object.room_id === messageStore.currentRoomId) {
          messageStore.messages.push(resp.message.object)
        }
      }
      if (resp.message.kind === 'room_id') {
        messageStore.currentRoomId = resp.message.room_id
      }
    }
  }

  ws.onclose = function (e) {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
    setTimeout(function () {
      connect()
    }, 1000)
  }

  ws.onerror = function (err) {
    console.error('Socket encountered error: ', err, 'Closing socket')
    ws.close()
  }
  return ws
}
