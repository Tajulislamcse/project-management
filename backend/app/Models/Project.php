<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
     'name',
     'description',
     'status',
     'group_id'
    ];
   public function users()
	{
		return $this->belongsToMany('App\Models\User');
	}
    public function group()
    {
        return $this->belongsTo('App\Models\Group');
    }
}
