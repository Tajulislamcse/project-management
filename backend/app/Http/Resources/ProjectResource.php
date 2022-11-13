<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
public function toArray($request)
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'description' => $this->description,
        'created_at' => $this->created_at,
        'status_text' => $this->status == 1 ? "Active" : "Inactive",
        'members' => $this->group->name ?? $this->whenLoaded('users',
         $this->users->pluck('name')->unique()->all(),[]) 
    ];
}
}
