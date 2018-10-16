<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DiscordSampleGuildSeeder::class);
        $this->call(DiscordSampleUserSeeder::class);
        $this->call(ChannelsSeeder::class);
        $this->call(CustomCommandsSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(ServerConfigSeeder::class);
    }
}
