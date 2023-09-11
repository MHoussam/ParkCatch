<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        // Define the list of allowed origins (replace with your actual domains or '*')
        $allowedOrigins = 'http://localhost:19006';

        // Check if the origin of the request is in the allowed origins list
        $origin = $request->header('Origin');

        if ($origin === $allowedOrigins) {
            // Allow this origin to access your API
            header('Access-Control-Allow-Origin: ' . $allowedOrigins);
        }

        // Define allowed HTTP methods
        $allowedMethods = 'GET, POST, PUT, DELETE, OPTIONS';

        // Set CORS headers for allowed methods
        header('Access-Control-Allow-Methods: ' . $allowedMethods);

        // Define allowed headers (you can customize this based on your needs)
        $allowedHeaders = 'Origin, Content-Type, Accept, Authorization';

        // Set CORS headers for allowed headers
        header('Access-Control-Allow-Headers: ' . $allowedHeaders);

        // Allow credentials to be sent with the request (if needed)
        header('Access-Control-Allow-Credentials: true');

        // Handle preflight requests (OPTIONS requests)
        if ($request->isMethod('OPTIONS')) {
            // Return an empty response with 200 status code for preflight requests
            return response()->json(['message' => 'Preflight request accepted'], 200);
        }

        // Continue processing the request
        return $next($request);
    }
}