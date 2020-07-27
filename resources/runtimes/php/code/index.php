<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require './vendor/autoload.php';

$app = new \Slim\App();

$app->get('/', function (Request $request, Response $response, array $args) {

    $json_response = array(
        "Message" => "My PHP container is running...",
        "Hostname" => gethostname(),
        "PHP version" => phpversion(),
        "Request Headers" => $request->getHeaders()
        );
    return $response->withJson($json_response);;
});

$app->run();