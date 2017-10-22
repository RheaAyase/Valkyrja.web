<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'roleid',
        'permission_level'
    ];

    protected $casts = [
        'roleid' => 'string',
        'public_id' => 'string',
        'level' => 'string',
        'permission_level' => 'string'
    ];

    protected $hidden = [
        'serverid'
    ];

    public function server_config()
    {
        return $this->belongsTo('App\ServerConfig');
    }

    public function getForeignKey()
    {
        return 'serverid';
    }
}