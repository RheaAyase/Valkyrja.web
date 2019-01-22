<?php

namespace Valkyrja\Http\Controllers\Config;

use Valkyrja\Http\Controllers\Controller;
use Valkyrja\Models\ServerConfig;
use Illuminate\Http\Request;

class ConfigController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('config/guilds');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $serverId
     * @return \Illuminate\View\View
     */
    public function edit($serverId)
    {
        return view('config/edit', [
            'serverId' => $serverId
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Valkyrja\ServerConfig $serverConfig
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServerConfig $serverConfig)
    {
        echo 'test';
        // Expect to be authorized
        // replace Request method injection with form validation
        // Save to tables
        // Redirect with message
    }

}