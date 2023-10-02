<?php

namespace App\Listeners;

use BeyondCode\LaravelWebSockets\WebSockets\WebSocket;
use BeyondCode\LaravelWebSockets\WebSockets\Messages\WebSocketMessage;
use Illuminate\Support\Facades\Log;

class MyEventListener
{
    public function __construct()
    {
        //
    }

    // public function handle(WebSocket $webSocket, WebSocketMessage $webSocketMessage)
    // {
    //     $event = $webSocketMessage->getPayload();
    //     $data = $webSocketMessage->toArray();

    //     Log::info('Received event: ' . $event);
    //     Log::info('Data: ' . json_encode($data));

    //     // Perform any necessary actions based on the event and data
    //     // For example, you can broadcast a response back to connected clients
    //     // using $webSocket->broadcastToOthers(...);

    //     // You can also emit a response back to the client that sent the event
    //     // using $webSocket->emit(...);
    // }
}
