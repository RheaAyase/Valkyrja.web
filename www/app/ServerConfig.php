<?php

namespace Botwinder;

use Illuminate\Database\Eloquent\Model;

class ServerConfig extends Model
{
    protected $table = 'server_config';
    protected $primaryKey = 'serverid';
    public $timestamps = false;

    protected $guarded = [
        'name',
        'invite_url',
        'localisation_id'
    ];

    protected $casts = [
        'serverid' => 'string',
        'operator_roleid' => 'string',
        'mute_roleid' => 'string',
        'mute_ignore_channelid' => 'string',
        'voice_channelid' => 'string',
        'activity_channelid' => 'string',
        'log_channelid' => 'string',
        'mod_channelid' => 'string',
        'embed_voicechannel' => 'string',
        'embed_activitychannel' => 'string',
        'embed_logchannel' => 'string',
        'embed_modchannel' => 'string',
        'color_voicechannel' => 'string',
        'color_activitychannel' => 'string',
        'color_logchannel' => 'string',
        'color_modchannel' => 'string',
        'welcome_roleid' => 'string',
        'verify_roleid' => 'string',
        'base_exp_to_levelup' => 'string',
        'exp_per_message' => 'string',
        'exp_per_attachment' => 'string',
    ];

    public function getAttributeValue($key)
    {
        $value = $this->getAttributeFromArray($key);
        if ($this->isColorAttribute($key)) {
            return "#" . str_pad(dechex($value), 6, "0", STR_PAD_LEFT);
        }

        return parent::getAttributeValue($key);
    }

    public function setAttribute($key, $value)
    {
        $parent = parent::setAttribute($key, $value);
        if ($this->isColorAttribute($key)) {
            $this->attributes[$key] = hexdec($value);
        }
        return $parent;
    }

    protected function isColorAttribute($key)
    {
        return preg_match('/^color_/', $key);
    }

    public function customCommands()
    {
        return $this->hasMany('Botwinder\CustomCommand');
    }

    public function channels()
    {
        return $this->hasMany('Botwinder\Channel');
    }

    public function roles()
    {
        return $this->hasMany('Botwinder\Role');
    }

    /**
     * Used for hasMany() relations. Would otherwise default to wrong key
     * @return string
     */
    public function getForeignKey()
    {
        return $this->primaryKey;
    }

    public function updateCustomCommands($commands)
    {
        if (!is_array($commands) && count($commands) == 0) {
            return false;
        }
        $this->customCommands()->whereNotIn('commandid', $commands)->delete();
        foreach ($commands as $command) {
            $this->customCommands()->updateOrInsert(
                [
                    'serverid' => $this->serverid,
                    'commandid' => $command['commandid']
                ], $command);
        }
        return true;
    }

    public function updateChannels($channels)
    {
        if (!is_array($channels) && count($channels) == 0) {
            return false;
        }
        $commandKeys = array_column($channels, 'channelid');
        $deleteChannels = $this->channels()->whereNotIn('channelid', $commandKeys);
        if ($deleteChannels->count() > 0) {
            $deleteChannels->delete();
        }
        foreach ($channels as $channel) {
            $this->channels()->updateOrCreate(['channelid' => $channel['channelid']], $channel);
        }
        return true;
    }

    public function updateRoles($roles)
    {
        if (!is_array($roles) && count($roles) == 0) {
            return false;
        }
        $commandKeys = array_column($roles, 'roleid');
        $deleteRoles = $this->roles()->whereNotIn('roleid', $commandKeys);
        if ($deleteRoles->count() > 0) {
            $deleteRoles->delete();
        }
        foreach ($roles as $role) {
            $this->roles()->updateOrCreate(['roleid' => $role['roleid']], $role);
        }
        return true;
    }

    public function createNew($id)
    {
        return new ServerConfig($id);
    }

    public function jsonSerializeApi()
    {
        $this->roles = $this->roles()->get()->jsonSerialize();
        $this->channels = $this->channels()->get()->jsonSerialize();
        foreach ($this->guarded as $guard) {
            unset($this->{$guard});
        }
        return parent::jsonSerialize(); // TODO: Change the autogenerated stub
    }


}
